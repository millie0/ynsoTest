$(() => {
	const testing_wrap = document.getElementsByClassName('testing_wrap')[0]
	// 加入題目
	// 總題數 共x題
	const x = 20
	// 一排放y題
	const y = 8
	// 題號 從第min_index題開始
	const min_index = 7
	const max_index = min_index + x - 1

	let html = ''

	if (window.matchMedia('(min-width: 850px)').matches) {
		// 如果總題數在一排以內 或超過三排
		if (x <= y || x > y * 3) {
			single_roll()
		}
		// 如果總題數超過一排 在兩排以內
		else if (x > y && x <= y * 2) {
			double_roll()
		}
		// 如果總題數超過兩排 在三排以內
		else if (x > y * 2 && x <= y * 3) {
			triple_roll()
		}
	} else if (window.matchMedia('(min-width: 550px)').matches) {
		if (x <= y || x > y * 3) {
			single_roll()
		}
		// 如果總題數超過一排 在兩排以內
		else if (x > y && x <= y * 2) {
			double_roll()
		}
		// 如果總題數超過兩排 在三排以內
		else if (x > y * 2 && x <= y * 3) {
			double_roll_RWD()
		}
	} else {
		single_roll()
	}

	window.onresize = function () {
		if (window.matchMedia('(min-width: 850px)').matches) {
			if (x <= y || x > y * 3) {
				single_roll()
			} else if (x > y && x <= y * 2) {
				double_roll()
			} else if (x > y * 2 && x <= y * 3) {
				triple_roll()
			}
		} else if (window.matchMedia('(min-width: 550px)').matches) {
			if (x <= y || x > y * 3) {
				single_roll()
			} else if (x > y && x <= y * 2) {
				double_roll()
			} else if (x > y * 2 && x <= y * 3) {
				double_roll_RWD()
			}
		} else {
			single_roll()
		}
	}
	function single_roll() {
		html += `<div class="question-roll">`
		for (let i = min_index; i <= max_index; i++) {
			html += `<div class="question_group_empty d-flex">
            <div class="question_index">${i}.</div>
            <div class="option_group d-flex">
                <div class="option">(A)</div>
                <div class="option">(B)</div>
                <div class="option">(C)</div>
            </div>
        </div>`
		}
		html += `  </div>`
		testing_wrap.innerHTML = html
	}
	function double_roll() {
		html += `<div class="question-roll">`
		// 加入第1排
		for (let i = min_index; i < min_index + y; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div><div class="question-roll">`
		// 加入第2排
		for (let i = min_index + y; i <= max_index; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div>`
		testing_wrap.innerHTML = html
	}
	function triple_roll() {
		html += `<div class="question-roll">`
		// 加入第1排
		for (let i = min_index; i < min_index + y; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div><div class="question-roll">`
		// 加入第2排
		for (let i = min_index + y; i < min_index + y * 2; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div><div class="question-roll">`
		// 加入第3排
		for (let i = min_index + y * 2; i <= max_index; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div>`
		testing_wrap.innerHTML = html
	}
	// 總題數大於2排 小於等於3排 排成兩排
	function double_roll_RWD() {
		console.log('2排RWD')
		html += `<div class="question-roll">`
		// 加入第1排
		for (let i = min_index; i < min_index + y * 2; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div><div class="question-roll">`
		// 加入第2排
		for (let i = min_index + y * 2; i <= max_index; i++) {
			html += `<div class="question_group_empty d-flex">
                    <div class="question_index">${i}.</div>
                    <div class="option_group d-flex">
                        <div class="option">(A)</div>
                        <div class="option">(B)</div>
                        <div class="option">(C)</div>
                    </div>
                </div>`
		}
		html += `</div>`
		testing_wrap.innerHTML = html
	}
})
