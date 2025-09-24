// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Calculate wind chill (simplified formula for demonstration)
function calculateWindChill(temp, windSpeed) {
    // Using the standard wind chill formula
    if (temp <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A"; // No significant wind chill
    }
}

// Set wind chill value
const temp = 18; // Match the temperature displayed in HTML
const windSpeed = 12; // Match the wind speed displayed in HTML
const windChill = calculateWindChill(temp, windSpeed);
document.getElementById('wind-chill').textContent = windChill;