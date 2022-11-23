"use strict";

	$(".sub_img img").hover(function()
	{
		var img = $(this).attr("src");
 
		$(".main_img").fadeOut(500, function()
		{
			$(this).attr("src", img),
			$(this).fadeIn(500)
		});
	});
