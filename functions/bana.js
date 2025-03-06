document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".banprofil img"); // Hämtar bilden i div.banprofil
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    Object.assign(lightbox.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.8)",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1000"
    });

    const img = document.createElement("img");
    Object.assign(img.style, {
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "8px"
    });

    lightbox.appendChild(img);

    image.addEventListener("click", function () {
        img.src = this.src;
        lightbox.style.display = "flex";
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
