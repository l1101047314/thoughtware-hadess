package io.tiklab.xpack.scan.entity;

import io.tiklab.core.BaseModel;
import io.tiklab.dal.jpa.annotation.*;

import java.sql.Timestamp;

/**
 * ScanSet-扫描制品
 */
@Entity
@Table(name="pack_scan_library")
public class ScanLibraryEntity extends BaseModel {

    @Id
    @GeneratorValue(length = 12)
    @Column(name = "id",length = 12)
    private String id;

    //地址
    @Column(name = "library_id",length = 32)
    private String libraryId;

    //制品版本id
    @Column(name = "library_version_id",length = 32)
    private String libraryVersionId;


    //制品库id
    @Column(name = "repository_id",length = 32)
    private String repositoryId;

    @Column(name = "create_time")
    private Timestamp createTime;





    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLibraryId() {
        return libraryId;
    }

    public void setLibraryId(String libraryId) {
        this.libraryId = libraryId;
    }

    public String getLibraryVersionId() {
        return libraryVersionId;
    }

    public void setLibraryVersionId(String libraryVersionId) {
        this.libraryVersionId = libraryVersionId;
    }

    public String getRepositoryId() {
        return repositoryId;
    }

    public void setRepositoryId(String repositoryId) {
        this.repositoryId = repositoryId;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}
