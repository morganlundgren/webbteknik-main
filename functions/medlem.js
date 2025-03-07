document.querySelector(".menu-icon").addEventListener("click", function() {
    let $menu = $('.mobile-menu');
	const $content = $('.content');

    if ($menu.hasClass('active')) {
		
        // Använd animate för att stänga menyn
        $menu.animate({top: "-30%"}, 500, function() {
            // När animationen är klar, ta bort 'active'
            $menu.removeClass('active');
		
			
        });
		$content.animate({marginTop:"0"}, 500)

    } else {
		 
        // Lägg till 'active' och animerar från top: -100% till 0
        $menu.addClass("active").css("top", "-30%").animate({top: "12%"}, 500);
		$content.animate({marginTop:"250px"}, 500)
		

    }
});

$(document).ready(function() {

    $("a").on("mouseover", function() {
        $(this).css({
            "transform": "scale(1.2)",
            "transition": "transform 0.2s ease-in-out"
        });
    });

    $("a").on("mouseout", function() {
        $(this).css("transform", "scale(1)");
    });
});

$(document).ready(function () {
    $("input").on("focus", function () {
        $(this).css("background-color", "lightgrey"); 
    });

    
    $("input").on("blur", function () {
        $(this).css("background-color", ""); 
    });
});

