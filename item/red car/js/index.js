

$(function(){
    var len = $('.time').length;
    $('#banner').width($('.time').eq(0).width*len);
    var dsq;
    var index = 0;
    dsq = setInterval(strat,3000);
    function strat(){
        index++;
        $('#banner').animate({'left':-$('.time').eq(0).width()*(index % len)});
        $('.time01').eq(index).addClass('dong01');
        var s = index - 1;
        var x = index; 

        if(index % len == (len-1)){
            $('#banner').animate({'left':0},0);
            index++;
        }
        $('.time01').eq(s).removeClass('dong01');
        if(index == 7){
            $('.time01').eq(--index).removeClass('dong01');
            index = 0;
            if(index == 0){
                $('.time01').eq(0).addClass('dong01');
                $('.time01').eq(5).removeClass('dong01');
            }
            // if(index==6){
                // $('.time01').eq(5).removeClass('dong01');
            // }
        }
        // console.log(index);
    }
})
window.onload = function(){
    //返回顶部
    $('#fh').click(function(){
        $('html, body').animate({scrollTop:0},'500');
    })

    //点击变形
    var showMenu = false;
    $('.anniu').click(function cha(){
        if(!showMenu){
            $('.menu-tap').show();
            $('.anniu div:nth-child(2)').css({opacity: '0'});
            $('.anniu div:nth-child(1)').css({transform: 'rotate(45deg)',marginTop: '0'});
            $('.anniu div:nth-child(3)').css({transform: 'rotate(-45deg)',marginTop: '0'});
        }else{
            $('.menu-tap').hide();
            $('.anniu div:nth-child(2)').css({opacity: '1'});
            $('.anniu div:nth-child(1)').css({transform: 'rotate(0deg)',marginTop: '-7px'});
            $('.anniu div:nth-child(3)').css({transform: 'rotate(0deg)',marginTop: '7px'});
        };
        showMenu = !showMenu;
    })
}


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