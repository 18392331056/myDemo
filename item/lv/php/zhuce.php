<?php
	header("content-type:text/html;charset=utf-8");

	$phone=$_GET['phone'];
	$mail=$_GET['mail'];
	$mails=$_GET['mails'];
	$password1=$_GET['password1'];
	$password2=$_GET['password2'];
	
	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败");
	}

	mysql_select_db("lv",$conn);


	$sqlstr="insert into zhuce values('$phone','$mail','$mails','$password1','$password2')";
	$result = mysql_query($sqlstr,$conn);//结果是个表格

	mysql_close($conn);

	if(mysql_num_rows($result)>0){
		echo "该用户已经被使用";
	}else{
		echo "该用户可以使用";
	}
	// if($result==1){
	// 	echo "1";
	// }else{
	// 	echo "2";
	// }else{
	// 	echo "3";
	// }



	// echo "
 //        <script>
 //        	alert('注册成功');
            
	// 	</script>";
?> 
 <!-- <?php
  //   header("Content-type:text/html;charset=utf-8");

  //    $phone=$_GET['phone'];
	 // $mail=$_GET['mail'];
	 // $mails=$_GET['mails'];
	 // $password1=$_GET['password1'];
	 // $password2=$_GET['password2'];

  //   $conn=mysql_connect("localhost","root","root");
  //   mysql_select_db("lv",$conn);
  //   $sqlstr="select * from zhuce where shuzi2='$phone'";
  //   $result=mysql_query($sqlstr,$conn);
  //   $rows = mysql_num_rows($result);
  //   if($rows==0){
  //       //3.2保存
  //       $sqlstr="insert into zhuce values('$phone','$password1')";
  //       $result = mysql_query($sqlstr,$conn);
  //       //4、关闭数据库
  //       mysql_close($conn);
        
  //       if($result==1){
  //           //三、响应
  //           echo "1";  //注册成功
  //       }else{
  //           echo "2";  //注册失败.
  //       }else{
  //       echo "3";  //用户名已经存在
  //   } 

?> -->