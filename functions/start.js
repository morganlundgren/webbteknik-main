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


document.getElementById("datePicker").addEventListener("change", function() {
    const timesContainer = document.getElementById("timesContainer");
    timesContainer.innerHTML = ""; // Rensa tider från tidigare val

    const startHour = 6;  // Starttid (09:00)
    const endHour = 20;   // Sluttid (17:00)
    const interval = 15;  // 15 minuters intervaller

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += interval) {
            let timeString = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
            let timeSlot = document.createElement("div");
            timeSlot.classList.add("time-slot");
            timeSlot.textContent = timeString;
            timeSlot.addEventListener("click", function() {
                alert(`Du valde ${timeString}`);
            });
            timesContainer.appendChild(timeSlot);
        }
    }
});





