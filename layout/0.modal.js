$(() => {
	const modal_import = document.getElementsByClassName('modal_import')[0]
	// 引入modal
	axios.get('../layout/0.modal.html').then(function (res) {
		modal_import.innerHTML = res.data

		// 點擊按鈕關閉跳窗
		const btn_modal = document.getElementsByClassName('btn_modal')
		const modal_info = document.getElementsByClassName('modal_info')
		const bg_mask = document.getElementsByClassName('bg_mask')
		for (let i = 0; i < btn_modal.length; i++) {
			btn_modal[i].addEventListener('click', function () {
				modal_info[i].classList.add('hidden')
			})
		}
		// 點擊視窗外關閉跳窗
		window.addEventListener('click', function (e) {
			for (let i = 0; i < bg_mask.length; i++) {
				if (e.target === bg_mask[i]) {
					modal_info[i].classList.add('hidden')
				}
			}
		})
		// 點擊icon彈出跳窗
		const icon_test_info = document.getElementById('icon_test_info')
		const icon_test_quit = document.getElementById('icon_test_quit')
		const modal_test_info = document.getElementById('modal_test_info')
		const modal_test_quit = document.getElementById('modal_test_quit')

		icon_test_info.addEventListener('click', function () {
			modal_test_info.classList.remove('hidden')
		})
		icon_test_quit.addEventListener('click', function () {
			modal_test_quit.classList.remove('hidden')
		})
	})
})
