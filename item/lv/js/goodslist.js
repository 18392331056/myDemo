    function createUI(data){
    	var goodsJson = jQuery.parseJSON(data);
    		//
    		for(var j = 0;j<3;j++){
    			// console.log(12);
    			for(let i = 0;i<15;i++){
    				//
    				let str = `
		    				<div class="goods_down_box">
		    					<a href="#" style="width:400px;height:500px;float:left;border:1px solid white">
									<img src="${goodsJson[i].goodsImg}" style="width:400px;height:"400px">
									<p style=" font-size:16px;color:black;margin-top:10px;text-align:center">${goodsJson[i].goodsName}</p>
									<p style=" font-size:16px;color:black;margin-top:10px;text-align:center">￥ ${goodsJson[i].goodsPrice}</p>
		    					</a>
		    				</div>
    					`;
    					//console.log(str);
    					$(".goods_down").append(str);
    			}
    		}
    }  