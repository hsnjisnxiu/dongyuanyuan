$(document).ready(function(){


	
	//banner
	$("#banner").bind("mouseover",function(){
		$(".carousel-control").css("display","block");
	});
	$("#banner").bind("mouseout",function(){
		$(".carousel-control").css("display","none");
	});



	//nav
	$("#gywm").bind("mouseover",function(){
		$("ul.logo-inner").css("display","block");
	});
	$("#gywm").bind("mouseout",function(){
		$("ul.logo-inner").css("display","none");
	})



	// 鼠标滑过效果	
	var fw1=$('.fw1');
	var fw2=$('.fw2');
	var fw3=$('.fw3');
	var fw4=$('.fw4');
	fw1.hover(function(){
		$(this).css('border','10px solid #009936');
		$('.btn1').css('background-color','#009936');
	},function(){
		$(this).css('border','10px solid #fff');
		$('.btn1').css('background-color','#898989');
	});
	fw2.hover(function(){
		$(this).css('border','10px solid #009936');
		$('.btn2').css('background-color','#009936');
		$('.text2').css('color','#009936');
	},function(){
		$(this).css('border','10px solid #fff');
		$('.btn2').css('background-color','#898989');
		$('.text2').css('color','#f7ab00');
	});
	fw3.hover(function(){
		$(this).css('border','10px solid #009936');
		$('.btn3').css('background-color','#009936');
		$('.text3').css('color','#009936');
	},function(){
		$(this).css('border','10px solid #fff');
		$('.btn3').css('background-color','#898989');
		$('.text3').css('color','#f7ab00');
	});
	fw4.hover(function(){
		$(this).css('border','10px solid #009936');
		$('.btn4').css('background-color','#009936');
		$('.text4').css('color','#009936');
	},function(){
		$(this).css('border','10px solid #fff');
		$('.btn4').css('background-color','#898989');
		$('.text4').css('color','#f7ab00');
	});



	// 手风琴效果
	var _index7=0;
	$(".cpmlbox .cpml-l li").mouseover(function(){
		_index7=$(this).index();
		$(this).stop().stop().animate({height:380},500).siblings("li").stop().animate({height:96},500);
		$('.cp-text').eq(_index7).css({'display':'block'}).siblings('.cp-text').css({'display':'none'});
		$(".cpml-pic img").eq(_index7).addClass("one").siblings(".cpml-pic img").removeClass("one");
	});


	// 返回顶部
	$('.go').click(function(){
		var x=document.body.scrollTop||document.documentElement.scrollTop;
		var time=setInterval(function(){
          	x=x-80;
          	if(x<100){
          	 	x=0;
          	 	window.scrollTo(x,x);
          	 	clearInterval(time)
          	}
          	window.scrollTo(x,x);
		},10)
	})


})
