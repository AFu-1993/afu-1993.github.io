define(['jquery'],function($) {
	var news1=$('.news-content1');
	var news2=$('.news-content2');
	var tag1=$('.news-head-1');
	var tag2=$('.news-head-2');
	var line=$('.news-head-line');
	tag1.mouseenter(function(e) {
		line.css('transform','translateX(0)');
		news1.css('display','block');
		news2.css('display','none');
	});
	tag2.mouseenter(function(e) {
		line.css('transform','translateX(52px)');
		news2.css('display','block');
		news1.css('display','none');
	});
});