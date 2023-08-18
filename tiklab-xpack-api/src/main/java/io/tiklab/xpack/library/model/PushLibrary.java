package io.tiklab.xpack.library.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.tiklab.beans.annotation.Mapper;
import io.tiklab.beans.annotation.Mapping;
import io.tiklab.beans.annotation.Mappings;
import io.tiklab.core.BaseModel;
import io.tiklab.join.annotation.Join;
import io.tiklab.join.annotation.JoinQuery;
import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;
import io.tiklab.xpack.repository.model.Storage;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

/**
 * PushLibrary-上传制品模型
 */
@ApiModel
@Join
@Mapper
public class PushLibrary extends BaseModel {

    @ApiProperty(name="id",desc="id")
    private String id;

    @ApiProperty(name="repositoryId",desc="制品库id")
    private String repositoryId;

    @ApiProperty(name="library",desc="制品",required = true)
    @Mappings({
            @Mapping(source = "library.id",target = "libraryId")
    })
    @JoinQuery(key = "id")
    private Library library;

    @ApiProperty(name="lastPushTime",desc="最后推送时间")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm",timezone = "GMT+8")
    private Timestamp lastPushTime;

    @ApiProperty(name="lastPushResult",desc="最后推送结果")
    private String lastPushResult;

    @ApiProperty(name="execState",desc="执行状态 等待中：waite、执行中：exec 、结束：end")
    private String execState;


    @ApiProperty(name="userId",desc="userId")
    private String userId;

    /*-----其他字段------*/
    @ApiProperty(name="pushType",desc="推送类型")
    private String pushType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRepositoryId() {
        return repositoryId;
    }

    public void setRepositoryId(String repositoryId) {
        this.repositoryId = repositoryId;
    }

    public Library getLibrary() {
        return library;
    }

    public void setLibrary(Library library) {
        this.library = library;
    }

    public Timestamp getLastPushTime() {
        return lastPushTime;
    }

    public void setLastPushTime(Timestamp lastPushTime) {
        this.lastPushTime = lastPushTime;
    }

    public String getLastPushResult() {
        return lastPushResult;
    }

    public void setLastPushResult(String lastPushResult) {
        this.lastPushResult = lastPushResult;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getExecState() {
        return execState;
    }

    public PushLibrary setExecState(String execState) {
        this.execState = execState;
        return this;
    }

    public String getPushType() {
        return pushType;
    }

    public void setPushType(String pushType) {
        this.pushType = pushType;

    }
}
