

$('.content').hide();
$('.content').eq(0).show();
$('.label').eq(0).addClass('active');
$('.label').on('click', function() {
	if($(this).next().css('display')==='none')
	{
		$('.content').slideUp(300);
		$(this).next('.content').slideDown(300);
		$('.label').removeClass('active');
		$(this).addClass('active');
	}

});



