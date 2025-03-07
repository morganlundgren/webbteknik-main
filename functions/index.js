
function toggleMenu() {
    const $menu = $(".mobile-menu");
    const $content = $(".content");

    if ($menu.hasClass("active")) {
        $menu.removeClass("active");
        $content.css("margin-top", "0"); // Återställ
    } else {
        $menu.addClass("active");
        $content.css("margin-top", "250px"); // Justera efter menyns höjd
    }
}


$(document).ready(function() {
    // Välj alla länkar och lägg till hover-effekten
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



