window.onload = function () {
	//  搜索的问题
	(() => {
		let search = document.querySelector('#search_target');

		document.addEventListener('keydown', keydown);

		function keydown(e) {

			if (e.keyCode === 13) {

				//  搜索接口 http://www.baidu.com/s?wd=关键字

				window.open(`http://www.baidu.com/s?wd=${search.value}`);

				// 清除输入框
				search.value = ' ';
			}
		}
	})();

	// 图标加载
	(() => {
		let icos = document.querySelectorAll('nav>ul>li');

		icos.forEach(value => {
			let Dom = value.children;
			let reg = /^[http:\/\/|https:\/\/]{1}\D{1,}\/$/;
			let ico = Dom[0].attributes[0].value;
			if (reg.test(ico)) {

				ico += 'favicon.ico';
				Dom[0].style.backgroundImage = `url(${ico})`;

			}
		});
	})();


	// 切换二次元壁纸
	(() => {
		let target = document.querySelector('.target');
		target.onclick = () => {
			document.querySelector('.bg').children[0].setAttribute('src', 'https://www.qqlykm.cn/api/ACG/api.php');
			return false;
		};
	})();


};
