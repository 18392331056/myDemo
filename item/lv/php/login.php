<?php
	header("Content-type:text/html;charset=utf-8");

//接受参数

	$phone = $_POST["phone"];
	$password1 =$_POST["password1"];

//处理
	///连接
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败");
	}
	//选择数据库
	mysql_select_db("lv",$con);
	//查询
	$mysqlstr="select * from zhuce where phone='$phone' and password1='$password1'";
	$result=mysql_query($mysqlstr,$con);
	//关闭数据库

	mysql_close($con);

	if(mysql_num_rows($result)>0){
		echo "1";
	}else{
		echo "0";
	}
?>