jQuery.fn.extend({
    bindCheckAll:function(subCheckBox){
        let $checkBoxAll = this;
        this.click(function(){
            let isChecked = this.checked;
            subCheckBox.each(function(){
                this.checked = isChecked;
            });
        });   
        subCheckBox.click(function(){
            changeCheckBoxAll();
        });

        function changeCheckBoxAll(){
            let isAllChecked = true;
            subCheckBox.each(function(){                
                if(!this.checked){
                    isAllChecked = false;
                }
            });
            $checkBoxAll[0].checked=isAllChecked?"checked":"";
        }
    }
});

$(function(){
    var stuid=getCookie("myphone");

    $.ajax({
        type: "get",
        url: "../php/getShoppingCart.php",
        async: true,
        dataType: "json",
        data: {
            vipName: stuid
        },
        success: function (data) {
            console.log(data);
            let htmlStr = "";

        for(let i in data){
            htmlStr+=`<div class="gray">
        <ul>
            <li class="gray_1">
                <input type="checkbox" id="check">
            </li>
            <li class="gray_2">
                <img src="${data[i].goodsImg}">
            </li>
            <li class="gray_3">
                <p>
                    <a href=""> ${data[i].goodsName}</a>
                </p>
                <h4>颜色：灰色拼接 尺码：M</h4>
            </li>
            <li class="gray_4">
                <span>¥${data[i].goodsPrice}</span>
            </li>
            <li class="gray_5">
                <input type="submit" class="gray_5_in1" id="gray_5_in1" value="－">
                <input type="text" class="gray_5_in2" id="gray_5_in2" value="1">
                <input type="submit" class="gray_5_in3" id="gray_5_in3" value="＋">
            </li>
            <li class="gray_6">
                <span>¥${data[i].goodsPrice}</span>
            </li>
            <li class="gray_7"> 
                <a href="">删除</a>
                <a href="">移入收藏</a>
            </li>
        </ul>
    </div>`;
        }
        $(".ccc").html(htmlStr);
    }
       });

})