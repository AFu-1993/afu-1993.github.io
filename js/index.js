requirejs.config({
	baseUrl:'js',
	paths:{
		'jquery':[
					'lib/jquery','http://libs.baidu.com/jquery/1.9.1/jquery.min'
					] ,

		'bootstrap':'lib/bootstrap/js/bootstrap'
		},
	shim:{
		'bootstrap':{
			deps:['jquery']
		}
	}
	
});

require(['jquery'],function($) {
	$(document).ready(function() {
		//关闭顶部广告
		$('#ad span').click(function(e) {
			$('#ad').slideUp(500);
		});
		//
		require(['nav']);
		require(['header']);
		require(['fs-col1']);
		require(['fs-col2']);
		require(['fs-col3']);

	});

});

