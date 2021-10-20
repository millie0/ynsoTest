$(() => {
	// 修改密碼
	const set_pw = document.getElementsByClassName('set_pw')[0]
	const icon_edit = document.getElementsByClassName('icon_edit')[0]
	const memberContent = document.getElementsByClassName('member-content')[0]
	const membeContent_li_pwContent = document.getElementsByClassName('member-content_li_pw')[0]
	const btn = document.getElementsByClassName('btn')
	const modal_finish = document.getElementsByClassName('modal_finish')[0]
	const btn_save = document.getElementById('btn_save')
	const circle = document.getElementsByClassName('circle')[0]

	icon_edit.addEventListener('click', function () {
		set_pw.classList.remove('hidden')
		membeContent_li_pwContent.classList.add('hidden')
		memberContent.classList.add('o-3')
	})
	for (let i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function () {
			set_pw.classList.add('hidden')
			membeContent_li_pwContent.classList.remove('hidden')
			memberContent.classList.remove('o-3')
		})
	}
	btn_save.addEventListener('click', function () {
		// 讓每次完成修改都觸發動畫
		circle.classList.add('ani_stroke')
		modal_finish.classList.remove('hidden')
		setTimeout(function () {
			circle.classList.remove('ani_stroke')
			modal_finish.classList.add('hidden')
		}, 1500)
	})
})
