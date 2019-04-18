//轮播图1
let myTimer = null;
let currIndex = 0;
var arr=["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn","http://www.1000phone.com","http://www.163.com"];

//自动播放
function autoPlay(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//一、数据处理
		let outIndex = currIndex;
		currIndex=currIndex+1;

		if(currIndex>=8){
			currIndex=0;
		}

		//二、外观呈现
		showImg(outIndex,currIndex);

	},1000);

}
//停止播放	
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}

//跳转到对应的图片上
function goImg(index){
	//一、数据处理
	let outIndex = currIndex;
	currIndex = index;

	if(currIndex>=8 || currIndex<0){
		currIndex=0;
	}

	//二、外观呈现
	showImg(outIndex,currIndex);
}

//显示指定的图片
function showImg(outOrd,inOrd){
	if(outOrd==inOrd){
		return;
	}
	//1、改图片
	let imgDoms = $("#box").children;
	// for(let i=0;i<imgDoms.length-1;i++){
	// 	imgDoms[i].style.zIndex = 1;
	// }
	// imgDoms[outOrd].style.zIndex = 2;
	fadeInOut(imgDoms[outOrd],200,imgDoms[inOrd]);
	//2、改豆豆
	let liDoms = $("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.opacity = 0.5;
	}
	liDoms[inOrd].style.opacity = 1;
}

window.onload = function(){
	//1、自动播放
	autoPlay();

	//2、鼠标进入停止播放
	$("#box").onmouseover = function(){
		stopPlay();
	}

	//3、鼠标离开继续播放
	$("#box").onmouseout = function(){
		autoPlay();
	}

	//4、点豆豆跳到对应的图片上
	// $("#doudouBox").onclick = function(event){
	// 	let evt = event || window.event;
	// 	if(evt.target.tagName.toLowerCase()=="li"){
	// 		goImg(evt.target.getAttribute("index"));
	// 	}
	// }

	let liDoms = $("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].setAttribute("index",i);
		//绑定了事件
		liDoms[i].onclick = function(event){
			let evt = event || window.event;
			// console.log(i);
			// goImg(i);//循环的时候，不会调用goImg();
			goImg(this.getAttribute("index"));
			evt.stopPropagation();
		}
	}

	

	//5、超链
	$("#box").onclick = function(){
		location.href = arr[currIndex];
	}

}
window.onscroll =function(){
			let dDom = $("#sus");
			let dScroll = document.body.scrollTop || document.documentElement.scrollTop;
			if(dScroll >= 10){
				dDom.style.display = "block";
				dDom.style.position = "fixed";
				dDom.style.bottom = "10px";
				dDom.style.right = "10px";
			}else{
				dDom.style.display = "none";
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










