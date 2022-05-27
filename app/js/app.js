// import '~/app/vendor/mmenu/dist/mmenu.js'
import MicroModal from 'micromodal'

document.addEventListener('DOMContentLoaded', () => {

	const menuBtn = document?.querySelector('.header__menu-burger')
	const menuContent = document?.querySelector('.menu')
	menuBtn.addEventListener('click', function () {
		this.classList.toggle('open')
		menuContent.classList.toggle('show')
	})

	const menuBtnSearch = document?.querySelector('.header__lang')
	const menuSearchContent = document?.querySelector('.lang')
	menuBtnSearch.addEventListener('click', function () {
		this.classList.toggle('open')
		menuSearchContent.classList.toggle('open')
	})

	MicroModal.init({
		awaitOpenAnimation: true,
		awaitCloseAnimation: true
	});

})