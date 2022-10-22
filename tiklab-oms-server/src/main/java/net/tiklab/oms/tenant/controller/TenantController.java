package  net.tiklab.oms.tenant.controller;

import  net.tiklab.postin.annotation.Api;
import  net.tiklab.postin.annotation.ApiMethod;
import  net.tiklab.postin.annotation.ApiParam;
import  net.tiklab.core.Result;
import  net.tiklab.core.page.Pagination;
import  net.tiklab.rpc.annotation.Reference;
import  net.tiklab.tenant.tenant.model.Tenant;
import  net.tiklab.tenant.tenant.model.TenantQuery;
import  net.tiklab.tenant.tenant.service.TenantManagerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * ManagerController
 * Created by Zhangzhihua on 2017/9/25.
 */
@RestController
@RequestMapping("/tenant")
@Api(name = "TenantController",desc = "租户管理")
public class TenantController {

    private static Logger logger = LoggerFactory.getLogger(TenantController.class);


    @Autowired
    @Reference(address = "${ocs.address}")
    private TenantManagerService tenantManagerService;

    @RequestMapping(path="/createTenant",method = RequestMethod.POST)
    @ApiMethod(name = "createTenant",desc = "创建租户")
    @ApiParam(name = "tenant",desc = "租户DTO",required = true)
    public Result<String> createTenant(@RequestBody @NotNull @Valid Tenant tenant){
        String id = tenantManagerService.createTenant(tenant);

        return Result.ok(id);
    }

    @RequestMapping(path="/updateTenant",method = RequestMethod.POST)
    @ApiMethod(name = "updateTenant",desc = "更新租户")
    @ApiParam(name = "tenant",desc = "租户DTO",required = true)
    public Result<Void> updateTenant(@RequestBody @NotNull @Valid Tenant tenant){
        tenantManagerService.updateTenant(tenant);

        return Result.ok();
    }

    @RequestMapping(path="/deleteTenant",method = RequestMethod.POST)
    @ApiMethod(name = "deleteTenant",desc = "根据租户ID删除租户")
    @ApiParam(name = "id",desc = "租户ID",required = true)
    public Result<Void> deleteTenant(@NotNull String id){
        tenantManagerService.deleteTenant(id);

        return Result.ok();
    }

    @RequestMapping(path="/findTenant",method = RequestMethod.POST)
    @ApiMethod(name = "findTenant",desc = "根据租户ID查找租户")
    @ApiParam(name = "id",desc = "租户ID",required = true)
    public Result<Tenant> findTenant(@NotNull String id){
        Tenant tenant = tenantManagerService.findTenant(id);

        return Result.ok(tenant);
    }

    @RequestMapping(path="/findAllTenant",method = RequestMethod.POST)
    @ApiMethod(name = "findAllTenant",desc = "查找所有租户")
    public Result<List<Tenant>> findAllTenant(){

        List<Tenant> tenantList = tenantManagerService.findAllTenant();

        return Result.ok(tenantList);
    }

    @RequestMapping(path = "/findTenantList",method = RequestMethod.POST)
    @ApiMethod(name = "findTenantList",desc = "根据查询对象查询租户列表")
    @ApiParam(name = "tenantQuery",desc = "租户查询对象",required = true)
    public Result<List<Tenant>> findTenantList(@RequestBody @Valid @NotNull TenantQuery tenantQuery){
        List<Tenant> tenantList = tenantManagerService.findTenantList(tenantQuery);

        return Result.ok(tenantList);
    }

    @RequestMapping(path = "/findTenantListPage",method = RequestMethod.POST)
    @ApiMethod(name = "findTenantListPage",desc = "根据条件分页查询租户列表")
    @ApiParam(name = "tenantQuery",desc = "tenantQuery",required = true)
    public Result<Pagination<Tenant>> findTenantListPage(@RequestBody @Valid @NotNull TenantQuery tenantQuery){
        Pagination<Tenant> pagination = tenantManagerService.findTenantPage(tenantQuery);

        return Result.ok(pagination);
    }

    @RequestMapping(path = "/openTenantAndProduct",method = RequestMethod.POST)
    @ApiMethod(name = "openTenantAndProduct",desc = "创建租户并开通试用相对应的产品")
    @ApiParam(name = "tenant",desc = "tenant",required = true)
    public Result<String> openTenantAndProduct(@RequestBody @Valid @NotNull Tenant tenant){
        String id = tenantManagerService.openTenantAndProduct(tenant);

        return Result.ok(id);
    }
    
    @RequestMapping(path = "/recoverData",method = RequestMethod.POST)
    @ApiMethod(name = "recoverData",desc = "恢复租户数据")
    @ApiParam(name = "tenant",desc = "tenant",required = true)
    public Result<String> recoverData(@RequestBody @Valid @NotNull Tenant tenant){
        String data= tenantManagerService.recoverData(tenant);

        return Result.ok(data);
    }

}
