// concerns_about_ai.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the current date and time
    const now = new Date();
    const dateString = now.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timeString = now.toLocaleTimeString("en-US");

    // Display the current date and time
    const currentDate = document.querySelector('time');
    if (currentDate) {
        currentDate.textContent = dateString + ' ' + timeString;
        currentDate.style.fontWeight = 'bold';
    }

    // Any other JavaScript functionalities can be added here
});
