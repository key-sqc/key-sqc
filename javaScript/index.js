// 列表详情页
$(function () {
	// 显示列表页
	$('#menu-button').click(function () {
		$('.menu-wrap').fadeIn('slow');
	});
	// 取消列表页
	$('#close-button').click(function () {
		$('.menu-wrap').fadeOut('slow');
	});

	//  列表点击的模块
	$('.menu-list>a').click(function (e) {
		$('.menu-list>a.active').removeClass('active');
		$(e.target).parent('a').addClass('active');
	});

	//  列表自动滚动
	let home = $('#home')[0].offsetTop;
	let about = $('#about')[0].offsetTop;
	let work = $('#work')[0].offsetTop;
	let services = $('#services')[0].offsetTop;
	let employement = $('#employement')[0].offsetTop;
	let skill = $('#skill')[0].offsetTop;

	$(window).scroll(function () {

		let y = Math.round($(window).scrollTop());

		$('.menu-list>a.active').removeClass('active');

		if (y >= 0 && y <= home) {
			$('.menu-list>a').eq(0).addClass('active');
			return;
		}

		if (y >= home && y <= about) {
			$('.menu-list>a').eq(1).addClass('active');
			return;
		}
		if (y >= about && y <= work) {
			$('.menu-list>a').eq(2).addClass('active');
			return;
		}
		if (y >= work && y <= services) {
			$('.menu-list>a').eq(3).addClass('active');
			return;
		}
		if (y >= services && y <= employement) {
			$('.menu-list>a').eq(4).addClass('active');
			return;
		}
		if (y >= employement && y <= skill) {
			$('.menu-list>a').eq(5).addClass('active');
			return;
		}
		if (y >= skill) {
			$('.menu-list>a').eq(6).addClass('active');
			return;
		}
	});


	// 学习进度
	$(window).on('scroll', to);

	function to() {
		let y = Math.round($(window).scrollTop());

		if (y >= employement && y <= skill) {
			$('.skillst>.skillbar').eq(0).find('.count-bar').animate({
				width: '0%'
			}).animate({
				width: '78%'
			}, 3000);
			$('.skillst>.skillbar').eq(1).find('.count-bar').animate({
				width: '0%'
			}).animate({
				width: '100%'
			}, 3000);
			$('.skillst>.skillbar').eq(2).find('.count-bar').animate({
				width: '0%'
			}).animate({
				width: '88%'
			}, 3000);
			$('.skillst>.skillbar').eq(3).find('.count-bar').animate({
				width: '0%'
			}).animate({
				width: '96%'
			}, 3000);
			$('.skillst>.skillbar').eq(4).find('.count-bar').animate({
				width: '0%'
			}).animate({
				width: '99%'
			}, 3000);

			$(window).off('scroll', to);
		}
	}


	// home模块文字打字机展示
	let text = '大家好，我是M.宋';

	myText('typed', text);
	function myText(end, str) {
		let counter = 0;
		let endDom = document.querySelector(`#${end}`);

		let timer1 = setInterval(() => {
			endDom.innerHTML = str.substring(0, counter++);
			if (str === endDom.innerHTML) {
				clearInterval(timer1);
			}
		}, 200);

	}

});
