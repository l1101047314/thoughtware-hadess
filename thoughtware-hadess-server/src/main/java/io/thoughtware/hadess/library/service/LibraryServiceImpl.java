package io.thoughtware.hadess.library.service;

import io.thoughtware.hadess.common.RepositoryUtil;
import io.thoughtware.hadess.common.UuidGenerator;
import io.thoughtware.hadess.common.XpackYamlDataMaService;
import io.thoughtware.hadess.library.dao.LibraryDao;
import io.thoughtware.hadess.library.entity.LibraryEntity;
import io.thoughtware.hadess.library.model.*;
import io.thoughtware.hadess.pushcentral.model.PushLibrary;
import io.thoughtware.hadess.pushcentral.model.PushLibraryQuery;
import io.thoughtware.hadess.pushcentral.service.PushLibraryService;
import io.thoughtware.hadess.repository.model.*;
import io.thoughtware.hadess.repository.service.RepositoryGroupService;
import io.thoughtware.hadess.repository.service.RepositoryMavenService;
import io.thoughtware.hadess.repository.service.RepositoryService;
import io.thoughtware.hadess.scan.model.ScanLibrary;
import io.thoughtware.hadess.scan.model.ScanLibraryQuery;
import io.thoughtware.hadess.scan.service.ScanLibraryService;
import io.thoughtware.dal.jpa.criterial.condition.DeleteCondition;
import io.thoughtware.dal.jpa.criterial.conditionbuilder.DeleteBuilders;
import io.thoughtware.toolkit.beans.BeanMapper;
import io.thoughtware.core.page.Pagination;
import io.thoughtware.core.page.PaginationBuilder;
import io.thoughtware.toolkit.join.JoinTemplate;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.sql.Timestamp;
import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

/**
* LibraryServiceImpl-制品
*/
@Service
public class LibraryServiceImpl implements LibraryService {

    private static Logger logger = LoggerFactory.getLogger(LibraryServiceImpl.class);
    @Autowired
    LibraryDao libraryDao;

    @Autowired
    JoinTemplate joinTemplate;

    @Autowired
    RepositoryService repositoryService;

    @Autowired
    PushLibraryService pushLibraryService;

    @Autowired
    LibraryVersionService libraryVersionService;

    @Autowired
    LibraryFileService libraryFileService;

    @Autowired
    LibraryMavenService libraryMavenService;
    
    @Autowired
    RepositoryGroupService repositoryGroupService;

    @Autowired
    RepositoryMavenService repositoryMavenService;

    @Autowired
    ScanLibraryService scanLibraryService;

    @Value("${repository.test:null}")
    String testLibrary;

    @Autowired
    XpackYamlDataMaService yamlDataMaService;
    Map data=new HashMap();

    @Override
    public String createLibrary(@NotNull @Valid Library library) {
        LibraryEntity libraryEntity = BeanMapper.map(library, LibraryEntity.class);
        libraryEntity.setCreateTime(new Timestamp(System.currentTimeMillis()));
        libraryEntity.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        return libraryDao.createLibrary(libraryEntity);
    }

    @Override
    public void updateLibrary(@NotNull @Valid Library library) {
        LibraryEntity libraryEntity = BeanMapper.map(library, LibraryEntity.class);
        libraryEntity.setUpdateTime(new Timestamp(System.currentTimeMillis()));
        libraryDao.updateLibrary(libraryEntity);
    }

    @Override
    public void updateMvnLibrarySize(LibraryFile libraryFile, LibraryVersion libraryVersion, Long fileSize) {

        Library library = libraryFile.getLibrary();


        Library lib = this.findOne(library.getId());

        //快照版本
        if (libraryVersion.getVersion().endsWith("-SNAPSHOT")){
           if (!libraryFile.getRelativePath().contains("maven-metadata.xml")){
               List<LibraryFile> libraryFileList = libraryFileService.findLibraryFileList(new LibraryFileQuery().setLibraryId(library.getId())
                       .setLibraryVersionId(libraryVersion.getId()));
               if (CollectionUtils.isNotEmpty(libraryFileList)){
                   List<LibraryFile> libraryFiles = libraryFileList.stream().filter(a -> (libraryFile.getSnapshotVersion()).equals(a.getSnapshotVersion())).collect(Collectors.toList());
                   if (CollectionUtils.isNotEmpty(libraryFiles)&&libraryFiles.size()>1){
                       long l = lib.getSize() + fileSize;
                       lib.setSize(l);
                   }else {
                       //不同版本的时候重制
                       lib.setSize(fileSize);
                   }
               }
           }
        }else {
            //推送相同版本 制品大小叠加
            if (libraryVersion.getVersion().equals(library.getOldVersion())){
                lib.setSize(lib.getSize()+fileSize);
            }else {
                //不同版本的时候重制
                lib.setSize(fileSize);
            }
        }
        this.updateLibrary(lib);
    }

    @Override
    public void deleteLibrary(@NotNull String id) {
        Library library = this.findLibrary(id);
        if ("maven".equals(library.getLibraryType())){
            libraryMavenService.deleteLibraryMavenByCondition("libraryId",id);
        }
        
        libraryDao.deleteLibrary(id);

        Thread thread = new Thread() {
            public void run() {
                String substring=null;
                List<LibraryFile> libraryFileList = libraryFileService.findLibraryFileList(new LibraryFileQuery().setLibraryId(id));
                if (CollectionUtils.isNotEmpty(libraryFileList)){
                    String fileUrl = libraryFileList.get(0).getFileUrl();
                    substring = fileUrl.substring(0, fileUrl.indexOf("/", fileUrl.indexOf("/") + 1));

                }
                libraryVersionService.deleteVersionByCondition("libraryId",id);

                libraryFileService.deleteLibraryFileByCondition("libraryId",id);

                pushLibraryService.deleteVersionByCondition("libraryId",id);
                //删除文件
                if (substring!=null){
                    try {
                        String folderPath = yamlDataMaService.repositoryAddress() + "/" + substring;
                        FileUtils.deleteDirectory(new File(folderPath));
                    }catch (Exception e){
                        logger.info("删除制品时删除文件失败:"+e.getMessage());
                    }
                }
            }};
        thread.start();
    }

    @Override
    public void deleteLibraryByRepository(String repositoryId) {
        DeleteCondition deleteCondition = DeleteBuilders.createDelete(LibraryEntity.class)
                .eq("repositoryId",repositoryId)
                .get();
        libraryDao.deleteLibrary(deleteCondition);
    }

    @Override
    public Library findOne(String id) {
        LibraryEntity libraryEntity = libraryDao.findLibrary(id);

        Library library = BeanMapper.map(libraryEntity, Library.class);

        return library;
    }

    @Override
    public List<Library> findList(List<String> idList) {
        List<LibraryEntity> libraryEntityList =  libraryDao.findLibraryList(idList);

        List<Library> libraryList =  BeanMapper.mapList(libraryEntityList,Library.class);
        return libraryList;
    }

    @Override
    public Library findLibrary(@NotNull String id) {
        Library library = findOne(id);

        joinTemplate.joinQuery(library);

        return library;
    }

    @Override
    public List<Library> findAllLibrary() {
        List<LibraryEntity> libraryEntityList =  libraryDao.findAllLibrary();

        List<Library> libraryList =  BeanMapper.mapList(libraryEntityList,Library.class);

        joinTemplate.joinQuery(libraryList);

        return libraryList;
    }

    @Override
    public List<Library> findLibraryList(LibraryQuery libraryQuery) {

        findRepositoryGroup(libraryQuery);
        List<LibraryEntity> libraryEntityList = libraryDao.findLibraryList(libraryQuery);

        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);

        joinTemplate.joinQuery(libraryList);

        return libraryList;
    }

    @Override
    public List<Library> likeLibraryListNo(LibraryQuery libraryQuery) {
        List<LibraryEntity> libraryEntityList = libraryDao.findLibraryListNo(libraryQuery);

        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);

        return libraryList;
    }

    @Override
    public List<Library> likeLibraryByName(LibraryQuery libraryQuery) {
        List<LibraryEntity> libraryEntityList = libraryDao.likeLibraryByName(libraryQuery);
        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);

        return libraryList;
    }

    @Override
    public Integer findLibraryNum(String repositoryId,String repositoryType) {
        return libraryDao.findLibraryNum(repositoryId,repositoryType);
    }

    @Override
    public Library findLibraryByNameAndType(String name,String type) {
        Library library=null;
        List<LibraryEntity> libraryEntityList = libraryDao.findLibraryByNameAndType(name,type);
        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);
        joinTemplate.joinQuery(libraryList);
        if (CollectionUtils.isNotEmpty(libraryList)){
             library = libraryList.get(0);
        }
        return library;
    }

    @Override
    public List<Library> findLibraryByCondition(String name, String type, String[] rpyIds) {
        List<LibraryEntity> libraryEntityList = libraryDao.findLibraryByCondition(name,type,rpyIds);
        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);
        joinTemplate.joinQuery(libraryList);

        return libraryList;
    }

    @Override
    public Library findMvnLibraryByGroupId(Repository repository, String name, String groupId, String type) {

        List<LibraryMaven> libraryMavens = libraryMavenService.findLibraryMavenList(new LibraryMavenQuery()
                .setGroupId(groupId).setArtifactId(name));

        if (CollectionUtils.isNotEmpty(libraryMavens)){

            List<RepositoryGroup> groupList = repositoryGroupService.findRepositoryGroupList(new RepositoryGroupQuery().setRepositoryGroupId(repository.getId()));
            List<String> stringList = groupList.stream().map(a -> a.getRepository().getId()).collect(Collectors.toList());

            if (CollectionUtils.isNotEmpty(stringList)){
                String[] repositoryId = new String[stringList.size()];
                String[] rpyIds = stringList.toArray(repositoryId);
                // 查询制品库的 类型  快照版本、正式版本
                RepositoryMaven repositoryMaven = repositoryMavenService.findRepositoryMavenByRpyIds(rpyIds, type);

                if (!ObjectUtils.isEmpty(repositoryMaven)){
                    List<LibraryMaven> collected = libraryMavens.stream().filter(a -> !ObjectUtils.isEmpty(a.getLibrary().getRepository())&&
                                    (repositoryMaven.getRepository().getId()).equals(a.getLibrary().getRepository().getId()))
                                    .collect(Collectors.toList());
                    if (CollectionUtils.isNotEmpty(collected)){
                        return collected.get(0).getLibrary();
                    }
                }
            }
        }
        return null;
    }

    @Override
    public Library createMvnLibrary(Repository repository, String libraryName, String groupId) {
        Library library = new Library();
        library.setLibraryType("maven");

        //查询制品是否存在
        List<LibraryEntity> libraryEntity = libraryDao.findLibraryByRpyIdAndName(repository.getId(), libraryName);
        if (CollectionUtils.isNotEmpty(libraryEntity)){
            List<String> libraryIds = libraryEntity.stream().map(LibraryEntity::getId).collect(Collectors.toList());
            String[] libraryIdList = libraryIds.toArray(new String[libraryIds.size()]);
            List<LibraryMaven> libraryMavens = libraryMavenService.libraryMavenByLibraryIds(libraryIdList);
            List<LibraryMaven> collect = libraryMavens.stream().filter(a -> (groupId).equals(a.getGroupId())).collect(Collectors.toList());
            if (CollectionUtils.isNotEmpty(collect)){
                library.setId(collect.get(0).getLibrary().getId());
            }
            library.setOldVersion(libraryEntity.get(0).getNewVersion());
        }else {
            library.setName(libraryName);
            //创建制品信息
            library.setRepository(repository);
            String libraryId = this.createLibrary(library);
            library.setId(libraryId);

        }
        return library;
    }


    @Override
    public Pagination<Library> findLibraryListByRepository(LibraryQuery libraryQuery) {
        findRepositoryGroup(libraryQuery);
        Pagination<Library> mavenLibraryList = libraryDao.findLibraryListByRepository(libraryQuery);

        if (CollectionUtils.isNotEmpty(mavenLibraryList.getDataList())){
            for (Library library:mavenLibraryList.getDataList()){
                if (!ObjectUtils.isEmpty(library.getSize())){
                    String size = RepositoryUtil.formatSize(library.getSize());
                    library.setVersionSize(size);
                }
            }
        }
        return mavenLibraryList;
    }

    @Override
    public Pagination<Library> findLibraryListByCondition(LibraryQuery libraryQuery) {
        findRepositoryGroup(libraryQuery);
        Pagination<Library> libraryList = libraryDao.findLibraryListByCondition(libraryQuery);

        if (CollectionUtils.isNotEmpty(libraryList.getDataList())){
            for (Library library:libraryList.getDataList()){
                if (!ObjectUtils.isEmpty(library.getSize())){
                    String size = RepositoryUtil.formatSize(library.getSize());
                    library.setVersionSize(size);
                }
            }
        }
        return libraryList;
    }

    @Override
    public List<Library> findNotPushLibraryList(LibraryQuery libraryQuery) {
        List<PushLibrary> pushLibraryList = pushLibraryService.findPushLibraryList(new PushLibraryQuery().setRepositoryId(libraryQuery.getRepositoryId()));
        String[] libraryIds=null;
        if (CollectionUtils.isNotEmpty(pushLibraryList)){
            List<String> libraryId = pushLibraryList.stream().map(a -> a.getLibrary().getId()).collect(Collectors.toList());
            String[] strings = new String[libraryId.size()];
             libraryIds = libraryId.toArray(strings);
        }
        List<LibraryEntity> libraryEntityList = libraryDao.findNotPushLibraryList(libraryIds, libraryQuery.getRepositoryId(),libraryQuery.getName());
        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);

        List<Library> libraries = libraryList.stream().sorted(Comparator.comparing(Library::getName)).collect(Collectors.toList());
        joinTemplate.joinQuery(libraries);
        return libraries;
    }

    @Override
    public List<Library> findNotScanLibraryList(LibraryQuery libraryQuery) {
        List<ScanLibrary> scanLibraryList = scanLibraryService.findScanLibraryList(new ScanLibraryQuery()
                .setRepositoryId(libraryQuery.getRepositoryId()).setScanPlayId(libraryQuery.getScanPlayId()));
        String[] libraryIds=null;
        if (CollectionUtils.isNotEmpty(scanLibraryList)){
            List<String> libraryId = scanLibraryList.stream().map(a -> a.getLibrary().getId()).collect(Collectors.toList());
            String[] strings = new String[libraryId.size()];
            libraryIds = libraryId.toArray(strings);
        }
        List<LibraryEntity> libraryEntityList = libraryDao.findNotScanLibraryList(libraryIds, libraryQuery.getRepositoryId(), libraryQuery.getName());
        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);

        List<Library> libraries = libraryList.stream().sorted(Comparator.comparing(Library::getName)).collect(Collectors.toList());
        return libraries;
    }

    @Override
    public List<Library> findEqLibraryList(LibraryQuery libraryQuery) {
        List<LibraryEntity> libraryEntityList =libraryDao.findEqLibraryList(libraryQuery);
        List<Library> libraryList = BeanMapper.mapList(libraryEntityList,Library.class);
        return  libraryList;
    }

    @Override
    public Pagination<Library> findScanLibraryPage(LibraryQuery libraryQuery) {
        Pagination<LibraryEntity>  pagination = libraryDao.findLibraryPage(libraryQuery);

        List<Library> libraryList = BeanMapper.mapList(pagination.getDataList(),Library.class);

        return PaginationBuilder.build(pagination,libraryList);
    }



    @Override
    public Pagination<Library> findLibraryPage(LibraryQuery libraryQuery) {
        Pagination<LibraryEntity>  pagination = libraryDao.findLibraryPage(libraryQuery);

        List<Library> libraryList = BeanMapper.mapList(pagination.getDataList(),Library.class);

        joinTemplate.joinQuery(libraryList);

        return PaginationBuilder.build(pagination,libraryList);
    }




    /**
     *  查询组合库关联
     * @param libraryQuery     全路径
     * @return
     */
    public void findRepositoryGroup(LibraryQuery libraryQuery){
        if (StringUtils.isNotEmpty(libraryQuery.getRepositoryId())){
            Repository repository = repositoryService.findRepository(libraryQuery.getRepositoryId());
            if (!ObjectUtils.isEmpty(repository)&& "group".equals(repository.getRepositoryType())){
                List<RepositoryGroup> groupItemsList = repositoryGroupService.findRepositoryGroupList(
                        new RepositoryGroupQuery().setRepositoryGroupId(libraryQuery.getRepositoryId()));
                if (CollectionUtils.isNotEmpty(groupItemsList)){
                    List<String> repositoryIds = groupItemsList.stream().map(item -> item.getRepository().getId()).collect(Collectors.toList());
                    libraryQuery.setRepositoryIds(repositoryIds);
                }
            }
        }
    }

    /**
     *  制品创建
     * @param libraryName     制品名称
     * @param libraryType  制品类型
     * @param repository  制品库信息
     * @return
     */
    public Library createLibraryData(String libraryName,String libraryType,Repository repository){
        Library library = new Library();
        library.setLibraryType(libraryType);
        //查询制品包是否有创建
        List<LibraryEntity> libraryList =libraryDao.findEqLibraryList(new LibraryQuery().setName(libraryName).setRepositoryId(repository.getId()));

        String libraryId=null;
        if (CollectionUtils.isEmpty(libraryList)){
            library.setName(libraryName);
            //创建制品信息
            library.setRepository(repository);
            libraryId = this.createLibrary(library);
        }else {
            libraryId = libraryList.get(0).getId();
        }
        library.setRepository(repository);
        library.setLibraryType(libraryType);
        library.setId(libraryId);

        return library;
    }
}

