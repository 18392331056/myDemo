    
window.onload= function(){
	//点击注册按钮注册账号
    $("#tijiao").click(function(){
		test();
	});



}

//注册账号
function test(){
	var shuzi2=$("#shuzi2").val();
	// var email1=$("#email1").val();
	// var email2=$("#email2").val();
	var pwd1=$("#pwd1").val();
	// var pwd2=$("#pwd2").val();

    $.ajax({
    	type: "POST",
    	url: "php/zhuce.php",
    	data: {id:shuzi2,pass:pwd1},
    	success: function(data){
    		if(data=="1"){
				alert("注册成功");
				location.href="login.html";
	 		}else if(data=="2"){
		 		alert("注册失败");
		 	}else if(data=="3"){
		 		alert("用户名已存在，请重新输入！")
			}
   		}
	});
}