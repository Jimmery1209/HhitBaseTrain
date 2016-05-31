<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <title>高校实训学生管理系统</title>
  <link rel="stylesheet" type="text/css" href="../css/common.css">
 <link rel="stylesheet" type="text/css" href="../css/input.css"/>
 
 <style type="text/css">
 	body{
 	 position:relative;
 	}
 	td{
 	border:0px ;
 	}
 	input{
 	width:150px;
 	}
 	#upload{
 	width:50px;
 	margin-left:10px;
 	}
 	#upload input{
 	width:150px;
 	}
 	div{
 	text-align:center;
 	margin-top:10px;
 	}
 	#d4{
 	margin-left:55px;
 	}
 
 </style>
 <script type="text/javascript" src="../js/cookie_util.js"></script>
 <script type="text/javascript" src="../js/jquery-1.11.1.js"></script>
 <script type="text/javascript" src="../js/getParameter.js"></script>
 <script type="text/javascript">
 var name;
 var stuno;
 var cno;
 var week;
 var month;
 	$(function(){
 	    var url=window.location;
 	    stuno=getUrlParam(url,"stuno");
 	    name=getUrlParam(url,"name");
 	    cno=getUrlParam(url,"cno");
 	    week=getUrlParam(url,"week");
 	    month=getUrlParam(url,"month");
 	    $("#stuno").val(stuno);
 	    $("#sname").val(name);
 	    $("#cno").val(cno);
 	    $("#month").val(month);
 	    $("#week").val(week);
 	    alert("上传成功");
 	});
 
 </script>
</head>
<body>
	<div id="head1"><img  src="../image/info.png"/></div>
    <div id="head2">当前位置：首页&nbsp;>>&nbsp;实训成绩管理&nbsp;>>&nbsp;成绩信息修改&nbsp;>><b>上传试卷</b></div>
    <div id="person"><img  src="../image/person.png"/></div>
   <div id="welcome">您好：<b id="name"></b>,欢迎登录外实训学生管理系统--基地教师管理子系统</div>
   <div id="time"><img  src="../image/time.png"/>
    <script language="JavaScript" type="text/javascript"> 
var today=new Date(); 
var strDate=(" "+today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日"); 
var n_day=today.getDay(); 
switch(n_day){ 
case 0: 
{strDate=strDate+" 星期日 "}break; 
case 1: 
{strDate=strDate+" 星期一 "}break; 
case 2: 
{strDate=strDate+" 星期二 "}break; 
case 3: 
{strDate=strDate+" 星期三 "}break; 
case 4: 
{strDate=strDate+" 星期四 "}break; 
case 5: 
{strDate=strDate+" 星期五 "}break; 
case 6: 
{strDate=strDate+" 星期六 "}break; 
case 7: 
{strDate=strDate+" 星期日 "}break; 
} 
document.write(strDate); 
</script> 
 </div>
 <div id="information">
  <form action="../uploadfile.do" enctype="multipart/form-data" method="post">
 <div id="d1">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;&nbsp;&nbsp;<input type="text"  id="stuno" name="stuno"/></div>
<div id="d2"> 姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:&nbsp;&nbsp;&nbsp;<input type="text"  id="sname" name="sname"/></div>
     <input type="hidden" id="week" name="week"/>
     <input type="hidden"  id="month" name="month"/>
     <div id="d3">课&nbsp;&nbsp;程&nbsp;&nbsp;号:&nbsp; <input type="text" id="cno" name="cno"/></div>
     <div id="d4">  
 考&nbsp;试&nbsp;试&nbsp;卷:&nbsp;<input type="file" name="file" id="exampaper"/>
 <input type="submit" value="上传" id="upload"/>
 </div> 
    <div id="d5"></div>
 </form>
 	
 	
 	
 </div>
 </body>
 </html>