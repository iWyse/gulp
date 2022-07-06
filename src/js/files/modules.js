export const flsModules = {}

//========================================================================================================================================================
//Счетчик лайков
// function countLiked() {
// 	const saveCount = document.querySelector('.like-counter');
// 	let countLikes = 0;
// 	const likeButton = document.querySelectorAll('.go-like').forEach(function (likeButton) {
// 		likeButton.addEventListener("click", function () {
// 			likeButton.classList.toggle('like-active');
// 			if (likeButton.classList.contains('like-active')) {
// 				countLikes += 1;
// 			}
// 			else {
// 				countLikes -= 1;
// 			}
// 			saveCount.innerHTML = countLikes;
// 			if (countLikes === 0) {
// 				document.querySelector('.header-action__like').style.display = "none";
// 			} else {
// 				document.querySelector('.header-action__like').style.display = "block";

// 			}
// 		});
// 	});
// }
// countLiked();
//========================================================================================================================================================
//========================================================================================================================================================
//Загрузка счетчика
// let isCounted = false;
// const scrollImations = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		// анимируем, если элемент целиком попадает в отслеживаемую область
// 		if (isCounted === false) {
// 			if (entry.isIntersecting && entry.intersectionRatio == 1) {
// 				const counters = document.querySelectorAll('.counter');
// 				counters.forEach((counter) => {
// 					counter.innerText = '1';
// 					const updateCounter = () => {
// 						isCounted = true;
// 						const target = +counter.getAttribute('data-target');
// 						const c = +counter.innerText;
// 						const increment = target / 250;
// 						if (c < target && !counter.classList.contains('ready-count')) {
// 							counter.innerText = `${Math.ceil(c + increment)}`;
// 							setTimeout(updateCounter, 1);
// 						} else {
// 							counter.innerText = target;
// 						}
// 					};
// 					updateCounter();
// 				})
// 			} else {
// 				return
// 			}
// 		}
// 	});
// }
// const options = {
// 	threshold: 1.0,
// };
// const observer = new IntersectionObserver(scrollImations, options);
// const vision = document.querySelectorAll('.counter');
// vision.forEach((counter) => {
// 	observer.observe(counter);
// });
//========================================================================================================================================================
//popup youtube
// const video = document.querySelector('.video'); // Инициализация блока видео
// const src = video.dataset.src; // подгружение ссылки по событию

// const openEls = document.querySelectorAll("[data-open]"); //кнопка открытия попапа
// const closeEls = document.querySelectorAll("[data-close]"); //кнопка закрытия попапа

// const isVisible = "is-visible"; // попап активен

// //Создание фрейма по клику
// window.addEventListener('DOMContentLoaded', function () {
// 	let clickToFrame = document.querySelector('.frame__play');
// 	clickToFrame.addEventListener("click", function (e) {
// 		video.classList.add('active');
// 		video.innerHTML = '<iframe src=' + src + ' frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
// 	});
// })

// //Функционал отключения блокировки скролла, отмена воспроизвидения iframe
// function stopPopup() {
// 	document.querySelector(".modal.is-visible").classList.remove(isVisible);
// 	document.documentElement.classList.remove("lock");
// 	video.innerHTML = null;
// }

// //Показать модальное окно
// for (const el of openEls) {
// 	el.addEventListener("click", function () {
// 		const modalId = this.dataset.open;
// 		document.getElementById(modalId).classList.add(isVisible);
// 		document.documentElement.classList.add("lock");
// 	});
// }

// //Закрыть модальное окно

// //Клик на кнопку
// for (const el of closeEls) {
// 	el.addEventListener("click", function () {
// 		stopPopup();
// 	})
// }

// //Клик вокруг
// document.addEventListener("click", e => {
// 	if (e.target == document.querySelector(".modal.is-visible")) {
// 		stopPopup();
// 	}
// });

// //Кнопка ESC
// document.addEventListener("keyup", e => {
// 	if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
// 		stopPopup();
// 	}
// });
//========================================================================================================================================================
//========================================================================================================================================================
//Маска для вадилдности номера телефона
// function setCursorPosition(pos, e) {
// 	if (e.setSelectionRange) e.setSelectionRange(pos, pos);
// 	else if (e.createTextRange) {
// 		var range = e.createTextRange();
// 		range.collapse(true);
// 		range.moveEnd("character", pos);
// 		range.moveStart("character", pos);
// 		range.select()
// 	}
// }

// function mask(e) {
// 	var matrix = this.placeholder,// .defaultValue
// 		i = 0,
// 		def = matrix.replace(/\D/g, ""),
// 		val = this.value.replace(/\D/g, "");
// 	def.length >= val.length && (val = def);
// 	matrix = matrix.replace(/[_\d]/g, function (a) {
// 		return val.charAt(i++) || "_"
// 	});
// 	this.value = matrix;
// 	i = matrix.lastIndexOf(val.substr(-1));
// 	i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
// 	setCursorPosition(i, this)
// }
// window.addEventListener("DOMContentLoaded", function () {
// 	var input = document.querySelector("#number-phone");
// 	input.addEventListener("input", mask, false);
// 	setCursorPosition(3, input);
// });
//========================================================================================================================================================
// Отображение блока при скролле
// const getTop = () => window.scrollY || document.documentElement.scrollTop;
// const offset = 30;
// const aboutItem = document.querySelector('.about-item');

// window.addEventListener('scroll', () => {
// 	if (getTop() > offset) {
// 		aboutItem.classList.add('about-item-active');
// 	} else {
// 		aboutItem.classList.remove('about-item-active');
// 	}
// });
//========================================================================================================================================================
//Фиксация меню
// const headerNav = document.querySelector('.header-nav');
// let scrollPrev = 0;
// window.addEventListener('scroll', () => {
// 	let scrolled = document.documentElement.scrollTop;
// 	if (scrolled > 100 && !(scrolled > scrollPrev)) {
// 		headerNav.classList.add('header-nav--fixed');
// 	} else {
// 		headerNav.classList.remove('header-nav--fixed');
// 	}
// 	scrollPrev = scrolled;
// });
//========================================================================================================================================================