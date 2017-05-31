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

	$(".az-scroll2").jScrollPane({
		autoReinitialise: true,
		showArrows: true,
		contentWidth: '0px',
		verticalGutter: 0
	}).bind('jsp-initialised', function(event, destX){
		if($(this).height() == $(this).find(".jspPane").height()-1){
			$(this).find(".jspVerticalBar").addClass("az-disabled");
		}
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

	var check_enabled = function(){
		var bool = false;
		$(".js-button-on-off").each(function(){
			if($(this).is(':checked')){
				bool = true;
			}
		});
		if(bool){
			$(".js-button-on-off-out").removeClass("az-button__disabled");
		} else {
			$(".js-button-on-off-out").addClass("az-button__disabled");
		}
	}

	var check_disabled = function(){
		var bool = -1;
		$(".js-check-out").each(function(){
			if($(this).is(':checked')){
				bool = 1;
			}
		});
		$(".js-check-out").each(function(){
			if(!$(this).is(':checked') && bool == 1){
				bool = 0;
			}
		});
		if(bool == 1){
			$(".js-checkbox").prop("checked", true);
		} else if(bool == -1){
			$(".js-checkbox").prop("checked", false);
		}
	}

	check_enabled();

	$(".js-checkbox").change(function(){
		$(".js-check-out").prop("checked", $(this).is(':checked'));
	});

	$(".js-check-out").change(function(){
		check_disabled();
	});

	$(".js-button-on-off").change(function(){
		check_enabled();
	});

	$(".js-subtable").click(function(){
		$(this).toggleClass("az-plus__minus");
		$(this).parents(".az-table__row").find(".js-subtable-out").slideToggle(300);
		return false;
	});

	$(".az-button__disabled").click(function(){
		return false;
	});

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