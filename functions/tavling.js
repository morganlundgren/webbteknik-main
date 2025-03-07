function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    const content = document.querySelector(".content");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        content.style.marginTop = "0"; // Återställ
    } else {
        menu.classList.add("active");
        content.style.marginTop = "250px"; // Justera efter menyns höjd
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