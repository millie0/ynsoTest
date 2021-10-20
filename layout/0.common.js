$(() => {
	// checkbox
	$('.checkbox_label').on('click', function () {
		$(this).parent().attr('checked')
		$(this).toggleClass('checked')
		console.log($(this).siblings('input[type="checkbox"]').attr('type'))
		$(this).siblings('input[type="checkbox"]').attr('checked', '')
	})
	// 密碼眼睛
	const icon_eye = document.getElementsByClassName('icon_eye')
	const input_password = document.getElementsByClassName('input_password')
	// 輸入密碼 眼睛切換可視 js謝法
	for (let i = 0; i < icon_eye.length; i++) {
		icon_eye[i].addEventListener('click', function () {
			if (this.classList.contains('icon_eye_open')) {
				this.classList.remove('icon_eye_open')
				this.src = '../icon/eye-close.svg'
				input_password[i].type = 'password'
			} else {
				this.classList.add('icon_eye_open')
				this.src = '../icon/eye.svg'
				input_password[i].type = 'text'
			}
		})
	}
})
