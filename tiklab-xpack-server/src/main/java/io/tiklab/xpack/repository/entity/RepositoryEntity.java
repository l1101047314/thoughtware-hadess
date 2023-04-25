package io.tiklab.xpack.repository.entity;

import io.tiklab.core.BaseModel;
import io.tiklab.dal.jpa.annotation.*;

import java.sql.Timestamp;

/**
 * RepositoryEntity-制品库实体
 */
@Entity
@Table(name="pack_repository")
public class RepositoryEntity extends BaseModel {

    @Id
    @GeneratorValue
    @Column(name = "id",length = 32)
    private String id;

    //制品库名字
    @Column(name = "name",length = 128,notNull = true)
    private String name;

    //制品库路径
    @Column(name = "repository_url",length = 328)
    private String repositoryUrl;

    //类型  本地库：local、远程库：remote、组合库：group
    @Column(name = "repository_type",length = 12,notNull = true)
    private String repositoryType;

    //创建类型 maven、npm等
    @Column(name = "type",length = 12,notNull = true)
    private String type;

    //存储库id
    @Column(name = "storage_id",length = 32)
    private String storageId;

    //描述
    @Column(name = "description",length = 160)
    private String description;

    //创建人
    @Column(name = "create_user",length = 32)
    private String createUser;

    @Column(name = "create_time")
    private Timestamp createTime;

    @Column(name = "update_time")
    private Timestamp updateTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRepositoryType() {
        return repositoryType;
    }

    public void setRepositoryType(String repositoryType) {
        this.repositoryType = repositoryType;
    }

    public String getStorageId() {
        return storageId;
    }

    public void setStorageId(String storageId) {
        this.storageId = storageId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    public Timestamp getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Timestamp updateTime) {
        this.updateTime = updateTime;
    }

    public String getRepositoryUrl() {
        return repositoryUrl;
    }

    public void setRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
