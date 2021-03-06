/**
 * 
 */
package com.hhit.basetrain.service;

import com.hhit.basetrain.entity.Result;

/**
 * @author Jiya
 * @date 2016-4-23t下午04:26:01
 * 
 */
public interface BaseAdminService {

	/**
	 * 显示个人信息
	 * @param no
	 * @return
	 */
	public Result showInf(String manager_no);
	/**
	 * 查找姓名
	 * @param no
	 * @return
	 */
	public Result showName(String manager_no);
	/**
	 * 修改个人信息
	 * @return
	 */
	public Result modifySelfInf(String manager_no,String manager_name,String manager_phone);
	/**

	 * 查找基地名称
	 * @param manager_no
	 * @return
	 */
	public Result showBaseNameByNo(String manager_no);
     /**
	 * 通过基地管理员账号找到基地编号
	 * @param manager_no
	 * @return
	 */
	public Result showBaseNoByManagerNo(String managerNo);
}
