$(document).ready(function(){

	// Toggle dropdown menu

	dropdown();
	verticalSloganPos();
	// puzzleParam();

	$(window).resize(function(){
		dropdown();
		verticalSloganPos();
		// puzzleParam();
		// testimonialsPosition()
		if ($('.dropdown-icon').hasClass('openD')) {
			$('.dropdown-icon').removeClass('openD');
			$('.A-top-menu ul').slideUp(1000)
		}
	})

	$('.dropdown-icon').click(function(){
		if ($(this).hasClass('openD')) {
			$(this).removeClass('openD');
			$('.A-top-menu ul').slideUp();
		} else{
			$(this).addClass('openD');
			$('.A-top-menu ul').slideDown();
		};
	})

	function dropdown() {
		if ($(window).width() > 992) {
			$('.A-top-menu ul').slideDown(1000);
			$('.A-top-menu ul').css({
				'display' : 'table'
			});

		} else{
			$('.A-top-menu ul').slideUp(1000);
			$('.A-top-menu ul').css({
				'display' : 'none'
			});

		};
	}

	// Testimonials position
	function testimonialsPosition() {
		var testiomialsArr = $('.starsWrap');
		for (var i = 0; i < testiomialsArr.length; i++) {
			$(testiomialsArr[i]).css({
				'top' : - $(testiomialsArr[i]).height() / 2
			})
			// $(testiomialsArr[i]).height()
		};
	}

	// Puzzle square parameters

	function puzzleParam(){
		var pazzleArr = $('.puzzleCont');
		for (var i = 0; i < pazzleArr.length; i++) {
			$(pazzleArr[i]).css({
				'height' : $(pazzleArr[i]).width() + 30
			})
		};
	}

	function verticalSloganPos(){
		var heightHeader = $('.header').height() / 2;
		var heightSlogan = $('.A-slogan').height() / 2;
		$('.A-slogan').css({
			'marginTop' : heightHeader - heightSlogan - 120
		})
	}
	
	$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false; 
});
})