// function $(str){//#box .cls  p
// 	if(str.charAt(0)=="#"){
// 		return document.getElementById(str.substring(1));
// 	}else if(str.charAt(0)=="."){
// 		return document.getElementsByClassName(str.substring(1));
// 	}else{
// 		return document.getElementsByTagName(str);
// 	}
// }	
window.onload=function(){
    $("#userId").blur(function(){
        var reg=/^\w{6,}$/i;//6位以上数字或字母
        if(reg.test($(this).val())==false){
            $(".eg").html("请输入正确的账号！");
            $(".eg").css({
                color:"red",
                fontSize:"12px",
                display:"inline-block"
            });
        }else{
            $(".eg").css({
                display:"none"
            });
        }
    });

    $("#email").blur(function(){
        var reg=/^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/i;
        if(reg.test($(this).val())==false){
            $(".em").html("请输入正确的邮箱！");
            $(".em").css({
                color:"red",
                fontSize:"12px",
                display:"inline-block"
            });s
        }else{
            $(".em").css({
                display:"none"
            });
        }
    });

    $("#Pass").blur(function(){
        var reg=/^\w{9,32}$/i;//9-32位字符
        if(reg.test($(this).val())==false){
            $(".pa").html("请输入正确的密码！");
            $(".pa").css({
                color:"red",
                fontSize:"12px",
                display:"inline-block"
            });
        }else{
            $(".pa").css({
                display:"none"
            });
        }
    });

    //判断pass和pass2是否一致
    $("#pass2").blur(function(){
        var reg2=/^\w{9,32}$/i;;
        if($(this).val() != $("#Pass").val()){
            $(".pa2").html("两次密码输入不一致，请重新输入！");
            $(".pa2").css({
                color:"red",
                fontSize:"12px",
                display:"inline-block"
            });
        }else{
            $(".pa2").css({
                display:"none"
            });
        }
    });



    //点击注册按钮注册账号
    $(".reg_btn").click(function(){
		regusername();
	});



}

//注册账号
function regusername(){
	var userid=$("#userId").val();
	var userpass=$("#Pass").val();

    $.ajax({
    	type: "POST",
    	url: "php/register.php",
    	data: {id:userid,pass:userpass},
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