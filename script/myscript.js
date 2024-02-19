$(function(){


    //menu
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find(".sub").stop().slideUp();
    })//

    //slide
    var n = 0;
    setInterval(function(){
        if(n == 2){
            n = 0;
        }else{
            n++;
        }
         var pos = n * (-100) + "%"
        $(".left_move").animate({left:pos});
    },2500)

    //pop
    $(".p_click").click(function(){
        $(".modal, .pop").show()
    })
    $(".close").click(function(){
        $(".modal, .pop").hide()
    })


})//jquery