function updateClock() {
    var now = new Date(); // Get the current date and time
    var hours = now.getHours(); // Get the current hours
    var minutes = now.getMinutes(); // Get the current minutes
    var seconds = now.getSeconds(); // Get the current seconds

    // Format time to always show two digits
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds; // Combine time as a string

    // Display time in the div with id "clock"
    document.getElementById("clock").textContent = timeString;
}

// Call updateClock once to display the time immediately
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
