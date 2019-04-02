var mySwiper;
$(function(){
    loadFn({
        loadImg: {
            i1: "img/bg1.png"
        },
        complete:init
    });
    //随机出题目
    function init(imgs){

        setTimeout(function(){
            $('#loading').hide();
        },1000);



    }
    //清楚默认事件
    $(document).on("touchstart",function(e){
        e.stopPropagation();
    });
});
