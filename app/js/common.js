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


	if($('.ah-select1').length>0){
	 
	    $('.ah-select1').selectpicker({
		  size: 4
		});


	}

	if($("#slider-range-min").length>0){

	    $( "#slider-range-min" ).slider({
	      range: "min",
	      value: 100,
	      min: 1,
	      max: 100,
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.value + "%");
	      }
	    });
	    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + "%" );

    }

	

});
