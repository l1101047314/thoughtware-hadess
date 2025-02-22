package io.thoughtware.hadess.scan.model;


import io.thoughtware.core.order.Order;
import io.thoughtware.core.order.OrderBuilders;
import io.thoughtware.core.page.Page;
import io.thoughtware.postin.annotation.ApiModel;
import io.thoughtware.postin.annotation.ApiProperty;

import java.util.List;

@ApiModel
public class ScanLibraryQuery {

        @ApiProperty(name ="orderParams",desc = "排序参数")
        private List<Order> orderParams = OrderBuilders.instance().asc("id").get();

        @ApiProperty(name ="pageParam",desc = "分页参数")
        private Page pageParam = new Page();

        @ApiProperty(name ="libraryId",desc = "制品id")
        private String libraryId;

        @ApiProperty(name ="repositoryId",desc = "制品库id")
        private String repositoryId;

        @ApiProperty(name ="scanPlayId",desc = "扫描计划id")
        private String scanPlayId;

        @ApiProperty(name ="generalRecordId",desc = "扫描记录总记录id")
        private String generalRecordId;

        public List<Order> getOrderParams() {
            return orderParams;
        }

        public void setOrderParams(List<Order> orderParams) {
            this.orderParams = orderParams;
        }

        public Page getPageParam() {
            return pageParam;
        }

        public void setPageParam(Page pageParam) {
            this.pageParam = pageParam;
        }

        public String getLibraryId() {
            return libraryId;
        }

        public ScanLibraryQuery setLibraryId(String libraryId) {
            this.libraryId = libraryId;
            return this;
        }

        public String getRepositoryId() {
            return repositoryId;
        }

        public ScanLibraryQuery setRepositoryId(String repositoryId) {
            this.repositoryId = repositoryId;
            return this;
        }

        public String getScanPlayId() {
            return scanPlayId;
        }

        public ScanLibraryQuery setScanPlayId(String scanPlayId) {
            this.scanPlayId = scanPlayId;
            return this;
        }

        public String getGeneralRecordId() {
            return generalRecordId;
        }

        public ScanLibraryQuery setGeneralRecordId(String generalRecordId) {
            this.generalRecordId = generalRecordId;
            return this;
        }
}