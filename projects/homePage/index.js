window.onload = function () {
	//  搜索的问题
	let search = document.querySelector('#search_target');

	document.addEventListener('keydown', keydown);
	
	function keydown(e) {
		
		if (e.keyCode === 13) {

			//  搜索接口 http://www.baidu.com/s?wd=关键字

			window.open(`http://www.baidu.com/s?wd=${search.value}`);

			//  取消事件
			document.removeEventListener('keydown', keydown);
		}
	}
}
