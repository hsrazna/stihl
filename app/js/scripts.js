$(function() {

	if($('.ah-accord__link').length>0){

		$('.ah-accord__link').click(function(){
			$(this).siblings('.ah-accord__content').slideToggle(500);
			return false;
		});
	}


	if($('.ah-accord__close').length>0){

		$('.ah-accord__close').click(function(){
			$(this).parents('.ah-accord__content').slideToggle(500);
			return false;
		});
	}

























});

$(function() {
	$(".az-menu__icon, .az-menu__link_close").click(function(){
		$(".az-menu__list").toggleClass("az-menu__list_on");
	});


});
