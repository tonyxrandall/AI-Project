document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust the position of the sidebar
    function adjustSidebar() {
        var articleHeight = document.querySelector('.col-md-8').offsetHeight;
        var sidebar = document.querySelector('.col-md-4');
        
        if (sidebar) {
            sidebar.style.position = 'relative';
            sidebar.style.top = '0px';
            sidebar.style.height = articleHeight + 'px';
        }
    }

    // Adjust the sidebar on initial load
    adjustSidebar();

    // Re-adjust the sidebar on window resize
    window.addEventListener('resize', adjustSidebar);
});
