$(() => {
	// select設定選定非預設選項的顯示顏色
	$('.select_select,.select_select_time').on('change', function () {
		if ($(this).val() !== 'option_default') {
			console.log($(this).val())
			$(this).css('color', '#4c4e47')
			// $('.select2-container--default .select2-selection--single .select2-selection__rendered').css(
			// 	'color',
			// 	'#4c4e47'
			// )
		}
	})

	// 考試時間
	const select_year = document.getElementById('select_year')
	const select_month = document.getElementById('select_month')
	const select_day = document.getElementById('select_day')

	let nowYear = new Date().getFullYear()
	let html = ''
	let valueYear = nowYear
	let valueMonth = null

	insertYear()
	insertMonth()
	insertDay()
	// 多益考試第一屆1979年 到今年 插入select option
	function insertYear() {
		html = ''
		for (let i = 1979; i <= nowYear; i++) {
			html += `<option value="option_default" hidden>年分</option>`
			html += `<option value="${i}">${i}</option>`
		}
		select_year.innerHTML = html
	}
	// 抓取所選年分
	select_year.addEventListener('change', function () {
		valueYear = select_year.value
		insertDay()
	})
	// 抓取所選月分
	select_month.addEventListener('change', function () {
		valueMonth = select_month.value
		insertDay()
	})

	function insertMonth() {
		html = ''
		for (let i = 1; i <= 12; i++) {
			html += `<option value="option_default" hidden>月分</option>`
			html += `<option value="${i}">${i}</option>`
		}
		select_month.innerHTML = html
	}
	function insertDay() {
		html = ''

		if (valueMonth === '4' || valueMonth === '6' || valueMonth === '9' || valueMonth === '11') {
			for (let i = 1; i <= 30; i++) {
				html += `<option value="option_default" hidden>日期</option>`
				html += `<option value="${i}">${i}</option>`
			}
			select_day.innerHTML = html
		} else if (valueMonth !== '2') {
			for (let i = 1; i <= 31; i++) {
				html += `<option value="option_default" hidden>日期</option>`
				html += `<option value="${i}">${i}</option>`
			}
			select_day.innerHTML = html
		} else {
			console.log('11', valueMonth)
			// 閏年
			if ((valueYear % 4 === 0 && !valueYear % 100 === 0) || valueYear % 400 === 0) {
				for (let i = 1; i <= 29; i++) {
					html += `<option value="option_default" hidden>日期</option>`
					html += `<option value="${i}">${i}</option>`
				}
				select_day.innerHTML = html
				// 平年
			} else {
				for (let i = 1; i <= 28; i++) {
					html += `<option value="option_default" hidden>日期</option>`
					html += `<option value="${i}">${i}</option>`
				}
				select_day.innerHTML = html
			}
		}
	}

	// 選擇考卷.篩選考古題切換

	// $('.btn_switch').on('click', function () {
	// 	if (!$(this).hasClass('btn_switch_active')) {
	// 		$('.btn_switch').removeClass('btn_switch_active')
	// 		$(this).addClass('btn_switch_active')
	// 	}
	// 	// 選擇考卷
	// 	if ($('.btn_switch_test').hasClass('btn_switch_active')) {
	// 		$('#select-test').css('display', 'block')
	// 		$('#filter-test').css('display', 'none')
	// 	}
	// 	// 篩選考古題
	// 	if ($('.btn_switch_filter').hasClass('btn_switch_active')) {
	// 		$('#select-test').css('display', 'none')
	// 		$('#filter-test').css('display', 'block')
	// 	}
	// })
})
