$(function(){
		$('.nav .code').after('<div class="code_top"><span class="c_x x1"></span><span class="c_x x2"></span><span class="c_x x3"></span><span class="c_x x4"></span><img src="images/code1.jpg" /></div>');
	
		$('.top-banner div a').click(function(){
		$('.top-banner').hide();
		});
		
	//input焦点
	$('.appoint .form > input').focus(function(){
		$(this).addClass('onfocus');
		});
	$('.appoint .form > input').blur(function(){
		$(this).removeClass('onfocus');
		});
		
	//个人中心 控制按钮
		$('.navbar-r li').hover(function(){
			$(this).find('.li-t-t').stop(false,true).slideDown(300);
		},function(){
			$(this).find('.li-t-t').stop().slideUp(300);
			});
	
		
	//购物车按钮 控制代码
	$('.top-navbar .shopping').hover(function(){
			$(this).find('.shop-box').stop(false,true).slideDown(300);
		},function(){
			$(this).find('.shop-box').stop().slideUp(300);
			});
	$('.shop-box .s-li .del').click(function(){
		$(this).parent().remove();
		});
		
	//二维码代码
	$('.nav .code').hover(function(){
		$('.code_top').css({'display':'block'});
		$('.code_top .x1').stop().animate({top:0,left:0},200);
		$('.code_top .x2').stop().animate({top:0,right:0},200);
		$('.code_top .x3').stop().animate({bottom:0,left:0},200);
		$('.code_top .x4').stop().animate({bottom:0,right:0},200,function(){
			$(this).siblings('img').stop().animate({opacity:1},500);
			});
		},function(){
			if(!$('.code_top,.code_top span').is(":animated")){
				$('.code_top img').stop().animate({opacity:0},500,function(){
				$('.code_top .x1').stop().animate({top:50,left:50},200);
				$('.code_top .x2').stop().animate({top:50,right:50},200);
				$('.code_top .x3').stop().animate({bottom:50,left:50},200);
				$('.code_top .x4').stop().animate({bottom:50,right:50},200,function(){
					$('.code_top').css({'display':'none'});
					});
				});

				}
			
			});
	
	//导航里商品控制代码
	//bug修复：防止下拉框重复执行和下拉框闪现
			$('.menu .nav-item').hover(function(){
				var _this=this;
				if(this.Timer){
					clearTimeout(this.Timer);
				}
				this.Timer=setTimeout(function(){
					$(_this).find('.nav-content').stop(false,true).slideDown(200);
					},300);
		},function(){
			var _that=this;
			if(this.Timer){
					clearTimeout(this.Timer);
				}
				this.Timer=setTimeout(function(){
					$(_that).find('.nav-content').stop().slideUp(500);
					},500);
		});

	//搜索框
	$('.search .s-a>a').click(function(){
		$('.a-box').stop().slideToggle(100);
		});
	$('.search .a-box .s-a1>a').click(function(){
		$('.select strong').text($(this).text());
		$(this).parents('.a-box').slideUp(100);
		});
		
	//预约tab
	$('.app_tab li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		});
	
	//轮播下4个icon
	$('.con_list').hover(function(){
		$(this).find('img').stop().animate({right:25},300);
		},function(){
			$(this).find('img').stop().animate({right:15},100);
			});
			
	//商品的图片
	$('.c_good >.c').hover(function(){
		$(this).find('img').stop().animate({marginLeft:-15},300);
		},function(){
			$(this).find('img').stop().animate({marginLeft:0},300);
			});
			
	//小区案例
	$('.project .p_each').hover(function(){
		$(this).find('p').stop().animate({padding:0,minWidth:280,height:150,lineHeight:150,fontSize:26},300);
		},function(){
			$(this).find('p').stop().animate({padding:'0 10px',minWidth:50,height:26,lineHeight:26,fontSize:12},300);
			});

	})