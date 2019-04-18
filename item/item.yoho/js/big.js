 $(function(){
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    //接收URL中的参数goodsId
    var id = getUrlParam('goodsId');
    console.log('id:' + id);

    $.ajax({
        type: "get",
        url: "../php/getGoodsInfo.php",
        async: true,
        dataType: "json",
        data: {
            goodsId: id,
        },
        success: function (data) {
            console.log(data);
            $(".big_left").css("backgroundImage","url("+data.goodsImg+")");
            $(".big_last").css("backgroundImage","url("+data.goodsImg+")");
            $(".big_right_p1 span:nth-child(3)").html(data.goodsPrice);
            $(".pc1").attr("src",data.goodsImg);
            $(".big_right_h").html(data.goodsName);
            // $("#sBox").css("backgroundImage","url("+data.goodsImg+")");
            // $("#imgList li:nth-child(1)").css("backgroundImage","url("+data.goodsImg+")");
            // $("#imgList li:nth-child(2)").css("backgroundImage","url("+data.beiyong1+")");
            // $("#imgList li:nth-child(3)").css("backgroundImage","url("+data.beiyong6+")");
            // $("#imgList li:nth-child(4)").css("backgroundImage","url("+data.beiyong7+")");
            // $(".xq_top>h1").html(data.goodsName+"-"+data.pinming);
            // $(".xq_pic_right_tlt").html(data.goodsName);
            // $("#Price").html(data.goodsPrice);
            // $("#shouchusl").html(data.goodsCount);
            // $("#pinglun").html(data.goodsDesc);
            // $("#pingming").html(data.beiyong2);
            // $("#caizhi").html(data.beiyong3);
            // // $("#shoucun").html(data.handscun);
            // $("#zhuzuan").html(data.beiyong4);
        }
    });




    var stuid=getCookie("myphone");
    $(".goodsbtn").click(function(){
            console.log('id:' + id);
            $.ajax({
            type:"get",
            url:"../php/addShoppingCart.php",
            data: {
                vipName:stuid,
                goodsId: id,
                goodsCount:$(".input_2").val()
            },
            async:true,
            success: function(xhr){
                if(xhr==1){
                alert("加入到购物车");
                window.location.href = "shopcar.html";
                }else{
                alert("购物车已存在此商品");
                };
            }
        });
        })
 })
 

