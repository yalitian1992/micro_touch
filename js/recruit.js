$(function(){
  var titHeight;


  /*判断微信或不是微信*/
  function isWachat (isisWachat, notWachat) {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      isisWachat();
    } else {
      notWachat();
    }
  }

  isWachat(function(){
    $(".header .tit").css("display","none")
    titHeight = 0
  },function(){
    titHeight = $(".tit").outerHeight() + 28
    $(".header .tit").css("display","block")
    $(".preface").css("margin-top",titHeight)
    $(".licence-box").css("margin-top",titHeight)

    // console.log(titHeight);
  })


  $(window).scroll(function(){
    // console.log($(".tit").outerHeight());
    var scrollTop = $(window).scrollTop();  //浏览器到页面
    var Height = $(".detail").offset().top
    var navHeight = $(".rec-nav").outerHeight()
    var Range = Height - scrollTop


    if(Range <= titHeight+navHeight){
      $(".rec-nav").addClass("active")
      $(".rec-nav").css("top",titHeight)
      $(".detail").css("marginTop",navHeight)
    }else{
      $(".rec-nav").removeClass("active")
      $(".detail").css("marginTop",0)
    }
  })


//招聘信息—— 标签切换
  $(".rec-nav li").on("click",function(){
    var idx = $(".rec-nav li").index(this)
    $(this).addClass("active").siblings().removeClass("active");
    $(".detail li:nth-child("+ (idx+1) +")").addClass("active").siblings().removeClass("active");
  })


})