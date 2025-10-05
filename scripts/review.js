// Update review counter
document.addEventListener('DOMContentLoaded', function() {
    // Get current count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    
    // If it doesn't exist, initialize to 0
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    // Increment the count
    reviewCount++;
    
    // Save the updated count
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the count
    document.getElementById('review-count').textContent = reviewCount;
    
    // Set current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});