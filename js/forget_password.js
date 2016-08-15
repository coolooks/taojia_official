$(function(){
    $('#taocan').mouseover(function(){
		var _this = this;
		if(this.Timer){clearTimeout(this.Timer);}
		this.Timer = setTimeout(function(){$(_this).children('span').show();},300);
	})
	$('#taocan').mouseout(function(){
		var _that = this;
		if(this.Timer){clearTimeout(this.Timer);}
		this.Timer = setTimeout(function(){$(_that).children('span').hide();},300);
	})
    
    /*----发送到手机------*/
    $('.wrap1 > .w_btn > span > a').on('click',function(){
       var phone = $('.w_phone input').val();
       if(!/^1\d{10}$/.test(phone)){
            alert('手机号码错误！');return;
       }else{
           $('.wrap2').show();
           $('.wrap1').remove();
           timing();
       }
    })
    /*------密码验证-------*/
    var a,b;
    $('.contain').on('blur','.pass1 input',function(){
    var password1 = $('.pass1 input').val();
    if(!/^[A-Za-z0-9]{6,12}$/.test(password1)){
        $(this).parent().siblings('em').text('请输入6-12位的数字或字母').css('color','#f00');;
        a = 0;
		}else{ $(this).parent().siblings('em').text('nice!').css('color','#009944'); a = 1;}
	})
    $('.contain').on('blur','.pass2 input',function(){
		var password1 = $('.pass1 input').val();
		var password2 = $('.pass2 input').val();
		if(/^[A-Za-z0-9]{6,12}$/.test(password2) && (password2 == password1)){
			$(this).parent().siblings('em').text('nice!').css('color','#009944'); b = 1;
		}else{ $(this).parent().siblings('em').text('两次密码不一致').css('color','#f00'); b = 0;}
	})
	$('.contain').on('click','.wrap2 .w_btn a',function(){
		if(a*b == 1){
			alert('成功');
		}else{ alert('失败');}
	})
})


function timing(){
		var t = 59;
		var overT = 1;
		time = window.setInterval(function(){
			if(t != overT){
				t = t - 1;
				$('.w_dx .w_dx_btn > input').val(t+'秒后再次发送');
			}else{
				window.clearInterval(time);
				$('.w_dx .w_dx_btn > input').removeAttr('disabled').val('发送到手机').css('background','#ffe537');
				}
		},1000);
	}