// Temple data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-43546-thumb.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119749,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2019, October, 22",
        area: 10865,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    }
];

// DOM elements
const templeContainer = document.getElementById('templeContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

// Hamburger menu elements
const hamburger = document.getElementById('hamburger');
const filterNav = document.getElementById('filterNav');

// Set current year and last modified date
currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;

// Function to extract year from dedicated date string
function getDedicationYear(dedicatedString) {
    // Extract the year from the dedicated string (first part before comma)
    const yearString = dedicatedString.split(',')[0].trim();
    return parseInt(yearString);
}

// Function to display temples based on filter
function displayTemples(filter) {
    templeContainer.innerHTML = '';
    
    let filteredTemples = temples;
    
    if (filter === 'old') {
        filteredTemples = temples.filter(temple => {
            const year = getDedicationYear(temple.dedicated);
            return year < 1900;
        });
    } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => {
            const year = getDedicationYear(temple.dedicated);
            return year > 2000;
        });
    } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }
    
    // Display message if no temples match the filter
    if (filteredTemples.length === 0) {
        templeContainer.innerHTML = `<p class="no-temples">No temples match the selected filter.</p>`;
        return;
    }
    
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';
        
        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" class="temple-img" loading="lazy" onerror="this.src='https://via.placeholder.com/400x250/0057b8/ffffff?text=Temple+Image+Not+Available'">
            <div class="temple-info">
                <h2 class="temple-name">${temple.templeName}</h2>
                <div class="temple-detail">
                    <span class="detail-icon">📍</span>
                    <span>${temple.location}</span>
                </div>
                <div class="temple-detail">
                    <span class="detail-icon">📅</span>
                    <span>Dedicated: ${temple.dedicated}</span>
                </div>
                <div class="temple-detail">
                    <span class="detail-icon">📏</span>
                    <span>Area: ${temple.area.toLocaleString()} sq ft</span>
                </div>
            </div>
        `;
        
        templeContainer.appendChild(templeCard);
    });
}

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Display temples based on filter
        displayTemples(button.dataset.filter);
        
        // Close mobile menu after selection
        closeMobileMenu();
    });
});

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    filterNav.classList.toggle('active');
});

// Function to close mobile menu
function closeMobileMenu() {
    if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        filterNav.classList.remove('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !filterNav.contains(e.target)) {
        closeMobileMenu();
    }
});

// Close mobile menu on window resize if it becomes desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        filterNav.classList.remove('active');
    }
});

// Initial display of all temples
displayTemples('all');