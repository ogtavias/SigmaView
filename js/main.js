$(document).ready(function () {
	initVideo();
	watchScroll();
	initHeader();
	$(window).on('scroll resize', watchScroll);
	initFAQ();

	$('.js_mobile-menu__button').on('click', function () {
		var isVisible = $('.js_mobile-menu__dropdown')[0].classList.contains('mobile-menu__dropdown-active');
		if (isVisible) {
			$('.js_mobile-menu__dropdown')[0].classList.remove('mobile-menu__dropdown-active');
			$('.mobile-menu__button')[0].classList.remove('mobile-menu__button-active');
			$('body')[0].style.overflow = "visible";
		} else {
			$('.js_mobile-menu__dropdown')[0].classList.add('mobile-menu__dropdown-active');
			$('.mobile-menu__button')[0].classList.add('mobile-menu__button-active');
			$('body')[0].style.overflow = "hidden";
		}
	});


	$('#tabs li a:not(:first)').addClass('inactive');
	$('.detail-info').hide();
	$('.detail-info:first').show();


	$('#tabs li a').click(function(){
		var t = $(this).attr('id');

		if($(this).hasClass('inactive')){ //this is the start of our condition
			$('#tabs li a').addClass('inactive');
			$(this).removeClass('inactive');

			$('.detail-info').hide();
			$('#'+ t + 'C').fadeIn('slow');
		}
	});

	if($(this).hasClass('inactive')){ //this is the start of our condition
		$('#tabs li a').addClass('inactive');
		$(this).removeClass('inactive');
		$('.detail-info').hide();
		$(t).fadeIn('slow');
	}

});

var initVideo = function () {
	$('.top-block').find('video').trigger('play');
};

// Watch page scroll
var watchScroll = function () {

	if ($(window).width() < 1280) {
		if ($(window).scrollTop() > 0) {
			$('html').addClass('scrolled');
		} else {
			$('html').removeClass('scrolled');
		}
	} else {
		if ($(window).scrollTop() > $(window).height()) {
			$('html').addClass('scrolled');
		} else {
			$('html').removeClass('scrolled');
		}
	}

	$('.share-text').each(function () {
		var hold = $(this);

		var t = ((hold.find('.el0').offset().top - $(window).scrollTop() - $(window).outerHeight()) / hold.find('.el0').outerHeight() * -1).toFixed(6);
		var n = 0;
		var n1 = 0;
		var n2 = 0;
		var n3 = 0;
		var n4 = 0;
		var n5 = 0;

		if (t < 0) {
			n = 0;
		} else if (t > 1) {
			if(!$('.share-text')[0].classList.contains('animated-text')) {
				$('.share-text')[0].classList.add('animated-text');
			}
			n = 1;
		} else {
			n = t;
		}
	});

	$('.monthly').each(function () {
		var hold = $(this);

		hold.css({
			'--width': hold.find('.circle-wrap').outerWidth() + 'px',
		});
	});
};

// FAQ
var initFAQ = function () {
	$('.faq').find('.el').each(function () {
		var hold = $(this);
		var link = hold.find('.qu');
		var text = hold.find('.in');

		link.on('click', function () {
			text.slideToggle(200, function () {
				hold.toggleClass('open');
			});
		});
	});
};


// Header links
var initHeader = function () {
	$('.toggle-menu').on('click', function () {
		$('html').toggleClass('open-menu');
	});

	$(document).keyup(function (e) {
		if (e.keyCode === 27) {
			$('html').removeClass('open-menu');
		}
	});

	$('.menu').find('a[href*=\\#]').on('click', function (event) {
		if (this.pathname === window.location.pathname) {
			$('html').removeClass('open-menu');
		}
	});

	$('.menu-lang').each(function () {
		var hold = $(this);
		var link = hold.find('.toggle');

		link.on('click', function () {
			hold.toggleClass('open');
		});

		hold.hover(function () {
			hold.addClass('hovering');
		}, function () {
			hold.removeClass('hovering');
		});

		$('body').click(function () {
			if (!hold.hasClass('hovering')) {
				hold.removeClass('open');
			}
		});

		$(document).keyup(function (e) {
			if (e.keyCode === 27) {
				hold.removeClass('open');
			}
		});
	});
};


