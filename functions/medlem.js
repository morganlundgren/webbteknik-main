
function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    const content = document.querySelector(".content");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        content.style.marginTop = "0"; 
    } else {
        menu.classList.add("active");
        content.style.marginTop = "250px"; 
    }
}
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

