$(() => {
	// 會員中心側邊欄切換
	const menu_list = document.getElementsByClassName('menu_list')
	for (let i = 0; i < menu_list.length; i++) {
		menu_list[i].addEventListener('click', function () {
			for (let j = 0; j < menu_list.length; j++) {
				menu_list[j].classList.remove('menu_list--active')
			}
			this.classList.add('menu_list--active')
		})
	}
	// 點擊側邊欄 切換右邊內容
	const member_content = document.getElementsByClassName('member_content')
	const menu_info = document.getElementById('menu_info')
	const menu_record = document.getElementById('menu_record')
	const section_info = document.getElementById('section_info')
	const section_record = document.getElementById('section_record')

	for (let i = 0; i < menu_list.length; i++) {
		menu_list[i].addEventListener('click', function () {
			// 如果會員資料的按鈕有已選擇樣式
			if (menu_info.classList.contains('menu_list--active')) {
				for (let j = 0; j < member_content.length; j++) {
					member_content[j].classList.add('hidden')
				}
				section_info.classList.remove('hidden')
			}
			// 如果考試紀錄的按鈕有已選擇樣式
			if (menu_record.classList.contains('menu_list--active')) {
				for (let j = 0; j < menu_list.length; j++) {
					member_content[j].classList.add('hidden')
				}
				section_record.classList.remove('hidden')
			}
		})
	}
})
