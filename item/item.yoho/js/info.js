window.onload=function(){
//正则判断电话
	my$("#phone").onblur = function(){
		var reg = /^[1-9]\d{10}$/;
		var reg2 = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/i;
		if (reg.test(this.value)||reg2.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
//正则判断密码
	my$("#password").onblur = function(){
		var reg3 = /^[1-9]\d{9}$/;
		if (reg3.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
//扫码登录切换密码登录
	my$("#change_img").onclick=function(){
		console.log("1");
		my$("#center_big_right_box").style.display = "block";
		my$("#pc1").style.display = "block";
		my$("#change_img").style.display = "none";
		my$("#change_box").style.display = "none";
		my$("#pc1").style.zIndex = "1";
	}
//密码登录切换扫码登录
	my$("#change_img2").onclick=function(){
		console.log("2");
		my$("#center_big_right_box").style.display = "none";
		my$("#change_img").style.display = "block";
		my$("#pc1").style.display = "none";
		my$("#change_box").style.display = "block";
	}
//登录页面转注册页面
}
function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}