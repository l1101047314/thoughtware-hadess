package io.tiklab.xpack.library.service;

import io.tiklab.xpack.library.model.PushLibrary;

import java.util.List;

public interface PushCenWarehouse {

   /**
    * 推送中央仓库
    * @param pushLibrary
    */
   String pushCentralWare(PushLibrary pushLibrary);

   /**
    * 推送中央仓库结果
    * @param repositoryId 制品id
    */
   List<PushLibrary> pushResult(String repositoryId);
}
