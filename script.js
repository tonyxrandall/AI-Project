// script.js

document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Date Display
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Collapsible Sections
    document.querySelectorAll('.collapsible-trigger').forEach(trigger => {
        trigger.addEventListener('click', function () {
            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
                // Section is open, close it
                content.style.maxHeight = null;
                this.classList.remove('open');
            } else {
                // Section is closed, open it
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add('open');
            }
        });
    });

});

// Additional functionality can be added here as needed
