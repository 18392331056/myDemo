$(function(){
		$("#header").load("header.html");
		$("#footer").load("footer.html");
		$.ajax({
		type:"GET",
		url:"php/getGoodsinfo.php",
		data:{
			"goodsId":id},
		async:true,
		dataType:"JSON",
		success:function(data){
			console.log(data);
			console.log(typeof data)
			// showfunc(data);
			}	
		})


	})



var id = GetRequest();
function GetRequest(){
			var str = location.search;
			//获取url中？后的字符串
			var arr = str.split("=");//将字符串以等号分割
			for(var i in arr){
					return arr[1];
			}
}
