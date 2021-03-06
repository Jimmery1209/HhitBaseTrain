$(function(){
	var no = getCookie("username");
	$("#name").attr("disabled","true");
	$("#telephone").attr("disabled","true");
	$("#update").attr("disabled","true");
	$("#update").addClass("btn_disabled");
	
	$("#modify").click(function(){
		$("#name").removeAttr("disabled");
		$("#telephone").removeAttr("disabled");
		$("#update").removeAttr("disabled");
		$("#update").removeClass("btn_disabled");
	});
	$.ajax({
		url:"http://localhost:8080/BaseTrainManage/admin/loadSelfInf.do",
		type:"post",
		data:{"no":no},
		dataType:"json",
		success:function(result){
			if(result.status==1){
				$("#name").val(result.data.name);
				$("#telephone").val(result.data.phone);
			}else{
				alert(result.msg);
			}
		},
		error:function(){
			alert("程序出错");
		}
	});
	
	$("#update").click(function(){
		var name = $("#name").val();
		var phone = $("#telephone").val();
		var no = getCookie("username");
		if(no == "" || no == null){
			alert("页面已失效，请重新登录！");
			return;
		}
		if(name =="" || phone ==""){
			alert("用户名或联系方式不能为空！");
		}else if(name !="" && phone !=""){
			var re =new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$|\\d{3}-\\d{8}");
			var result = re.test($("#telephone").val());
			if(result){//符合手机号码格式
				$.ajax({
					url:"http://localhost:8080/BaseTrainManage/admin/modifySelfInf.do",
					type:"post",
					data:{"no":no,"name":name,"phone":phone},
					dataType:"json",
					success:function(result){
						alert(result.msg);
					},
					error:function(){
						alert("程序出错");
					}
				});
			}else{//不符合手机号码格式
				alert("联系方式格式错误！");
			}
		}
	});
});