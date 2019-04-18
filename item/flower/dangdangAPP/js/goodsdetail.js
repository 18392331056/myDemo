// import { equal } from "uri-js";

$(".car-btn").toggle(function(){
    $(this).removeClass("car-btn-off");
    $(this).addClass("car-btn-on");
    $(this).attr("checked",true);
    // let s = $(this).attr('checked');
        // console.log(s);
    // if($(this).attr('checked')){
    //     $(this).parent().parent().prev().find('input').attr('checked',true).addClass('car-btn-on');
    // }
    if($(this).parent().parent().find('input').attr('checked')){
        $(this).parent().parent().prev().find('input').attr('checked',true).addClass('car-btn-on');
    }
    all()
},
function(){
    $(this).removeClass("car-btn-on");
    $(this).addClass("car-btn-off");
    $(this).attr("checked",false);
    // $(this).prop("checked",false);
    // console.log($(this).parent().parent().find('input').attr('checked'));
    if(!$(this).parent().parent().find('input').attr('checked')){
        $(this).parent().parent().prev().find('input').attr('checked',true).removeClass('car-btn-on').addClass('car-btn-off');
    }
    all()
})
$(".shop-btn").toggle(function(){
    $(this).parent().parent().find('input').addClass("car-btn-on");
    $(this).parent().parent().find('input').removeClass("car-btn-off");
    $(this).parent().parent().find('input').attr("checked",true);
    console.log($(this).parent().parent().find('input').length);
    // all()
},
function(){
    $(this).parent().parent().find('input').removeClass("car-btn-on");
    $(this).parent().parent().find('input').addClass("car-btn-off");
    $(this).parent().parent().find('input').attr("checked",false);
    // all()
})




$(".all-btn").toggle(function(){
    $(this).parent().parent().parent().find('input').addClass("car-btn-on").removeClass("car-btn-off").attr("checked",true);
},function(){
    $(this).parent().parent().parent().find('input').removeClass("car-btn-on").addClass("car-btn-off").attr("checked",false);
})

    
function all(){
    if($('.shopping-car-box').find('input').attr('checked')){
        return $('.all-btn').removeClass('car-btn-off').addClass('car-btn-on');
    }
}