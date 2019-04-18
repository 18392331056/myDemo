window.onload=function(){
//正则判断电话
	$("#phone").onblur = function(){
		var reg = /^[1-9]\d{10}$/;
		var reg2 = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/i;
		if (reg.test(this.value)||reg2.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
//正则判断密码
	$("#password").onblur = function(){
		var reg3 = /^[1-9]\d{9}$/;
		if (reg3.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
}	

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}