// Update footer with current year and last modified date
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    // Set last modified date in footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
    
    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');
    
    hamburgerBtn.addEventListener('click', function() {
        primaryNav.classList.toggle('open');
        
        // Change hamburger to X when open
        if (primaryNav.classList.contains('open')) {
            hamburgerBtn.textContent = '✕';
        } else {
            hamburgerBtn.textContent = '☰';
        }
    });
    
    // Close menu when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('#primaryNav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                primaryNav.classList.remove('open');
                hamburgerBtn.textContent = '☰';
            }
        });
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            primaryNav.classList.remove('open');
            hamburgerBtn.textContent = '☰';
        }
    });
});