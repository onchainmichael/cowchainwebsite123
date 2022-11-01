
const teamSlider = new Swiper('.team__slider', {
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false
	// },
	speed: 500,
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: false,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
	spaceBetween: 20,
	pagination: {
		el: '.team__pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.team__button_next',
		prevEl: '.team__button_prev',
	}
});

const reviwSlider = new Swiper('.review__slider', {
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false
	// },
	speed: 500,
	effect: 'coverflow',
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
	spaceBetween: 20,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 40,
		modifier: 1,
		scale: 0.95,
		slideShadows: false,
	},
	pagination: {
		el: '.review__pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.review__button_next',
		prevEl: '.review__button_prev',
	}
});

let header = document.querySelector('.header');
let headerBurger = document.querySelector('.header__burger');
const HEADER_ACTIVE = 'header_active';

headerBurger.addEventListener('click', () => {
	if (header.classList.contains(HEADER_ACTIVE)) {
		header.classList.remove(HEADER_ACTIVE);
		document.documentElement.style.overflow = 'visible';
	} else {
		header.classList.add(HEADER_ACTIVE);
		document.documentElement.style.overflow = 'hidden';
	}
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		header.classList.remove(HEADER_ACTIVE);
		document.documentElement.style.overflow = 'visible';
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})
	})
}

let request = document.querySelector('.request');
const REQUEST_ACTIVE = 'request_active';

document.getElementById('request').addEventListener('click', () => {
	header.classList.remove(HEADER_ACTIVE);
	request.classList.add(REQUEST_ACTIVE);
	document.querySelector('.request__input').focus();
})

document.querySelector('.request__img').addEventListener('click', () => {
	document.documentElement.style.overflow = 'visible';
	request.classList.remove(REQUEST_ACTIVE);
})


document.querySelectorAll('.contact__img_copy').forEach(el => {
	el.addEventListener('click', () => {
		let email = el.previousElementSibling;
		email.parentElement.classList.add('contact__item_copied');
		navigator.clipboard.writeText(email.innerText);
	})
});