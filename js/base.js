$(function(){
	/*-=---------套餐滚动----------*/
	var total=$('.tab_pic ul li').length;
	$('.tab_pic ul li').eq(0).addClass('on');
	$('.tab_txt ul li').eq(0).addClass('on');
	$('.tab_pic ul').width(total*710);
	$('.tab_txt ul').width(total*456);
	$('.next').click(function(){
		var num=$('.tab_pic ul li').length;
	    var index=$('.tab_pic ul li.on').index('.tab_pic ul li');
		var on=index+1<num?index+1:0;
		var pwidth=parseInt(on*710);
		var twidth=parseInt(on*456);
		$('.tab_pic ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_pic ul').stop().animate({left: -pwidth},700);
		$('.tab_txt ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_txt ul').stop().animate({left: -twidth},700);
	});
	$('.prev').click(function(){
		var num=$('.tab_pic ul li').length;
	    var index=$('.tab_pic ul li.on').index('.tab_pic ul li');
		var on=index==0?num-1:index-1;
		var pwidth=parseInt(on*710);
		var twidth=parseInt(on*456);
		$('.tab_pic ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_pic ul').stop().animate({left: -pwidth},700);
		$('.tab_txt ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_txt ul').stop().animate({left: -twidth},700);
	});
	
	/*---------网页滚动------------*/
	var banH = $('.banner').height();
	$('.b_scroll').on('click',function(){
		$('html,body').animate({scrollTop:banH-74},500);
	});
	
	function TC(){$('.btn_ct a.next').triggerHandler('click');}
	var taocan = window.setInterval(TC,3000);
	$('.tc_box').hover(function(){
			window.clearInterval(taocan);
		},function(){
			taocan = window.setInterval(TC,3000);
		});
});

