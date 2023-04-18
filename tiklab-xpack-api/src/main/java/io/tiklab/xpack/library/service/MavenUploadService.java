package io.tiklab.xpack.library.service;

import io.tiklab.core.Result;

import java.io.InputStream;

public interface MavenUploadService {

    /**
     * maven提交
     * @param contextPath 路径
     * @param inputStream 文件liu
     * @param userData 用户信息
     * @return
     */
    Result<byte[]> mavenSubmit(String contextPath, InputStream inputStream, String userData);

    /**
     * maven拉取
     * @param contextPath 客户端拉取文件的地址
     * @return
     */
    Result<byte[]> mavenPull(String contextPath);
}
