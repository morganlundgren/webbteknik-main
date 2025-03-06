document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".banprofil img"); 
    const lightbox = document.createElement("div");
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

$(document).ready(function () {
    $("#draggable").draggable();

    $("#dropzone").droppable({
        accept: "#draggable", // Endast golfbollen kan droppas
        tolerance: "fit", // Bollen måste vara helt inom hålet
        drop: function (event, ui) {
            // Animera bollen så att den sjunker ner i hålet
            ui.draggable.animate({
                top: $(this).position().top + 10, 
                left: $(this).position().left + 10,
                width: "10px", 
                height: "10px",
                opacity: 0
            }, 500, function () {
                // Återställ bollen efter en stund
                setTimeout(() => {
                    ui.draggable.css({
                        top: "68%", // Ursprunglig position
                        left: "45%",
                        width: "40px",
                        height: "40px",
                        opacity: 0
                    });
                }, 1000);
            });
        }
    });
});


