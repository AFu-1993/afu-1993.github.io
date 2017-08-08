define(['jquery'],function($) {
	var searchBox=$('#search input');
	var index=0;
	var arr=['产品一','产品二','商品三','手机四','电器五'];
	var searchBoxSTO;
	function searchBoxShow(num) {
		// searchBox.css('color','#666');
		searchBox[0].value=arr[num];
		index++;
		if(index===5){
			index=0;
		}
		searchBoxSTO=setTimeout(function() {
			searchBoxShow(index);
		},2000);
	}
	// 在这里有个问题：当通过jQuery的attr方法改变input的value值，input失去焦点后无法显示value。
	// 所以，我使用了原生的 ele.value方法来解决
	function searchBoxFocus() {
		window.clearTimeout(searchBoxSTO);
		searchBox[0].value='';
		searchBox.css('color','#515151');
	}
	function searchBoxBlur() {
		searchBox.css('color','#666');
		searchBoxShow(index);
	}
	function init() {
		searchBox.css('color','#666');
		searchBoxShow(index);
		searchBox.focus(searchBoxFocus);
		searchBox.blur(searchBoxBlur);
	}
	init();
});