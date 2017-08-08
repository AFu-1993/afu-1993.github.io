requirejs.config({
	baseUrl:'js',
	paths:{
		'jquery':[
					'lib/jquery','http://libs.baidu.com/jquery/1.9.1/jquery.min'
					] ,

		'j-mousewheel':'lib/jquery.mousewheel'
		},
	shim:{
		'j-mousewheel':{
			deps:['jquery']
		}
	}
	
});

require(['jquery','j-mousewheel'],function($) {
	$(document).ready(function() {
		var main=$("#main");
		// 动画持续时间
		var during=1000; 
		// 加入延迟
		var delay=false;
		// 改变li的状态
		var index=1;
		var lis=$('.nav-bottom li');
		var ul=$('.nav-bottom ul');
		var ulSign=$('#nav-silder');

		// 能力
		var nenglibars=$('.youshi-r li');

		main.mousewheel(mouseWheel);

		function changeUlState(direct) {
			var topNow=Number(ulSign.css('top').replace('px',''));
			if (30===topNow&&direct>0) {
				return;
			}
			if (150===topNow&&direct<0) {
				return;
			}
			if (direct<0) {
				ulSign.animate({
				top:topNow+60
				// transform:'translateY(60px)';
				},during);
				
				$(lis[index-1]).removeClass('selected');
				$(lis[index]).addClass('selected');
				index++;
				
				
			}else{
				ulSign.animate({
				top:topNow-60
				// transform:'translateY(60px)';
				},during);
				
				$(lis[index-1]).removeClass('selected');
				$(lis[index-2]).addClass('selected');
				index--;
				
			}
			if (2===index) {
				setTimeout(function() {
					nengli();
				},during);
			}else{
				setTimeout(function() {
					for (var i = nenglibars.length - 1; i >= 0; i--) {
						(function(i){
						$(nenglibars[i]).css('width','1px');
						})(i);
					}
				},during);
			}
		}
		function nengli() {
			$(nenglibars[0]).animate({
				width:200
			},during);
			$(nenglibars[1]).animate({
				width:150
			},during);
			$(nenglibars[2]).animate({
				width:120
			},during);
		}
		function mouseWheel(e) {
			e.preventDefault();
			if (delay) {
				return;
			}
			var mainHeight=$(this).height();
			
			var direct=e.deltaY;
			// var index=Number(sonDiv.attr('data-index'));
			if(direct<0){
				// 向下
				main.animate({scrollTop:mainHeight+main.scrollTop()},during);
			}else{
				// 向上
				main.animate({scrollTop:main.scrollTop()-mainHeight},during);
			}
			changeUlState(direct);
			delay=true;
			setTimeout(function() {
				delay=false;
			},during);
		}

	});

});