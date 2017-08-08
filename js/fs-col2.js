define(['jquery'],function($) {
	//获得所有滑动li
	var lis=$('.slider-ad li');
	var index=0;
	var timer;
	var prevLi;
	// 所有span
	var adSelect=$('.ad-select span');
	var prevAdselect;
	adSelect.mouseover(adSelectOver);

	// 图片轮播
	function picAgain() {
		if (3==index) {
			index=0;
		}
		if (index==0) {
			$(lis[2]).removeClass('active');
			$(adSelect[2]).removeClass('active');
		}else{
			$(lis[index-1]).removeClass('active');
			$(adSelect[index-1]).removeClass('active');
		}
		prevLi=$(lis[index]);
		$(lis[index]).addClass('active');
		prevAdselect=$(adSelect[index]);
		$(adSelect[index]).addClass('active');
		index++;
		timer=setTimeout(function() {
			picAgain();
		},3000);
	}

	function adSelectOver(e) {
		clearTimeout(timer);
		prevLi.removeClass('active');
		prevAdselect.removeClass('active');
		index=Number($(this).attr('data-index'))-1;
		picAgain();
	}
	picAgain();

});