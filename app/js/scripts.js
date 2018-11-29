$(function () {
	//Sliders
	$(".home-products-slider").slick({
		infinite: false,
		touchThreshold: 20,
		prevArrow: "<span class='slick-arrow arrow-back'></span>",
		nextArrow: "<span class='slick-arrow arrow-forward'></span>"
	});
	$(".news-slider").slick({
		infinite: false,
		arrows: false,
		dots: true,
		touchThreshold: 20
	});
	$(".partners-slider").slick({
		asNavFor: '.partners-info-slider',
		slidesToShow: 3,
		centerPadding: 0,
		autoplay: false,
		centerMode: true,
		focusOnSelect: true,
		touchThreshold: 20,
		prevArrow: "<span class='slick-arrow slick-prev'></span>",
		nextArrow: "<span class='slick-arrow slick-next'></span>",
		responsive: [
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
	$(".partners-info-slider").slick({
		asNavFor: '.partners-slider',
		arrows: false,
		autoplay: false,
		touchThreshold: 20
	});
	$(".other-news-slider").slick({
		infinite: true,
		slidesToShow: 4,
		variableWidth: true,
		touchThreshold: 20,
		prevArrow: "<span class='slick-arrow slick-prev'></span>",
		nextArrow: "<span class='slick-arrow slick-next'></span>",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}
		]
	});
	$(".catalog-category-item-slider").slick({
		asNavFor: '.catalog-category-item-image-slider',
		infinite: true,
		slidesToShow: 3,
		variableWidth: true,
		touchThreshold: 20,
		focusOnSelect: true,
		centerMode: true,
		prevArrow: "<span class='slick-arrow slick-prev'></span>",
		nextArrow: "<span class='slick-arrow slick-next'></span>"
	});
	$(".catalog-category-item-image-slider").slick({
		asNavFor: '.catalog-category-item-slider',
		infinite: true,
		slidesToShow: 1,
		touchThreshold: 20,
		swipe: false
	});
	$(".similar-products-slider").slick({
		infinite: true,
		slidesToShow: 6,
		variableWidth: true,
		touchThreshold: 20,
		prevArrow: "<span class='slick-arrow slick-prev'></span>",
		nextArrow: "<span class='slick-arrow slick-next'></span>"
	});

	//Popups
	$(".callback").magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		closeOnBgClick: true
	});
	$(".contact-button").magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		closeOnBgClick: true
	});
	$('.portfolio-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		showCloseBtn: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true,
			tCounter: ""
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
	$('.catalog-category-item-image-gallery').magnificPopup({
		delegate: 'div a',
		type: 'image',
		closeOnContentClick: false,
		showCloseBtn: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true,
			tCounter: ""
		}
	});

	//Functions
	$(".mobile-menu-toggle").click(function(){
		$(this).toggleClass("change");
		$(".mobile-menu-content").toggleClass("open");
	});
	$(".dropdown").click(function(){
		$(this).find(".dropdown-content").toggleClass("d-none");
		$(this).find(".dropbtn").toggleClass("disabled");
	});
	$(".callback-popup .send").click(function(){
		$.magnificPopup.close();
	});
	$(".search-block a").click(function(){
		if($(this).closest("header").hasClass("mobile-header")){
			var searchBlock = $(this).closest("header").find(".search-mobile");
			searchBlock.toggleClass("open");
		} else {
			var searchBlock = $(this).closest(".search-block");
			searchBlock.find("span").toggleClass("open");
			searchBlock.find("input").toggleClass("invisible");
			searchBlock.find("a").toggleClass("invisible");
		}
	});
});