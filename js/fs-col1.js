// 主菜单区

define(['jquery'],function($) {
	// 一级菜单menu
	var menu=$('.menu');
	// 一级菜单li
	var lis=menu.children('li');
	// 二级菜单容器
	var pop=$('.cate-pop');
	var cate=$('.cate');
	var li,liIndex,popItem;
	var prevPopItem;
	// 引入延迟 防止划过其他li元素时，二级菜单改变
	var needDelay=false;
	var time;
	var mouseStart;
		// ************************************
	var mousePosition=[{x:0,y:0},{x:0,y:0}];
	var topLeft;
	var bottomLeft;

	lis.mouseenter(showPopItem);
	cate.mouseleave(cateLeave);
	pop.mouseenter(entenPop);
	// 解决延迟带来的问题

	menu.mouseenter(function(e) {
		needDelay=false;

		$(document).mousemove(mouseMove);
	});
	menu.mouseleave(function(e) {
		$(document).unbind("mousemove");
	});

	function mouseMove(e) {
		mousePosition.push({
			x:e.pageX,
			y:e.pageY
		});

		if (mousePosition.length>3) {
			mousePosition.shift();
		}

	}

	function ifNeedDelay(mouseLast,mouseNow,itemTL,itemBL) {
		var a=mouseLast;
		var b=itemTL;
		var c=itemBL;
		var p=mouseNow;
		
		var pb=vector(p,b);
		var pc=vector(p,c);
		var pa=vector(p,a);
		var product1=vectorProduct(pa,pb);
		var product2=vectorProduct(pb,pc);
		var product3=vectorProduct(pc,pa);

		var result=sameSign(product1,product2)&&sameSign(product2,product3);
		needDelay=result;
		// console.log(product1);
		// console.log(product2);
		// console.log(product3);

		// console.log(result);
		// console.log(a);
		// console.log(b);
		// console.log(c);
		// console.log(p);

		
	}

	function vector(a,b) {
		console.log(b);
		return {
			x:b.x-a.x,
			y:b.y-a.y
		};
	}

	function sameSign(a,b) {
		return (a^b)>=0;
	}
	function vectorProduct(v1,v2){
		return v1.x*v2.y-v2.x*v1.y;
	}


	// ***********************************
	

	function cateLeave(e) {
		if (popItem) {
			popItem.css('display','none');
		}
		pop.css('display','none');
		$(document).unbind('mousemove');
		lastLi=null;
	}
	function entenPop() {
		clearTimeout(time);
		$(document).unbind();
	}
	function showPopItem(e) {
		clearTimeout(time);
		if (popItem&&popItem.css('display')==='block') {
			ifNeedDelay(mousePosition[mousePosition.length-2],mousePosition[mousePosition.length-1],topLeft,bottomLeft);
		}
		var that=this;
		if (needDelay) {
			time=setTimeout(function() {
				showPopItem2(that);
			},500);

		}else{
			showPopItem2(that);
		}	
	}
	function showPopItem2(ele) {
		pop.css('display','block');
		if (popItem!==undefined) {
			popItem.css('display','none');
		}
		// 单个li
		li=$(ele);
		liIndex=li.attr('data-index');
		popItem=$('#cate_item'+liIndex);
		popItem.css('display','block');	
		var offset=popItem.offset();
		topLeft={
			x:offset.left,
			y:offset.top
		};
		bottomLeft={
			x:offset.left,
			y:offset.top+popItem.height()
		};
	}

	

	

});