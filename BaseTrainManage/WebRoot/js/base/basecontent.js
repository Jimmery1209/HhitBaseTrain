$(function(){
	var base_no = getCookie("base_no");
 	if(base_no =="" || base_no ==null){
 		alert("页面已失效，请重新登录！");
 	}else{
 		showBaseBuildInfo();
		slide();
 	}
});
function showBaseBuildInfo(){
	var base_no = getCookie("base_no");
	$.ajax({
		url:"http://localhost:8080/BaseTrainManage/base/searchContentByBaseNo.do",
		type:"post",
		data:{"base_no":base_no},
		dataType:"json",
		success:function(result){
			if(result.status == 1){//查询成功，显示基地基本信息
				dataManage(result.data)
			}else{
				alert(result.msg);
			}
		},
		error:function(){
				alert("程序出错");
		}
	});
}
function dataManage(data){
	/* 制定好的实训大纲 */
	if(data.internship_outline != "" && data.internship_outline !=null){
		$("#internship_outline").val(data.internship_outline);
		
	}else{
		$("#internship_outline").val("无已编印制定好的实习大纲");
	}
	/*拟指定的实训大纲*/
	if(data.outline_plan != "" && data.outline_plan !=null){
		$("#outline_plan").val(data.outline_plan);
	}else{
		$("#outline_plan").val("无拟制定和编印的实习大纲");
	}
	/* 制定好的计划 */
	if(data.train_plan != "" && data.train_plan != null){
		$("#train_plan").val(data.train_plan);
		
	}else{
		$("#train_plan").val("无已制定编印好的实习实训计划");
	}
	/*拟制定的计划*/
	if(data.new_plan != "" && data.new_plan !=null){
		$("#new_plan").val(data.new_plan);
	}else{
		$("#new_plan").val("无拟制定编印的实习实训计划");
	}
	/* 制定好的指导书 */
	if(data.guide_book != "" && data.guide_book != null){
		$("#guide_book").val(data.guide_book);
		
	}else{
		$("#guide_book").val("无已制定编印好的实训指导书");
	}
	/*拟指定的指导书*/
	if(data.new_guidingbook != "" && data.new_guidingbook !=null){
		$("#new_guidingbook").val(data.new_guidingbook);
	}else{
		$("#new_guidingbook").val("无拟制定编印的实训指导书");
	}
	/* 已编订的实训教材 */
	if(data.teaching_material != "" && data.teaching_material != null){
		$("#teaching_material").val(data.teaching_material);
		
	}else{
		$("#teaching_material").val("无已编印的实训教材");
	}
	/*拟编订的实训教材*/
	if(data.new_material != "" && data.new_material !=null){
		$("#new_material").val(data.new_material);
	}else{
		$("#new_material").val("无拟编印的实训教材");
	}
	/*选用出版图书*/
	if(data.publish_book != "" && data.publish_book !=null){
		$("#publish_book").val(data.publish_book);
	}else{
		$("#publish_book").val("无选用出版图书");
	}
	/*补强实训项目/课程名称 */
	if(data.train_project != "" && data.train_project !=null){
		$("#train_project").val(data.train_project);
	}else{
		$("#train_project").val("目前无补强实训项目/课程");
	}
	/*拟开拓新的实训项目*/
	if(data.new_project != "" && data.new_project !=null){
		$("#new_project").val(data.new_project);
	}else{
		$("#new_project").val("无拟开拓的新实习项目名称/课程名称");
	}
	/* 每个项目/课程安排的学生人数 */ 
	if(data.student_num != "" && data.student_num !=null){
		$("#student_num").val(data.student_num);
	}else{
		$("#student_num").val("未填写");
	}
	/* 实训费用 */ 
	if(data.train_price != "" && data.train_price !=null){
		$("#train_price").val(data.train_price);
	}else{
		$("#train_price").val("未填写");
	}
	/* 开发案例*/ 
	if(data.develop_case != "" && data.develop_case !=null){
		$("#develop_case").val(data.develop_case);
	}else{
		$("#develop_case").val("无工程项目开发案例及其研发平台");
	}
}