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