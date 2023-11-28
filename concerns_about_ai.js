// concerns_about_ai.js

document.addEventListener('DOMContentLoaded', function() {
    const headerImage = document.getElementById('header-image');
    if (headerImage) {
        headerImage.style.opacity = 1;
    }

    // Scroll down after the image has faded in
    setTimeout(function() {
        // Adjust the '800' to the pixel value you want to scroll to, or use a dynamic value
        window.scrollTo({
            top: 800, 
            behavior: 'smooth' 
        });
    }, 6000); // 2000 milliseconds (2 seconds) to match the fade-in duration
});
