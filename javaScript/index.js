// 列表详情页
$(function () {
	// 显示列表页
	$('#menu-button').click(function () {
		$($(this).siblings('.menu-wrap')[0]).fadeIn('slow');
	});
	// 取消列表页
	$('#close-button').click(function () {
		$(this).parent().fadeOut('slow');
	});
});
