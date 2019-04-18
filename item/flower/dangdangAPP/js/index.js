
$(function(){
    var len = $(".top-banner-item").length;
    $('.banner-box').width($('.top-banner-item').eq(0).width()*len);
    var id;
    var index=0;
    id=setInterval(strat,2000);
    function strat(){
        index++;
        $('.banner-box').animate({'left':-$('.top-banner-item').eq(0).width()*(index%len)});
        $('.banner-cir').eq(index).addClass('cir-white');
        
        // console.log("index"+index);
        // console.log(s);
        var s = index-1;
        var d = index;
        $('.banner-cir').eq(s).removeClass('cir-white');
        // console.log(index);
        if(index%len==(len-1)){
            $('.banner-box').animate({'left':0},0);
            index++;
        }
        if(index==9){
            $('.banner-cir').eq(--index).removeClass('cir-white');
            index=0;
            if(index==0){
                $('.banner-cir').eq(0).addClass('cir-white');
            }
            if(index==8){
                $('.banner-cir').eq(8).addClass('cir-white');
            }
        }
        // console.log(index);
    }
})

function bannerAtuto(item,box){
    var len = item.length;
    box.width(item.eq(0).width()*len);
    var id;
    var index=0;
    id = setInterval(start,2600);
    function start(){
        index++;
        box.animate({'margin-left':-item.eq(0).width()*(index%len)});
        if(index%len==(len-1)){
            box.animate({'margin-left':0},0);
            index++;
        }
    }
}
$(function(){
    bannerAtuto($(".brand-item"),$(".brand-banner"))
})