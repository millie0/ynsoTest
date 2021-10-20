$(() => {
	const header_import = document.getElementsByClassName('header_import')[0]
	// 引入header
	axios.get('../layout/0.header.html').then(function (res) {
		// 插入html
		header_import.innerHTML = res.data
		// navbar列表切換
		const navbar_li = document.getElementsByClassName('navbar_li')
		for (let i = 0; i < navbar_li.length; i++) {
			navbar_li[i].addEventListener('click', function () {
				for (let j = 0; j < navbar_li.length; j++) {
					navbar_li[j].classList.remove('navbar_li_now')
					this.classList.add('navbar_li_now')
				}
			})
		}
		// header判斷網址顯示目前所在頁面
		const nav_test = document.getElementById('nav_test')
		const nav_member = document.getElementById('nav_member')
		if (window.location.href.indexOf('/member/') !== -1) {
			nav_member.classList.add('navbar_li--now')
		}
		if (window.location.href.indexOf('/test/') !== -1) {
			nav_test.classList.add('navbar_li--now')
		}
		// hamburger點擊展開/關閉
		const hamburger = document.getElementsByClassName('hamburger')[0]
		const header_RWD = document.getElementsByClassName('header_RWD')[0]
		const ham_line = document.getElementsByClassName('ham_line')[0]
		hamburger.addEventListener('click', function () {
			header_RWD.classList.toggle('hidden')
			ham_line.classList.toggle('ham_open')
		})
		window.onresize = function () {
			if (window.matchMedia('(min-width: 550px)').matches) {
				header_RWD.classList.add('hidden')
				ham_line.classList.remove('ham_open')
			}
		}
	})
})
