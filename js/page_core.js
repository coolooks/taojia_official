$(function(){
	/*-----套餐和帮助 下拉列表------*/
	$('#help,#taocan').mouseover(function(){
		var _this = this;
		if(this.Timer){clearTimeout(this.Timer);}
		this.Timer = setTimeout(function(){$(_this).children('span').show();},300);
	})
	$('#help,#taocan').mouseout(function(){
		var _that = this;
		if(this.Timer){clearTimeout(this.Timer);}
		this.Timer = setTimeout(function(){$(_that).children('span').hide();},300);
	})
	
	/*------侧边栏控件------*/
	$('body').append('<div class="cbl"><div id="yuyue"><span></span><div></div></div><div id="qq"><span></span></div><div id="code"><span></span><div></div></div><div id="backtop"><span></span></div></div>');
	$('.cbl').on('click','#qq',function(){
		
	})
	$('.cbl').on('mouseover','#code,#yuyue',function(){
		$(this).children('div').show();
	})
	$('.cbl').on('mouseout','#code,#yuyue',function(){
		$(this).children('div').hide();
	})
	$('.cbl').on('click','#backtop',function(){
		$('html,body').stop().animate({scrollTop:0},500);
	})
	
    $(window).on('scroll',function(){
        var winH = $(window).scrollTop();
        if(winH > 400){
            $('.cbl').css('right','30px');
        }else{
            $('.cbl').css('right','-100px');
        }
        
    });
	/*----注册和登录-------*/
	function loginUI(){
		$('body').append('<div class="mask"></div>');
		$('body').append('<div class="login"><p>登录</p><div><form><span><input type="text" name="usename" placeholder="用户名" /></span><span><input type="password" name="password" placeholder="密码" /></span><div><span><input type="checkbox" name="check" /><em>记住密码</em></span><span class="wj"><a href="#">忘记密码？</a></span></div><input type="button" name="l_btn" value="立即登录" /></form></div><div class="close"></div></div>');
	}
    function regUI(){
		$('body').append('<div class="mask"></div>');
		$('body').append('<div class="usereg"><p>手机注册</p><div><form><span><p>手机号<em></em></p><input type="text"name="tel"placeholder="11位国内手机号码"/></span><span><p>密码<em></em></p><input type="password"name="password1"placeholder="6-12位的数字或字母"/></span><span><p>确认密码<em></em></p><input type="password"name="password2"placeholder="请保持与上面的密码一致"/></span><div id="yanzheng"><span><input type="text"name="yanzheng"placeholder="输入6位验证码"maxlength="6"/></span><input type="button"name="y_btn"value="获取验证码"/></div><input type="button"name="l_btn"value="免费注册"/></form></div><div class="close"></div></div>');
	}
	
	$('.head #login').on('click',function(){
		loginUI();
	})
	$('.head #reg').on('click',function(){
		regUI();
	})
	$('body').on('click','.login .close',function(){
		$('.mask,.login').remove();
	})
	$('body').on('click','.usereg .close',function(){
		$('.mask,.usereg').remove();
		window.clearInterval(time);
	})
    
    
	/*----注册验证----*/
	var a,b,c;
	
	$('body').on('blur','.usereg input[name="tel"]',function(){
		var tel = $('.usereg input[name="tel"]').val();
		if(!/^1\d{10}$/.test(tel)){
			$(this).siblings().children().text('请输入正确的11位手机号码').css('color','#f00');
			a = 0;
		}else{ $(this).siblings().children().text('nice!').css('color','#009944'); a = 1;}
	})
	$('body').on('blur','.usereg input[name="password1"]',function(){
		var password1 = $('.usereg input[name="password1"]').val();
		if(!/^[A-Za-z0-9]{6,12}$/.test(password1)){
			$(this).siblings().children().text('请输入6-12位的数字或字母').css('color','#f00');
			b = 0;
		}else{ $(this).siblings().children().text('nice!').css('color','#009944'); b = 1;}
	})
	$('body').on('blur','.usereg input[name="password2"]',function(){
		var password1 = $('.usereg input[name="password1"]').val();
		var password2 = $('.usereg input[name="password2"]').val();
		if(/^[A-Za-z0-9]{6,12}$/.test(password2) && (password2 == password1)){
			$(this).siblings().children().text('nice!').css('color','#009944'); c = 1;
		}else{ $(this).siblings().children().text('两次密码不一致').css('color','#f00'); c = 0;}
	})
	$('body').on('click','.usereg input[name="l_btn"]',function(){
		if(a*b*c == 1){
			alert('成功');
		}else{ alert('失败');}
	})
	
	$('body').on('click','.usereg input[name="y_btn"]',function(){
		$(this).prop('disabled','true').addClass('yz_disabled');
		$(this).val('59秒后再次发送');
		timing();
	})
	
	function timing(){
		var t = 59;
		var overT = 0;
		time = window.setInterval(function(){
			if(t != overT){
				t --;
				$('.usereg input[name="y_btn"]').val(t+'秒后再次发送');
			}else{
				window.clearInterval(time);
				$('.usereg input[name="y_btn"]').removeAttr('disabled').val('获取验证码').removeClass('yz_disabled');
				}
		},1000);
	}
})	
