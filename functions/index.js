

document.querySelector(".menu-icon").addEventListener("click", function() {
    let $menu = $('.mobile-menu');
	const $content = $('.content');

    if ($menu.hasClass('active')) {
		
        // Använd animate för att stänga menyn
        $menu.animate({top: "-30%"}, 500, function() {
           
            $menu.removeClass('active');	
        });
		$content.animate({marginTop:"0"}, 500)

    } else {
		   // Lägg till 'active' och animerar från top: -100% till 0
        $menu.addClass("active").css("top", "-30%").animate({top: "12%"}, 500);
		$content.animate({marginTop:"250px"}, 500)
    }
});

$(document).on("mouseover", "a", function() {
    $(this).css({
        "transform": "scale(1.2)",
        "transition": "transform 0.2s ease-in-out"
    });
});

$(document).on("mouseout", "a", function() {
    $(this).css("transform", "scale(1)");
});




