let myTimer2 = null;
let currIndex2 = 0;
// var arr=["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn","http://www.1000phone.com","http://www.163.com"];

//自动播放
function autoPlay2(){
	if(myTimer2!=null){
		return;
	}
	myTimer2 = setInterval(function(){
		//一、数据处理
		currIndex2=currIndex2+1;

		if(currIndex2>=2){
			currIndex2=0;
		}

		//二、外观呈现
		showUl(currIndex2);

	},2000);
}
//停止播放	
function stopPlay2(){
	window.clearInterval(myTimer2);
	myTimer2 = null;
}

// 跳转到对应的图片上
// function goUl(index){
// 	//一、数据处理
// 	currIndex2 = index2;

// 	if(currIndex2>=2 || currIndex2<0){
// 		currIndex2=0;
// 	}

// 	//二、外观呈现
// 	showUl(currIndex2);
// }

//显示指定的图片
function showUl(ord){
	//1、改图片
	let ulDoms = $("#slide_box").children;
	for(let i=0;i<ulDoms.length;i++){
		ulDoms[i].style.zIndex = 1;
	}
	ulDoms[ord].style.zIndex = 2;
	//2、改豆豆
	// let liDoms = $("#doudouBox").children;
	// for(var i=0;i<liDoms.length;i++){
	// 	liDoms[i].style.backgroundColor = "pink";
	// }
	// liDoms[ord].style.backgroundColor = "red";
}

window.onload = function(){
	//1、自动播放
	autoPlay2();

	//2、鼠标进入停止播放
	$("#slide_box").onmouseover = function(){
		stopPlay2();
	}

	//3、鼠标离开继续播放
	$("#slide_box").onmouseout = function(){
		autoPlay2();
	}

	//4、点豆豆跳到对应的图片上
	// $("#doudouBox").onclick = function(event){
	// 	let evt = event || window.event;
	// 	if(evt.target.tagName.toLowerCase()=="li"){
	// 		goImg(evt.target.getAttribute("index"));
	// 	}
	// }

	// let liDoms = $("#doudouBox").children;
	// for(var i=0;i<liDoms.length;i++){
	// 	liDoms[i].setAttribute("index",i);
	// 	//绑定了事件
	// 	liDoms[i].onclick = function(event){
	// 		let evt = event || window.event;
	// 		// console.log(i);
	// 		// goImg(i);//循环的时候，不会调用goImg();
	// 		goImg(this.getAttribute("index"));
	// 		evt.stopPropagation();
	// 	}
	// }

	

	//5、超链
	// $("#slide_box").onclick = function(){
	// 	location.href = arr[currIndex];
	// }

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