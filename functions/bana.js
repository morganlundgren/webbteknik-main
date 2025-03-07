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
                        opacity: 1
                    });
                }, 500);
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let golfClub = document.createElement("div");
    golfClub.id = "golfclub";
    document.body.appendChild(golfClub);

    let golfBall = document.getElementById("draggable");
    let dropzone = document.getElementById("dropzone");

    // Uppdatera golfklubbans position så den följer musen
    document.addEventListener("mousemove", (event) => {
        golfClub.style.left = `${event.pageX - 25}px`;
        golfClub.style.top = `${event.pageY - 50}px`;
    });

    // När man klickar kollar vi om klubban träffar bollen
    document.addEventListener("click", () => {
        let clubRect = golfClub.getBoundingClientRect();
        let ballRect = golfBall.getBoundingClientRect();

        if (
            clubRect.right > ballRect.left &&
            clubRect.left < ballRect.right &&
            clubRect.bottom > ballRect.top &&
            clubRect.top < ballRect.bottom
        ) {
            // Få hålets position
            let holeRect = dropzone.getBoundingClientRect();
            let holeX = holeRect.left + holeRect.width / 2;
            let holeY = holeRect.top + holeRect.height / 2;

            // Animera bollen mot hålet
            golfBall.style.transition = "top 1s ease-out, left 1s ease-out";
            golfBall.style.left = `${holeX - 20}px`; // Justera för bollens storlek
            golfBall.style.top = `${holeY - 20}px`;

            // När bollen når hålet, låt den försvinna
            setTimeout(() => {
                golfBall.style.opacity = 0;
            }, 1000);
        }
    });
});
