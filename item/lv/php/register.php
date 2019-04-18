<?php
    header("Content-type:text/html;charset=utf-8");

    $id=$_POST['id'];
    $pass=$_POST['pass'];

    $conn=mysql_connect("localhost","root","root");
    mysql_select_db("wacom",$conn);
    $sqlstr="select * from login where userid='$id'";
    $result=mysql_query($sqlstr,$conn);
    $rows = mysql_num_rows($result);
    if($rows==0){
        //3.2保存
        $sqlstr="insert into login values('$id','$pass')";
        $result = mysql_query($sqlstr,$conn);
        
        //4、关闭数据库
        mysql_close($conn);
        
        if($result==1){
            //三、响应
            echo "1";  //注册成功
        }else{
            echo "2";  //注册失败.
        }
    }else{
        echo "3";  //用户名已经存在
    }
?>