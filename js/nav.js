// 顶部广告区
define(['jquery'],function($) {
	var key=$('#nav .fl-d2 .selected');
	var city=$('.fl-d1 span');
	$('#nav .fl-d2 ').click(function(e) {
			var target=$(e.target);
			// 如果事件目标不是item就返回
			if('A'!==target[0].tagName){
				return ;
			}
			key.removeClass('selected');
			target.addClass('selected');
			city.text(target.text());
			key=target;
	});
	

	return ;
});