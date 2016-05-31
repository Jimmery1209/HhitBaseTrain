
 function setpageSize(){

 	      pagesize=parseInt($("#pagesizes").val());
 		  page=0;
 		  currentpage=1;
 		  if(count%pagesize==0){
 		  	pagecounts=count/pagesize;
 		  }else{
 		  	pagecounts=parseInt(count/pagesize)+1;
 		  }
 		$.ajax({
 		        url:"http://localhost:8080/BaseTrainManage/baseteacher/loadInfo.do",
 			    type:"post",
 			    data:{"page":page,"pageSize":pagesize,"stuname":stuname},
 			    dataType:"json",
 			    success:function(result){
 			    	if(result.status!=0){
 			    	    $("table tbody").html("");
 			    	    var students=result.data;
 			    	    if(currentpage==pagecounts){
 			    	    	for(var i=0;i<students.length;i++){
 			    	    		 stu=students[i].stuno;
 			    	    		 name=students[i].stu_name;
 			    	    		 base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	  // $tr.data=("stuno",stu);
 			    	 	     $("table tbody").append($tr);
 			    	      }
 			    	        $("table tfoot td b").html(students.length);
 			    			$("#page a").remove();
 			    	         a="<a id='head' class='dianji' onclick='toHomePage()'>首页</a>";
 			    	         $a=$(a);
 			    	         $a.insertAfter("#number");
 			            }else if(currentpage<pagecounts){
 			        	   for(var i=0;i<students.length;i++){
 			        		   stu=students[i].stuno;
 			        		 name=students[i].stu_name;
 			    	    	 base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	    $tr.data("stu",stu);
			    	 	    $tr.data("name",name);
			    	 	    $tr.data("base_name",base_name);
 			    	 			//$tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	 $("#page a").remove();
 			    	 a='<a id="head" class="dianji" onclick="toHomePage()">首页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	 $a=$(a);
 			    	 $a.insertAfter("#number");
 			        }		
 			    	}
 			    }
 	});
 }
 function setPages(){
 		currentpage=parseInt($("#pages").val());
 		page=(currentpage-1)*pagesize;
 		$.ajax({
 		        url:"http://localhost:8080/BaseTrainManage/baseteacher/loadInfo.do",
 			    type:"post",
 			     data:{"page":page,"pageSize":pagesize,"stuname":stuname},
 			    dataType:"json",
 			    success:function(result){
 			    	if(result.status!=0){
 			    	    $("table tbody").html("");
 			    	    var students=result.data;
 			    	    if(currentpage==1 && currentpage<pagecounts){
 			    	    	for(var i=0;i<students.length;i++){
 			    	    	  stu=students[i].stuno;
 			    	    	 name=students[i].stu_name;
 			    	       base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	    $tr.data("stu",stu);
			    	 	    $tr.data("name",name);
			    	 	    $tr.data("base_name",base_name);
 			    	 	    //$tr.data=("stuno",stu);
 			    	 	     $("table tbody").append($tr);
 			    	      }
 			    	        $("table tfoot td b").html(students.length);
 			    	          $("#page a").remove();
 			    	          a='<a id="head" class="dianji" onclick="toHomePage()">首页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	          $a=$(a);
 			    	          $a.insertAfter("#number");
 			            }else if(1<currentpage && currentpage<pagecounts){
 			    	 	   		for(var i=0;i<students.length;i++){
 			    	 	   		 stu=students[i].stuno;
 			    	 	   		 name=students[i].stu_name;
 			    	    		    base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	   // $tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	  $("#page a").remove();
 			    	   a='<a id="head" onclick="toHomePage()">首页</a><a id="lastpage" onclick="frontpage()">上一页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	   $a=$(a);
 			    	   $a.insertAfter("#number");
 			        }else if( currentpage>1 && currentpage==pagecounts){
 			              for(var i=0;i<students.length;i++){
 			    	 	   		 stu=students[i].stuno;
 			    	 	   		 name=students[i].stu_name;
 			    	    		 base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	 	$("#page a").remove();
 			    	   a='<a id="head" onclick="toHomePage()">首页</a><a id="lastpage" onclick="frontpage()">上一页</a><a id="end" class="dianji" onclick="toEndpage()">尾页</a>';
 			    	   $a=$(a);
 			    	   $a.insertAfter("#number");
 			        }else if(currentpage==1 && currentpage==pagecounts)	{
 			        	 for(var i=0;i<students.length;i++){
 			        		 stu=students[i].stuno;
 			        	 name=students[i].stu_name;
 			    	        base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	    //$tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 			//$("#lastpage").remove();
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	 	$("#page a").remove();
 			    	     a='<a id="head" class="dianji" onclick="toHomePage()">首页</a>';
 			    	     $a=$(a);
 			    	    $a.insertAfter("#number");
 			        }
 			    	}
 			    }
 	});
 	}
 function nextPage(){
 	    currentpage=currentpage+1;
 		page=(currentpage-1)*pagesize;
 		$.ajax({
 		        url:"http://localhost:8080/BaseTrainManage/baseteacher/loadInfo.do",
 			    type:"post",
 			     data:{"page":page,"pageSize":pagesize,"stuname":stuname},
 			    dataType:"json",
 			    success:function(result){
 			    	if(result.status!=0){
 			    	    $("table tbody").html("");
 			    	    var students=result.data;
 			    	    if(currentpage==pagecounts){
 			    	    	
 			    	    	for(var i=0;i<students.length;i++){
 			    	    		 stu=students[i].stuno;
 			    	    		 name=students[i].stu_name;
 			    	    		 base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	   // $tr.data=("stuno",stu);
 			    	 	     $("table tbody").append($tr);
 			    	      }
 			    	        $("table tfoot td b").html(students.length);
 			    	        $("#page a").remove();
 			    	        a='<a id="head" onclick="toHomePage()">首页</a><a id="lastpage" onclick="frontpage()">上一页</a><a id="end" class="dianji" onclick="toEndpage()">尾页</a>';
 			    	        $a=$(a);
 			    	        $a.insertAfter("#number");
 			            }else if(currentpage<pagecounts){
 			        	  for(var i=0;i<students.length;i++){
 			        		 var stu=students[i].stuno;
 			        		 var name=students[i].stu_name;
 			    	         var base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 			//$tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	  $("#page a").remove();
 			    	  a='<a id="head" onclick="toHomePage()">首页</a><a id="lastpage" onclick="frontpage()">上一页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	  $a=$(a);
 			    	  $a.insertAfter("#number");
 			        }
 			    	}	
 			    
 			    }
 	});
 	}
 function frontpage(){
 		currentpage=currentpage-1;
 		page=(currentpage-1)*pagesize;
 	    $.ajax({
 		        url:"http://localhost:8080/BaseTrainManage/baseteacher/loadInfo.do",
 			    type:"post",
 			     data:{"page":page,"pageSize":pagesize,"stuname":stuname},
 			    dataType:"json",
 			    success:function(result){
 			    	if(result.status!=0){
 			    	    $("table tbody").html("");
 			    	    var students=result.data;
 			    	    if(currentpage==1){
 			    	    	for(var i=0;i<students.length;i++){
 			    	    		 stu=students[i].stuno;
 			    	    		 name=students[i].stu_name;
 			    	    		base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	    //$tr.data=("stuno",stu);
 			    	 	     $("table tbody").append($tr);
 			    	      }
 			    	        $("table tfoot td b").html(students.length);
 			    	         $("#page a").remove();
 			    	         a='<a id="head" class="dianji" onclick="toHomePage()">首页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	         $a=$(a);
 			    	         $a.insertAfter("#number");
 			    			
 			            }else if(1<currentpage<pagecounts){
 			        	  for(var i=0;i<students.length;i++){
 			        		stu=students[i].stuno;
 			        		 name=students[i].stu_name;
 			    	         base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	   // $tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	  $("#page a").remove();
 			    	  a='<a id="head" onclick="toHomePage()">首页</a><a id="lastpage" onclick="frontpage()">上一页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	  $a=$(a);
 			    	  $a.insertAfter("#number");
 			        }   		
 			    	}    
 			    }
 	});
 	}
 	
 function toHomePage(){
 		page=0;
 		currentpage=1;
 		$.ajax({
 		        url:"http://localhost:8080/BaseTrainManage/baseteacher/loadInfo.do",
 			    type:"post",
 			    data:{"page":page,"pageSize":pagesize,"stuname":stuname},
 			    dataType:"json",
 			    success:function(result){
 			    	if(result.status!=0){
 			    	    $("table tbody").html("");
 			    	    count=result.status;
 			    	    if(count%pagesize==0){
 		  	                 pagecounts=count/pagesize;
 		                 }else{
 		                 pagecounts=parseInt(count/pagesize)+1;
 		                 }
 			    	   var students=result.data;
 			    	    if(currentpage==pagecounts){
 			    	    	for(var i=0;i<students.length;i++){
 			    	    		
 			    	    		 var stu=students[i].stuno;
 			    	    	    var name=students[i].stu_name;
 			    	    		 var base_name=students[i].base_name;
 			    	    		 
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="30px">';
 			    	 	    tr+='  <td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  //tr+='<td> <a>录入成绩</a></td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
 			    	 	  $tr.data("stu",stu);
  			    	 	 $tr.data("name",name);
  			    	 	 $tr.data("base_name",base_name);
 			    	 	   // $tr.data=("stuno",stu);
 			    	 	     $("table tbody").append($tr);
 			    	      }
 			    	        $("table tfoot td b").html(students.length);
 			    	         $("#page a").remove();
 			    	         a="<a id='head' class='dianji' onclick='toHomePage()'>首页</a>";
 			    	         $a=$(a);
 			    	         $a.insertAfter("#number");
 			            }else if(currentpage<pagecounts){
 			        	  for(var i=0;i<students.length;i++){
 			        		   stu=students[i].stuno;
 			        		   name=students[i].stu_name;
 			    	    	  base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="30px">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	   // tr+='<td> <a>录入成绩</a></td>';
 			    	 	 tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	  $tr.data("stu",stu);
 			    	 	 $tr.data("name",name);
 			    	 	 $tr.data("base_name",base_name);
 			    	 	   // $tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(pagesize);
 			    	 $("#page a").remove();
 			    	 a='<a id="head" class="dianji" onclick="toHomePage()">首页</a><a id="nextpage" onclick="nextPage()">下一页</a><a id="end" onclick="toEndpage()">尾页</a>';
 			    	 $a=$(a);
 			    	 $a.insertAfter("#number");
 			        }
 			    	}else{
 			    		$("table tbody").html("");
 			    		
 			    		$("table tfoot td b").html(0);
 			    		alert(result.msg);
 			    		
 			    	}
 			    }
 	});
 	}
 function toEndpage(){
 	    
 		currentpage=pagecounts;
 		page=(currentpage-1)*pagesize;
 		$.ajax({
 		        url:"http://localhost:8080/BaseTrainManage/baseteacher/loadInfo.do",
 			    type:"post",
 			     data:{"page":page,"pageSize":pagesize,"stuname":stuname},
 			    dataType:"json",
 			    success:function(result){
 			    	if(result.status!=0){
 			    	    $("table tbody").html("");
 			    	   var students=result.data;
 			    		$("#page #head").addClass("dianji");
 			    	    if(pagecounts==1){
 			    	    	for(var i=0;i<students.length;i++){
 			    	    		 stu=students[i].stuno;
 			    	    		 name=students[i].stu_name;
 			    	    		 base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	  //  $tr.data=("stuno",stu);
 			    	 	     $("table tbody").append($tr);
 			    	      }
 			    	        $("table tfoot td b").html(students.length);
 			    	         a="<a id='head' class='dianji' onclick='toHomePage()'>首页</a>";
 			    	         $a=$(a);
 			    	         $a.insertAfter("#number");
 			            }else{
 			        	  for(var i=0;i<students.length;i++){
 			        		 stu=students[i].stuno;
 			        		 name=students[i].stu_name;
 			    	    	 base_name=students[i].base_name;
 			    	 	    var tr='<tr align="center" bgcolor="#FFFFFF" height="22">';
 			    	 	    tr+='<td>'+students[i].stuno+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].stu_sex+'</td>';
 			    	 	    tr+='  <td>'+students[i].birthday+'</td>';
 			    	 	     tr+='  <td>'+students[i].phone+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_name+'</td>';
 			    	 	    tr+='  <td>'+students[i].base_class+'</td>';
 			    	 	    tr+='  <td>'+students[i].cname+'</td>';
 			    	 	  tr+='  <td><a href="JDT_addGrade.html?stuno='+stu+'&name='+name+'&base_name='+base_name+'"  target="businessfrm">录入成绩</a></td>';
			    	 	    $tr=$(tr);
			    	 	  $tr.data("stu",stu);
			    	 	 $tr.data("name",name);
			    	 	 $tr.data("base_name",base_name);
 			    	 	   // $tr.data=("stuno",stu);
 			    	 			$("table tbody").append($tr);
 			    	 }
 			    	 $("table tfoot td b").html(students.length);
 			    	 $("#page a").remove();
 			    	 a='<a id="head" onclick="toHomePage()">首页</a><a id="nextpage" onclick="frontpage()">上一页</a><a id="end" class="dianji" onclick="toEndpage()">尾页</a>';
 			    	 $a=$(a);
 			    	 $a.insertAfter("#number");
 			        }		
 			    	}
 			    }
 	});
 	}

