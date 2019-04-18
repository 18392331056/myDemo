


// var id;

// window.onload = function(){
  
    
//     id = getUrlParam('goodsId');
//     $.ajax({
//         type:"get",
//         url:"../php/getGoodsInfo.php",
//         success:function(data){
//             createUI(data);
//         }
//     });
// }

// function getUrlParam(name){

//     let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

//     let r = window.location.search.substr(1).match(reg); //匹配目标参数
//     if(r!=null){
//         return unescape(r[2]);//返回参数值
//     }
//     return null;
// }

// function createUI(data){
//     var goodsJson = jQuery.parseJSON(data);
//     $.each(goodsJson,function (indx,val){
//         if (id == val.goodsId){

//             let str =`
            
//             <div class="goods_box"> 
//                     <div class="goods_l" style="width:1060px;height:750px">
//                         <a href="goodslist.html">< 返回</a>
//                         <div class="goods_down">
//                             <div class="goods_s">
//                                 <ul class="pic_box" id="pic_box">
//                                     <li><img id="tu_1" src="${val.beiyong1}"></li>
//                                     <li><img id="tu_2" src="${val.beiyong2}"></li>
//                                     <li><img id="tu_3" src="${val.beiyong3}"></li>
//                                 </ul>
//                                 <div class="Pic">
//                                     <img class="tu1" src="${val.beiyong1}">
//                                     <img class="tu1" src="${val.beiyong2}">
//                                     <img class="tu1" src="${val.beiyong3}">
//                                 </div>
//                             </div>
//                             <p id="yangmao">由纯羊毛裁制而成的夹克，唇袋以及多层粘合皮领设计展现鲜明的现代造型风格。 均匀一致的直筒剪裁，LV压纹纽扣凸显细腻的品牌特质。</p>
//                         </div>  
//                     </div>
//                     <div class="goods_r" style="width:360px;height:750px;border-left:1px solid #e2e2e2;padding-left:20px">
//                         <p>${val.goodsName}</p>
//                         <p>1A3KCD</p>
//                         <p>尺寸</p>
//                         <select>
//                             <option>请选择一个合适的尺码</option>
//                             <option>48-致电购买</option>
//                         </select>
//                         <p id="chicun">尺码参考表</p>
//                         <p id="money">${val.goodsPrice}</p>
//                         <div class="count">
//                             <p id="shuliang">数量：</p>
//                             <input class="reduceCls" id="jian" type="button" value="-" />
//                             <span id="spanIdOne" style="padding-right: 10px;padding-left: 10px;margin-top: 20px">1</span>
//                             <input class="addcls" id="jia" type="button" value="+" />
//                         </div>
//                         <input type="button" name="" id="buy" value="致电购买">
//                         <input type="button" name="" id="car" value="加入购物车">
//                         <div class="fenxiang">
//                             <a href="#" class="list">⊱分享</a>
//                             <a href="#" class="list">♡添加至愿望清单</a>
//                         </div>
//                         <a id="dizhi" href="#">
//                             <img src="image/address.PNG">
//                             <p>寻找一家专卖店</p>
//                         </a>
//                         <div class="zhidian">
//                             <img src="image/shouji.PNG">
//                             <p>欢迎致电 4006 588 555</p>
//                         </div>
//                         <p id="tezheng"> > 详细特征</p>     
//                     </div>
//             </div>
//             `;
//             $(".goods").append(str);
//         }
//     });
// }
            
let myTimer;//定义定时器
        let index = 0;//记录当前图片的序号，从0开始

        function goImg(transIndex) {
            //1、改变数据（改变当前图片的序号）
            let outIndex = index;
            index = transIndex;

            //3、改变外观
            showImg(index,outIndex);
        }

        function showImg(inIndex,outIndex) {
            if(inIndex==outIndex){
                return;
            }
            //3.1 改变图片的z-index
            let imgs = my$(".tu1");
            // imgs[inIndex].style.left = "600px";
            imgs[inIndex].style.left = "600px";
            //滑入滑出（需要知道入的序号，出的序号）
            // moveObj02(imgs[outIndex],"left",-400,1000);
            // moveObj02(imgs[inIndex],"left",0,1000);
            slideInOut(imgs[outIndex],imgs[inIndex],"left",-600,600,1200);

          }

        window.onload = function(){

            //4、点击豆豆跳到指定的图片
            let lis = my$("#pic_box").children;
            for(let i=0;i<lis.length;i++){
                lis[i].setAttribute("index",i);
                lis[i].onclick = function () {
                    //跳到指定序号的图片
                    goImg(parseInt(this.getAttribute("index")));
                    // $("#tu_1").css.style ="border=1px solid gray";
                }
            }

}