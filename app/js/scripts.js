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

 

	if($('.ah-tabsheader').length>0){

		var tabContainers = $('.ah-tabsbox > div');
	    tabContainers.hide().filter(':first').show();
	 
	    $('ul.ah-tabsheader li a').click(function(){
	        tabContainers.hide();
	        tabContainers.filter(this.hash).show();
	        $('ul.ah-tabsheader a').parent('li').removeClass('selected');
	        $(this).parent('li').addClass('selected');
	        return false;
	        }).filter(':first').click();
	     
    }
	

});

$(function() {
	$(".az-menu__icon, .az-menu__link_close").click(function(){
		$(".az-menu__list").toggleClass("az-menu__list_on");
		return false;
	});

	$(".az-scroll").jScrollPane({
		autoReinitialise: true,
		showArrows: true,
		verticalGutter: 0
	});

	setTableBody();
    $(window).resize(setTableBody);

    $(".az-table__bottom").jScrollPane({
		autoReinitialise: true,
		showArrows: true,
	}).bind('jsp-scroll-x', function(event, destX){
		$(this).siblings(".az-table__top").css({ left: $(this).find(".jspPane").css("left")});
	});

	$(".js-forgot-pass").click(function(){
		$(this).parents(".az-popup").slideUp(0);
		$(".js-forgot-pass-popup").slideDown(0);
	});

	$(".js-close-popup").click(function(){
		$(this).parents(".az-popup").slideUp(0);
		$(".js-enter-popup").slideDown(0);
	});

	// $(".az-table__bottom2").jScrollPane({
	// 	autoReinitialise: true,
	// 	showArrows: true,
	// }).bind('jsp-scroll-x', function(event, destX){
	// 	$(".az-table__top2").css({ left: $(".az-table__bottom2 .jspPane").css("left")});
	// });

	

});

function setTableBody()
{
    $(".az-table__bottom").each(function(){
    	$(this).height($(this).parents(".az-table").height());
    });

    // $(".az-table__bottom2").each(function(){
    // 	$(this).height($(this).parents(".az-table").height());
    // });
}