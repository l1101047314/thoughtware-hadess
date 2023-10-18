package io.tiklab.xpack.common;

public interface XpackYamlDataMaService {

    /**
     * 仓库备份上传地址
     */
    String uploadAddress();

    /**
     *jdbc host
     */
    String host();

    /**
     *jdbc dbName
     */
    String dbName();

    /**
     *jdbc schemaName
     */
    String schemaName();

    /**
     * 仓库备份地址
     */
    String backupAddress();

    /**
     * 仓库地址
     */
    String repositoryAddress();

    /**
     * 项目端口
     */
    String serverPort();

    /**
     * 文件地址
     */
     String fileAddress();

    /**
     * 扫描文件地址
     */
    String scanFileAddress();

    /**
     * pgsql的地址
     */
    String pgSqlAddress();

}
