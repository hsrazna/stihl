$(function() {
	$(".az-menu__icon, .az-menu__link_close").click(function(){
		$(".az-menu__list").toggleClass("az-menu__list_on");
		return false;
	});

	setTableBody();
    $(window).resize(setTableBody);
    $(".az-table__bottom").scroll(function ()
    {
        $(".az-table__top").css({ left: ((-1*parseInt(this.scrollLeft)))+"px" });
    });
});

function setTableBody()
{
    $(".az-table__bottom").height($(".az-table").height());
}