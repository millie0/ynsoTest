$(() => {
	const header_test = document.getElementsByClassName('header_test')[0]
	// 引入header
	axios.get('../../layout/0.header_test.html').then(function (res) {
		header_test.innerHTML = res.data
	})
})
