$(window).ready(function(){
	$('.header-hamb-wrapper').click(function(event){
		event.stopPropagation();
		event.preventDefault();
		$('.header-hamb-menu').toggleClass('open');
		$('body').css({'overflow-y': 'hidden'});
	});

	$(this).toggleClass('open');

	$('.header-hamb-menu-close').click(function(){
		$('.header-hamb-menu').removeClass('open');
		$('body').css({'overflow-y': ''});
	});
});