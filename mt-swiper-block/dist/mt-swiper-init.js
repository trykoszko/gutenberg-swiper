if (window.Swiper === undefined || Swiper === undefined) {
	console.error('MT Swiper Block error: Swiper is defined')
} else {
	const initSwipers = () => {
		const swiperClass = '.js-mt-swiper-block'
		if (document.querySelectorAll(swiperClass)) {
			const sliders = document.querySelectorAll(swiperClass)
			Array.from(sliders).forEach((slider, index) => {
				const mtSwiperBlock = new Swiper(sliders[index], {
					loop: false,
					autoplay: true,
					observer: true,
					observeSlideChildren: true
				})
			})
		}
	}

	window.onload = () => {
		initSwipers()
	}
}
