$(() => {
	// 登入註冊切換
	const switch_signup = document.getElementsByClassName('switch_signup')
	const switch_login = document.getElementsByClassName('switch_login')
	const loginSignupBg = document.getElementsByClassName('login-signup_bg')[0]
	const loginBgTest = document.getElementsByClassName('login_bg_test')[0]
	const login_section = document.getElementsByClassName('login_section')[0]
	const signup_section = document.getElementsByClassName('signup_section')[0]
	const forgetpw_section = document.getElementsByClassName('forgetpw_section')[0]
	const forget = document.getElementsByClassName('forget')[0]

	//發送密碼信
	const send_changePs = document.getElementById('send_change-ps')
	const count_num = document.getElementsByClassName('count_num')[0]
	const resent_wrap = document.getElementsByClassName('resent_wrap')[0]

	// 視窗縮放
	window.onresize = function () {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			console.log('resize>1024')
			// 如果在註冊區
			if (!signup_section.classList.contains('d-none')) {
				// 位置移動到左邊
				loginSignupBg.style.marginRight = 'calc(100vw - 660px)'
			}
			switch_signupClick()
			switch_loginClick()
			// 如果在登入.忘記密碼
		} else {
			console.log('resize<1024')
			// 位置移動到右邊
			loginSignupBg.style.marginRight = '0'
			switch_signup1024()
			switch_login1024()
		}
	}
	// RWD <1024
	if (window.matchMedia('(min-width: 1024px)').matches) {
		// console.log('>1024')
		switch_signupClick()
		switch_loginClick()
	} else {
		// console.log('<1024')
		switch_signup1024()
		switch_login1024()
	}
	// 註冊成功確認後
	const signup_fin = document.getElementById('signup_fin')
	const modal_signup_fin = document.getElementById('modal_signup_fin')
	const btn_signup = document.getElementById('btn_signup')
	btn_signup.addEventListener('click', () => {
		modal_signup_fin.classList.remove('hidden')
	})
	signup_fin.addEventListener('click', () => {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			signupToLogin()
		} else {
			signupToLogin1024()
		}
		modal_signup_fin.classList.add('hidden')
	})
	// 點擊註冊前往註冊 window>1024
	// function loginToSignup() {
	function switch_signupClick() {
		for (let i = 0; i < switch_signup.length; i++) {
			switch_signup[i].addEventListener('click', function () {
				// 切換到註冊 window>1024
				loginToSignup()
			})
		}
	}
	function loginToSignup() {
		// 點擊註冊按鈕 區塊移動到左邊 距離左邊140px
		loginSignupBg.style.marginRight = 'calc(100vw - 660px)'
		// 更換成註冊背景圖
		loginBgTest.src = '../img/toeic_signup_final.jpg'
		// 更換成註冊表單內容
		login_section.classList.add('d-none')
		forgetpw_section.classList.add('d-none')
		signup_section.classList.remove('d-none')
	}
	// 前往登入 window>1024
	// function signupToLogin() {
	function switch_loginClick() {
		for (let i = 0; i < switch_login.length; i++) {
			switch_login[i].addEventListener('click', function () {
				signupToLogin()
			})
		}
	}
	function signupToLogin() {
		loginSignupBg.style.marginRight = '0'
		loginBgTest.src = '../img/toeic_login_final.jpg'
		signup_section.classList.add('d-none')
		forgetpw_section.classList.add('d-none')
		login_section.classList.remove('d-none')
	}
	// 忘記密碼=>登入
	// function forgetToLogin() {
	// 	switch_login.addEventListener('click', function () {
	// 		// 如果在忘記密碼
	// 		if (!forgerpw_section.classList.contains('d-none')) {
	// 			signup_section.classList.add('d-none')
	// 			forgerpw_section.classList.add('d-none')
	// 			login_section.classList.remove('d-none')
	// 		}
	// 	})
	// }
	// 點擊註冊前往註冊 window<1024
	// function loginToSignup1024() {
	function switch_signup1024() {
		for (let i = 0; i < switch_signup.length; i++) {
			switch_signup[i].addEventListener('click', function () {
				// 前往註冊 window<1024
				loginToSignup1024()
			})
		}
	}
	function loginToSignup1024() {
		loginSignupBg.style.marginRight = '0'
		loginBgTest.src = '../img/toeic_signup_final.jpg'
		login_section.classList.add('d-none')
		forgetpw_section.classList.add('d-none')
		signup_section.classList.remove('d-none')
	}
	// 點擊登入前往登入 window<1024
	// function signupToLogin1024() {
	function switch_login1024() {
		for (let i = 0; i < switch_login.length; i++) {
			switch_login[i].addEventListener('click', function () {
				// 前往登入 window<1024
				signupToLogin1024()
			})
		}
	}
	// 前往登入 window<1024
	function signupToLogin1024() {
		loginSignupBg.style.marginRight = '0'
		loginBgTest.src = '../img/toeic_login_final.jpg'
		signup_section.classList.add('d-none')
		forgetpw_section.classList.add('d-none')
		login_section.classList.remove('d-none')
	}
	// 忘記密碼
	forget.addEventListener('click', function () {
		forgetpw_section.classList.remove('d-none')
		signup_section.classList.add('d-none')
		login_section.classList.add('d-none')
	})

	// jq寫法
	// $('.icon_eye').on('click', function () {
	// 	if ($(this).hasClass('icon_eye_open')) {
	// 		$(this).removeClass('icon_eye_open')
	// 		$(this).attr('src', '../icon/eye-close.svg')
	// 		$(this).siblings('input').attr('type', 'password')
	// 	} else {
	// 		$(this).addClass('icon_eye_open')
	// 		$(this).attr('src', '../icon/eye.svg')
	// 		$(this).siblings('input').attr('type', 'text')
	// 	}
	// })

	// 點擊發送修改密碼信後 倒數60秒 可重新發送密碼修改信
	let oneMinLater = 60
	let canSent = true
	// 點擊發送密碼修改信-btn_pri => btn_disabled
	send_changePs.addEventListener('click', function () {
		send_changePs.classList.remove('btn_pri')
		send_changePs.classList.add('btn_disabled')
		resent_wrap.classList.remove('hidden')
		// 如果可以寄送，點擊後將變數canSent改成不可寄送
		if (canSent === true) {
			canSent = false
			oneMinLater = 60

			count_num.innerText = oneMinLater
			setInterval(function () {
				oneMinLater -= 1
				count_num.innerText = oneMinLater

				if (oneMinLater === 0) {
					canSent = true
					send_changePs.classList.add('btn_pri')
					send_changePs.classList.remove('btn_disabled')
					resent_wrap.classList.add('hidden')
				}
			}, 1000)
		}
	})
})
