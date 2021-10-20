$(() => {
	const funcBar = document.getElementsByClassName('func-bar')[0]
	const funcBar_import = document.getElementsByClassName('func-bar_import')[0]

	// 引入上排功能列
	axios.get('../../layout/0.test_func_top.html').then(function (res) {
		funcBar.innerHTML = res.data

		// 功能列展開收合
		const icon_setting = document.getElementsByClassName('icon_setting')[0]
		const func_group = document.getElementsByClassName('func_group')[0]
		icon_setting.addEventListener('click', function () {
			func_group.classList.toggle('d-none')
		})

		// 字體大小調整 ------------------------------------------------------
		const body = document.getElementsByTagName('body')[0]
		const icon_minus = document.getElementById('icon_minus')
		const icon_plus = document.getElementById('icon_plus')

		let fontSize = 18
		let fontSizeSet = ''
		icon_plus.addEventListener('click', function () {
			fontSize += 2
			if (fontSize > 22) fontSize = 22
			fontSizeSet = fontSize + 'px'
			body.style.fontSize = fontSizeSet
			// !important
			body.style.setProperty('font-size', fontSizeSet, 'important')
		})
		icon_minus.addEventListener('click', function () {
			fontSize -= 2
			if (fontSize < 14) fontSize = 14
			fontSizeSet = fontSize + 'px'
			body.style.fontSize = fontSizeSet
			body.style.setProperty('font-size', fontSizeSet, 'important')
		})
	})

	// 引入下排功能列
	axios.get('../../layout/0.test_func_bottom.html').then(function (res) {
		funcBar_import.innerHTML = res.data
		const part_q = document.getElementsByClassName('part_q')
		const test_list = document.getElementsByClassName('test_list')[0]
		const btn_test_list = document.getElementById('btn_test_list')
		const content_wrap_test = document.getElementsByClassName('content_wrap_test')[0]

		btn_test_list.addEventListener('click', function () {
			// 點擊題目總覽外區域，關閉題目總覽
			test_list.classList.toggle('d-none')
			test_list.classList.toggle('p-e-none')
			// 增加區塊底部高度，避免被向上展開的題目列表遮住
			content_wrap_test.classList.toggle('content_wrap_longer')
		})
		window.addEventListener('click', function (e) {
			if (
				// 如果題目總覽是打開的
				!test_list.classList.contains('d-none') &&
				// 且點擊範圍不是題目總覽的按鈕跟題目總覽視窗，及他們的子元素
				!$('#btn_test_list').is(e.target) &&
				$('#btn_test_list').has(e.target).length === 0 &&
				!$('.test_list').is(e.target) &&
				$('.test_list').has(e.target).length === 0
			) {
				test_list.classList.add('d-none')
				test_list.classList.add('p-e-none')
				content_wrap_test.classList.remove('content_wrap_longer')
			}
		})
		for (let i = 0; i < part_q.length; i++) {
			part_q[i].addEventListener('click', function () {
				for (let j = 0; j < part_q.length; j++) {
					part_q[j].classList.remove('part_q_now')
				}
				this.classList.add('part_q_now')
			})
		}
	})

	// 選項點擊切換選擇樣式
	$('.option').on('click', function () {
		// 如果點擊的是已選選項 則取消選取
		if ($(this).hasClass('option--select')) {
			$(this).removeClass('option--select')
			// 如果點擊非選取選項，則換選取
		} else {
			$(this).siblings('.option').removeClass('option--select')
			$(this).addClass('option--select')
		}
	})
	// 考試時間 計時器 參考前人))))))))))))))))))))))))))

	let examNowTime = Date.parse(`2021/01/01 ${$('#time-count').text()}`)

	showTime()
	function showTime() {
		let NowDate = new Date(examNowTime)
		let hour = AutoZero(NowDate.getHours())
		let minute = AutoZero(NowDate.getMinutes())
		let second = AutoZero(NowDate.getSeconds())

		$('.time-text').text(`${hour} : ${minute} : ${second}`)

		setTimeout(RunTime, 1000)
	}

	// 自動補零
	function AutoZero(parameter) {
		return parameter.toString().length < 2 ? `0${parameter}` : parameter
	}
	// 每秒+1
	function RunTime() {
		examNowTime += 1000
		showTime()
	}

	// 考試時間 計時器 參考前人))))))))))))))))))))))))))
})
