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
		let icos = document.querySelectorAll('nav ul li');

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

	// 待办事项
	(() => {
		let btn = document.querySelectorAll('button');
		let dom = document.querySelector('.daiban');
		let addP = dom.querySelector('.addP');

		btn[0].addEventListener('click', addMatter);

		// 点击D按键添加待办事项的功能
		// document.addEventListener('keydown', function(e) {
		// 	if (e.keyCode === 68) {
		// 		addMatter();
		// 	}
		// });

		function addMatter() {
			var person = prompt("请输入你的事情呀~~");
			if (person != null && person != "") {
				let p = document.createElement('p');
				// 添加数据的key
				p.count = Math.random().toString().replace('.', '');

				// 初始添加click初始类
				p.classList.add('click');

				// 添加数据
				// localStorage.setItem(p.count, person);
				Cookies.set(p.count, person, { path: '/'});

				// 将localStorage 中的内容填充进p标签中
				// let getItem = localStorage.getItem(p.count);
				let getItem = Cookies.get(p.count);
				p.innerHTML = getItem;

				addP.appendChild(p);

				let ps = dom.querySelectorAll('p');
				addCount(ps);
			}
		};

		// 此按钮只能添加一个全清除
		btn[1].addEventListener('click', clearLocalSto);

		function clearLocalSto() {
			addP.innerHTML = ' ';
			// localStorage.clear();
			let target = Cookies.get();
			for (const key in target) {

				Cookies.remove(key, { path: '' });
			}
		}

		function addCount(ps) {
			for (let i = 0; i < ps.length; i++) {
				ps[i].target = false;
				ps[i].onclick = function () {
					if (!this.target) {
						// 删除
						// localStorage.removeItem(this.count);
						Cookies.remove(this.count, { path: '/' });
						this.classList.remove('click');
						this.classList.add('remove');
						this.target = true;
					} else {
						this.target = false;
					}
				};
			}
		}
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
