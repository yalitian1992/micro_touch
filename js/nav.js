$(function(){
				var navFlag = true;
	$(".nav-button").on('click', function() {
				

				// 左边菜单栏动画
				$(".nav-list").toggleClass("nav-list-show");
				$(".section .fp-tableCell").find(".content").toggleClass("zhezhao-translate");
				//菜单列表动画
				if (navFlag == true) {

					//第一次点击让整个导航宽度为100%；
					$(".main-nav").css('width','6.38rem');
					// 第一次点击出现遮罩层
	                $(".nav-zhezhao").addClass('zhezhao-show');

	                //第一次点击菜单按钮变关闭按钮
	                $(".nav-button i").fadeOut(500, function() {
	                	$(".nav-button i").toggleClass("baise");
	                	$(".nav-button i").removeClass('icon-caidan');
	                	$(".nav-button i").addClass('icon-cheng1');
	                	$(".nav-button i").fadeIn(500);
	                });

	                

	                //点击按钮让所有li都向右移500px
					// $(".main-nav .nav-list li").css("padding-left","500px")
					
	    //             $(".main-nav .nav-list li:eq(0)").animate({
	    //                 "padding-left":"0px",
	    //             },1000);
	    //             $(".main-nav .nav-list li:eq(1)").animate({
	    //                 "padding-left":"0px",
	    //             },1050);
	    //             $(".main-nav .nav-list li:eq(2)").animate({
	    //                 "padding-left":"0px",
	    //             },1100);
	    //             $(".main-nav .nav-list li:eq(3)").animate({
	    //                 "padding-left":"0px",
	    //             },1150);
	    //             $(".main-nav .nav-list li:eq(4)").animate({
	    //                 "padding-left":"0px",
	    //             },1200);
	    //             $(".main-nav .nav-list li:eq(5)").animate({
	    //                 "padding-left":"0px",
	    //             },1250);
	    //             $(".main-nav .nav-list li:eq(6)").animate({
	    //                 "padding-left":"0px",
	    //             },1300);
	    //             $(".main-nav .nav-list li:eq(7)").animate({
	    //                 "padding-left":"0px",
	    //             },1350);




	                // 第一点击菜单按钮开变关
	                $(".nav-button .spanbox").removeClass("to-on");
	                $(".nav-button .spanbox").addClass("to-off");


	                navFlag = false;
	                return navFlag;
				}else {

					//第二次点击让整个导航宽度为0；是为了不让它挡住触摸屏
					// $(".main-nav").animate({
	    //                 "width":"0px",
	    //             },1000);

					// 第二次点击关闭遮罩层
	                $(".nav-zhezhao").removeClass('zhezhao-show');

	                //第二次点击关闭按钮变菜单按钮
	                $(".nav-button i").fadeOut(500, function() {
	                	$(".nav-button i").toggleClass("baise");
	                	$(".nav-button i").removeClass('icon-cheng1');
	                	$(".nav-button i").addClass('icon-caidan');
	                	$(".nav-button i").fadeIn(500);
	                });

	                //第二次点击菜单按钮关变开
	                $(".nav-button .spanbox").removeClass("to-off");
	                $(".nav-button .spanbox").addClass("to-on");


	                navFlag = true;
	                return navFlag;
				};
	});
	




	// 点击遮罩层相当于点击关闭按钮
	// 点击黑色遮罩也可以关闭菜单
	$(".nav-zhezhao").on("click",function(){

					// 左侧菜单栏裂变显示与隐藏
					$(".nav-list").toggleClass("nav-list-show");
					// 遮罩层下边的内容缓动
					$(".section .fp-tableCell").find(".content").toggleClass("zhezhao-translate");

					if(navFlag == false) {

						// 点击遮罩层，遮罩消失
	                $(".nav-zhezhao").removeClass('zhezhao-show');


		                //点击遮罩层关闭按钮变菜单按钮
		                //字体图标版本
		                // $(".nav-button i").fadeOut(500, function() {s
		                // 	$(".nav-button i").toggleClass("baise");
		                // 	$(".nav-button i").removeClass('icon-cheng1');
		                // 	$(".nav-button i").addClass('icon-caidan');
		                // 	$(".nav-button i").fadeIn(500);
		                // });

		                //第二次点击菜单按钮关变开
		                $(".nav-button .spanbox").removeClass("to-off");
		                $(".nav-button .spanbox").addClass("to-on");


		                navFlag = true;
		                return navFlag;

					}

	})
	$(".m-header .nav-list li.list").on('click',function(){

		$(this).addClass('active').siblings('.list').removeClass('active')
		// 点击菜单列表相当于点击关闭菜单按钮
					// 左侧菜单栏裂变显示与隐藏
					$(".nav-list").toggleClass("nav-list-show");
					// 遮罩层下边的内容缓动
					$(".section .fp-tableCell").find(".content").toggleClass("zhezhao-translate");

					if(navFlag == false) {

						// 点击遮罩层，遮罩消失
	                $(".nav-zhezhao").removeClass('zhezhao-show');


		                //点击遮罩层关闭按钮变菜单按钮
		                //字体图标版本
		                // $(".nav-button i").fadeOut(500, function() {s
		                // 	$(".nav-button i").toggleClass("baise");
		                // 	$(".nav-button i").removeClass('icon-cheng1');
		                // 	$(".nav-button i").addClass('icon-caidan');
		                // 	$(".nav-button i").fadeIn(500);
		                // });

		                //第二次点击菜单按钮关变开
		                $(".nav-button .spanbox").removeClass("to-off");
		                $(".nav-button .spanbox").addClass("to-on");


		                navFlag = true;
		                return navFlag;

					}

		
	})

})