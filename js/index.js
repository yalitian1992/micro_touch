
$(function(){


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
  },function(){
    $(".header .tit").css("display","block")
  })

function isPhone(phone, pc){
    var browser = {
                 versions: function () {
                   var u = navigator.userAgent, app = navigator.appVersion;
                   return {     //移动终端浏览器版本信息
                     trident: u.indexOf('Trident') > -1, //IE内核
                     presto: u.indexOf('Presto') > -1, //opera内核
                     webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                     gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                     mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                     ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                     android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                     iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                     iPad: u.indexOf('iPad') > -1, //是否iPad
                     webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                   };
                 }(),
                 language: (navigator.browserLanguage || navigator.language).toLowerCase()
               }  
       if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
           phone()
       } else {
           //否则就是PC浏览器打开
           pc()
       }
}      

    isWachat(function(){
        $(".tit").hide();
    }, function(){})



/*    isPhone(function(){
        $(".screem2 .box").on("click", function(){
            window.open("http://www.zbqibing.com/jifen-m")
        })
    }, function(){
        $(".screem2 .box").on("click", function(){
            window.open("http://www.zbqibing.com/jifen-pc")
        })
    })*/

    isPhone(function(){
            $('.pc.about').remove()
            $('.pc.contact').remove()
        }, function(){})

    // 集分竞宝 跳转页
    $(".scr2-list-box").on("click",function(){
      window.open("http://www.zbqibing.com/jifen")
    })

    // 滚屏动画
    $('#dowebok').fullpage({
        sectionsColor: [],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
                        console.log(index)
                        if(index == 2){
                            $(".pc.screem2 .chip").addClass('active')
                            $(".pc.screem2 .center-chip ").addClass('active')
                        }else{
                            $(".pc.screem2 .chip").removeClass('active')
                            $(".pc.screem2 .center-chip ").removeClass('active')
                        };
                    },


        //页面加载完成
        afterRender: function(index){

                        console.log(2)
                        if(index == 3){
                        }
                        // 结构加载完成视频自动播放
                        // $("#v1")[0].play();


                        //结构加载完成是主背景margin的值为屏幕高度，正好显示视频
                        $(".main-bgc .up-down").css("margin-top",$(window).height()+"px");


                        //结构加载完成TOP显示
                        //

                        // 页面文档加载完成给所有animate类添加动画样式，开关在向上滑动向下滑动函数里
                        // 
                        $(".animate").addClass("animate-up");

                        $(".animate:nth-child(1)").addClass("animate-to-up-1");
                        $(".animate:nth-child(2)").addClass("animate-to-up-2");
                        $(".animate:nth-child(3)").addClass("animate-to-up-3");
                        $(".animate:nth-child(4)").addClass("animate-to-up-4");
                        $(".animate:nth-child(5)").addClass("animate-to-up-5");
                        $(".animate:nth-child(6)").addClass("animate-to-up-5");
                        $(".animate:nth-child(7)").addClass("animate-to-up-5");
                        $(".animate:nth-child(8)").addClass("animate-to-up-5");
                        $(".animate:nth-child(9)").addClass("animate-to-up-5");
                        $(".animate:nth-child(10)").addClass("animate-to-up-5");

                        $(".animate:nth-child(1)").addClass("animate-to-down-1");
                        $(".animate:nth-child(2)").addClass("animate-to-down-2");
                        $(".animate:nth-child(3)").addClass("animate-to-down-3");
                        $(".animate:nth-child(4)").addClass("animate-to-down-4");
                        $(".animate:nth-child(5)").addClass("animate-to-down-4");
                        $(".animate:nth-child(6)").addClass("animate-to-down-4");
                        $(".animate:nth-child(7)").addClass("animate-to-down-4");
                        $(".animate:nth-child(8)").addClass("animate-to-down-4");
                        $(".animate:nth-child(9)").addClass("animate-to-down-4");
                        $(".animate:nth-child(10)").addClass("animate-to-down-4");
                    },
        // 'navigation': true,
        onLeave: function(index,nextIndex,direction){





                    if (direction == "down") {

                        // 首页向下滑动前先清除本屏文字动画
                        $(".animate-up").removeClass('animate-up');
                        $(".animate-down").removeClass('animate-down');
                        $(".animate").addClass('animate-up');
                        
                    };



                    if (direction== "up") {
                        //首页向上滑动前先清除本屏文字动画
                        $(".animate-up").removeClass('animate-up');
                        $(".animate-down").removeClass('animate-down');
                        $(".animate").addClass('animate-down');
                        

                        // 向上滑动粒子动画
                        if (index == 2 ) {
                            $(".lizi").fadeOut(0);
                        };
                        if (index == 3 ) {
                            $(".lizi").fadeIn(0);
                        };
                        if (index == 6 ) {
                            $(".lizi").fadeOut(0);
                        };
                        if (index == 7 ) {
                            $(".lizi").fadeIn(0);
                        };
                        if (index == 11 ) {
                            $(".lizi").fadeOut(0);
                        };
                        
                    };

        }
    });

});