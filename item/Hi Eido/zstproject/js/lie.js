
$(function(){
	$("#header").load("header.html");
	$("#footer").load("footer.html");
	// 请求ajax
	$.ajax({
		type:"GET",
		url:"php/getGoodsList.php",
		async:true,
		dataType:"json",
		success:function(data){
			console.log(data);
			console.log(typeof data)
			showfunc(data);	
		}

	});						
})

function showfunc(data){

	let strHTML="";
	for(var i in data){
		strHTML+=`<div class="jiyuan">
								<img src=${data[i].goodsImg}>
								<div class="price">
									<p>${data[i].goodsName}</p>
									<p class="yan">
										<span>${data[i].beiyong1}</span>
										<span>￥${data[i].goodsPrice}</span>

									</p>
								</div>
								<p class="shop_car"><a href="">加入购物车</a></p>
								<p class="xiang_qing"><a href="xiang.html?goodsId=${data[i].goodsId}">详情</a></p>

							</div>`
										// href="shopList.html?goodsId=${objs[i].goodsId}"
							
	}

	$(".center_lie").append(strHTML);
}