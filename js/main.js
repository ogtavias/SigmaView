$(document).ready(function () {
	initVideo();
	watchScroll();
	initFAQ();
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
