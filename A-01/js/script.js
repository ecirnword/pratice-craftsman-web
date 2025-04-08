$(function(){
  $("nav>ul>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown();
  })
  $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp();
  })

  
  let i = 0;

  function slide(){
    if(i<2){
      i++;
    }else{
      i=0
    }
    $(".slide ul").animate({marginLeft:-1200 * i},1000)
  }

  setInterval(slide,3000)
  $(".pop").click(function(){
    $(".popup").show();
    return false;
  })
  $(".close button").click(function(){
    $(".popup").hide();
  })
})