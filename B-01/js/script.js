$(function(){
    //메뉴바
    $("nav>ul>li").mouseover(function(){
        $(".sub, .menubg").stop().slideDown();
    })

    $("nav>ul>li").mouseout(function(){
        $(".sub, .menubg").stop().slideUp();
    })


    //슬라이드
    let i = 0;
    function slide(){
        if(i<2){
            i++;
        }else{
            i=0;
        }

        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(i).fadeIn();
    }

    setInterval(slide,3000)

    //탭메뉴
    let t;
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass ("on");
        $(this).addClass("on");

        t = $(this).index();
        console.log(t);

        $(".tabcon").hide();
        $(".tabcon").eq(t).show();
        return false;

    })
    
    //팝업
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close button").click(function(){
        $(".popup").hide();
    })
})