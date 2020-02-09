$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		 infinite: true,
				autoplay: true,
				 autoplaySpeed: 1000,
		margin:130,
		stagePadding:30,
		onTranslated: animateImgFunc,
		onChanged: animateImgClear
	});

	//Добавляем класс с анимацией изображения
	function animateImgFunc() {
		$(".owl-carousel .active .inner-testimonial img").addClass("  ");
	}

	//Удаляем класс с анимацией изображения
	function animateImgClear() {
		$(".owl-carousel .active .inner-testimonial img").removeClass(" ");
	}
});