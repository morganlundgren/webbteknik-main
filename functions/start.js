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
