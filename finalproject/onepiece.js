// Crew Data
const crewMembers = [
    {
        name: "Monkey D. Luffy",
        role: "Captain",
        bounty: "3,000,000,000 Berries",
        devilFruit: "Gomu Gomu no Mi",
        image: "Onepiece/gear-5-luffy-one-piece.avif",
        description: "The captain of the Straw Hat Pirates with the power to become the Sun God Nika."
    },
    {
        name: "Roronoa Zoro",
        role: "Swordsman",
        bounty: "1,111,000,000 Berries",
        devilFruit: "None",
        image: "Onepiece/zoro-king-of-hell.jpg",
        description: "The swordsman who aims to become the world's greatest swordsman."
    },
    {
        name: "Nami",
        role: "Navigator",
        bounty: "366,000,000 Berries",
        devilFruit: "None",
        image: "Onepiece/Nami.jpg",
        description: "The skilled navigator and weather scientist of the crew."
    },
    {
        name: "Sanji",
        role: "Cook",
        bounty: "1,032,000,000 Berries",
        devilFruit: "None",
        image: "Onepiece/Sanji_29_29_29.webp",
        description: "The cook with incredible kicking techniques and a chivalrous heart."
    },
    {
        name: "Tony Tony Chopper",
        role: "Doctor",
        bounty: "1,000 Berries",
        devilFruit: "Hito Hito no Mi",
        image: "Onepiece/Chopper-monster-point.jpg",
        description: "The crew's doctor and a reindeer who ate the Human-Human Fruit."
    }
];

// Devil Fruit Data
const devilFruits = [
    {
        name: "Gomu Gomu no Mi",
        type: "paramecia",
        user: "Monkey D. Luffy",
        ability: "Turns the user's body into rubber"
    },
    {
        name: "Mera Mera no Mi",
        type: "logia",
        user: "Sabo",
        ability: "Allows the user to create, control, and transform into fire"
    },
    {
        name: "Ope Ope no Mi",
        type: "paramecia",
        user: "Trafalgar D. Water Law",
        ability: "Allows the user to create a spherical territory where they can manipulate everything within it"
    },
    {
        name: "Hito Hito no Mi",
        type: "zoan",
        user: "Tony Tony Chopper",
        ability: "Allows the user to transform into a human or human-animal hybrid"
    },
    {
        name: "Yami Yami no Mi",
        type: "logia",
        user: "Marshall D. Teach",
        ability: "Allows the user to create, control, and transform into darkness"
    },
    {
        name: "Gura Gura no Mi",
        type: "paramecia",
        user: "Edward Newgate",
        ability: "Allows the user to create vibrations and shockwaves"
    }
];

// Story Arcs Data
const storyArcs = [
    { name: "East Blue Saga", episodes: "1-61", year: "1999-2001" },
    { name: "Alabasta Saga", episodes: "62-135", year: "2001-2003" },
    { name: "Sky Island Saga", episodes: "136-206", year: "2003-2005" },
    { name: "Water 7 Saga", episodes: "207-325", year: "2005-2007" },
    { name: "Thriller Bark Saga", episodes: "326-384", year: "2007-2008" },
    { name: "Summit War Saga", episodes: "385-516", year: "2008-2011" },
    { name: "Fish-Man Island Saga", episodes: "517-574", year: "2011-2012" },
    { name: "Dressrosa Saga", episodes: "575-746", year: "2013-2016" },
    { name: "Whole Cake Island Saga", episodes: "747-889", year: "2016-2019" },
    { name: "Wano Country Saga", episodes: "890-1085", year: "2019-2023" }
];

// Famous Quotes
const onePieceQuotes = [
    "I'm going to be King of the Pirates! - Luffy",
    "I don't want to conquer anything. I just think the guy with the most freedom in the whole ocean is the Pirate King! - Luffy",
    "When do you think people die? When they are shot through the heart? No. When they are ravaged by an incurable disease? No. It's when they are forgotten! - Dr. Hiriluk",
    "If you don't take risks, you can't create a future! - Monkey D. Luffy",
    "Hero? No! We're pirates! I love heroes but I don't wanna be one! - Luffy",
    "People's dreams have no ends! - Marshall D. Teach",
    "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so damn beautiful. - Roy Mustang (but we love it anyway!)",
    "I WANT TO LIVE! - Nico Robin"
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadCrewMembers();
    loadDevilFruits();
    loadTimeline();
    loadQuotes();
    setupSearch();
    setupFilters();
    setupThemeToggle();
    setupMusicPlayer();
    setupEpisodeBanner();
    createBountyChart();
    setupHamburgerMenu();
    setupForm(); // Add form setup
    setupFormValidation(); // Add form validation
    
    // Load user preferences
    loadPreferences();
    
    // Update copyright year
    updateCopyrightYear();
});

function loadCrewMembers() {
    const crewGrid = document.getElementById('crewGrid');
    
    crewMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'crew-member';
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200/333/fff?text=OP'">
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <p><strong>Bounty:</strong> ${member.bounty}</p>
            <p><strong>Devil Fruit:</strong> ${member.devilFruit}</p>
        `;
        memberElement.addEventListener('click', () => showMemberDetails(member));
        crewGrid.appendChild(memberElement);
    });
}

function loadDevilFruits() {
    const fruitGrid = document.getElementById('fruitGrid');
    
    devilFruits.forEach(fruit => {
        const fruitElement = document.createElement('div');
        fruitElement.className = 'fruit-card';
        fruitElement.innerHTML = `
            <div class="fruit-type ${fruit.type}">${fruit.type.toUpperCase()}</div>
            <h3>${fruit.name}</h3>
            <p><strong>User:</strong> ${fruit.user}</p>
            <p><strong>Ability:</strong> ${fruit.ability}</p>
        `;
        fruitGrid.appendChild(fruitElement);
    });
}

function loadTimeline() {
    const timeline = document.getElementById('timeline');
    
    storyArcs.forEach((arc, index) => {
        const arcElement = document.createElement('div');
        arcElement.className = 'timeline-item';
        arcElement.innerHTML = `
            <h3>${arc.name}</h3>
            <p><strong>Episodes:</strong> ${arc.episodes}</p>
            <p><strong>Year:</strong> ${arc.year}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${(index + 1) * 10}%"></div>
            </div>
        `;
        timeline.appendChild(arcElement);
    });
}

function loadQuotes() {
    const quotesContainer = document.getElementById('quotesContainer');
    
    // Display first 4 quotes initially
    const initialQuotes = onePieceQuotes.slice(0, 4);
    
    initialQuotes.forEach(quote => {
        const quoteElement = createQuoteElement(quote);
        quotesContainer.appendChild(quoteElement);
    });
}

function createQuoteElement(quoteText) {
    const quoteElement = document.createElement('div');
    quoteElement.className = 'quote-card';
    
    // Split quote and character
    const parts = quoteText.split(' - ');
    const quote = parts[0];
    const character = parts[1] || 'Unknown';
    
    quoteElement.innerHTML = `
        <div class="quote-icon">"</div>
        <div class="quote-text">${quote}</div>
        <div class="quote-character">- ${character}</div>
    `;
    
    return quoteElement;
}

function loadAllQuotes() {
    const quotesContainer = document.getElementById('quotesContainer');
    quotesContainer.innerHTML = '';
    
    onePieceQuotes.forEach(quote => {
        const quoteElement = createQuoteElement(quote);
        quotesContainer.appendChild(quoteElement);
    });
}

function showRandomQuote() {
    const quotesContainer = document.getElementById('quotesContainer');
    const randomQuote = onePieceQuotes[Math.floor(Math.random() * onePieceQuotes.length)];
    
    // Clear container and show single random quote
    quotesContainer.innerHTML = '';
    const quoteElement = document.createElement('div');
    quoteElement.className = 'quote-card single-quote';
    
    const parts = randomQuote.split(' - ');
    const quote = parts[0];
    const character = parts[1] || 'Unknown';
    
    quoteElement.innerHTML = `
        <div class="quote-icon">"</div>
        <div class="quote-text">${quote}</div>
        <div class="quote-character">- ${character}</div>
    `;
    
    quotesContainer.appendChild(quoteElement);
}

function setupSearch() {
    const searchInput = document.getElementById('fruitSearch');
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const fruitCards = document.querySelectorAll('.fruit-card');
        
        fruitCards.forEach(card => {
            const fruitName = card.querySelector('h3').textContent.toLowerCase();
            if (fruitName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const fruits = document.querySelectorAll('.fruit-card');
            fruits.forEach(fruit => {
                if (filter === 'all') {
                    fruit.style.display = 'block';
                } else {
                    const fruitType = fruit.querySelector('.fruit-type');
                    if (fruitType.classList.contains(filter)) {
                        fruit.style.display = 'block';
                    } else {
                        fruit.style.display = 'none';
                    }
                }
            });
        });
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        const isLightTheme = document.body.classList.contains('light-theme');
        themeToggle.textContent = isLightTheme ? '☀️' : '🌙';
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    });
}

function setupMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const brookSong = document.getElementById('brookSong');
    
    musicToggle.addEventListener('click', function() {
        if (brookSong.paused) {
            brookSong.play();
            musicToggle.innerHTML = '<span>🎵</span><span>Pause Bink\'s Sake</span>';
        } else {
            brookSong.pause();
            musicToggle.innerHTML = '<span>🎵</span><span>Play Bink\'s Sake</span>';
        }
    });
}

function setupEpisodeBanner() {
    const banner = document.getElementById('episodeBanner');
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Show banner on weekdays between 8:00 and 17:00
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 8 && currentHour < 17) {
        banner.classList.add('show');
    }
}

function createBountyChart() {
    const bountyChart = document.getElementById('bountyChart');
    
    crewMembers.forEach(member => {
        const bountyValue = parseInt(member.bounty.replace(/,/g, '').replace(' Berries', ''));
        const maxBounty = 3000000000; // Luffy's bounty
        const height = (bountyValue / maxBounty) * 100;
        
        const bar = document.createElement('div');
        bar.className = 'bounty-bar';
        bar.style.height = `${Math.max(height, 5)}%`;
        bar.innerHTML = `<div class="bounty-label">${member.name.split(' ').pop()}</div>`;
        bar.title = `${member.name}: ${member.bounty}`;
        
        bountyChart.appendChild(bar);
    });
}

function showMemberDetails(member) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${member.image}" alt="${member.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200/333/fff?text=OP'" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; display: block;">
            <h2>${member.name}</h2>
            <p><strong>Role:</strong> ${member.role}</p>
            <p><strong>Bounty:</strong> ${member.bounty}</p>
            <p><strong>Devil Fruit:</strong> ${member.devilFruit}</p>
            <p><strong>Description:</strong> ${member.description}</p>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.close').onclick = () => modal.remove();
    modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
}

// Hamburger Menu Functionality
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// FORM FUNCTIONALITY - ADDED TO EXISTING FILE

// Form submission with conditional branching
function setupForm() {
    const crewForm = document.getElementById('crewForm');
    
    crewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const role = document.getElementById('role').value;
        const devilFruit = document.getElementById('devilFruit').value.trim();
        const message = document.getElementById('message').value.trim();
        const bounty = document.getElementById('bounty').value;
        
        // Validate form (additional validation)
        if (!name || !email || !role || !message) {
            showFormMessage('Please fill in all required fields!', 'error');
            return;
        }
        
        // Conditional branching for different roles with enhanced responses
        let responseMessage = '';
        let emoji = '⚓';
        
        // Complex conditional branching with multiple conditions
        if (role === 'swordsman') {
            if (bounty && parseInt(bounty) > 1000000) {
                responseMessage = `Impressive ${name}! With a ${bounty} Berry bounty, Zoro will definitely test your sword skills! 🗡️`;
                emoji = '⚔️';
            } else {
                responseMessage = `Welcome ${name}! Zoro will train you to become a great swordsman! 🗡️`;
                emoji = '🏴‍☠️';
            }
        } 
        else if (role === 'navigator') {
            responseMessage = `Ahoy ${name}! Nami will chart your course across the Grand Line! 🧭`;
            emoji = '🌊';
        } 
        else if (role === 'cook') {
            if (devilFruit.toLowerCase().includes('mera')) {
                responseMessage = `Amazing ${name}! A fire-based Devil Fruit user in the kitchen? Sanji will be thrilled! 🔥`;
                emoji = '👨‍🍳';
            } else {
                responseMessage = `Welcome ${name}! Sanji will judge your cooking and teach you his recipes! 👨‍🍳`;
                emoji = '🍖';
            }
        } 
        else if (role === 'doctor') {
            responseMessage = `Hello Dr. ${name}! Chopper needs medical assistance and would love a partner! 🩺`;
            emoji = '💊';
        } 
        else if (role === 'shipwright') {
            responseMessage = `Yo ${name}! Franky needs help maintaining the Thousand Sunny! SUPER! 🚢`;
            emoji = '🔧';
        }
        else if (role === 'musician') {
            responseMessage = `Welcome ${name}! Brook needs a musical partner to play Bink's Sake with! 🎵`;
            emoji = '🎻';
        }
        else if (role === 'archaeologist') {
            responseMessage = `Fascinating ${name}! Robin would love to discuss the Void Century with you! 📜`;
            emoji = '🔍';
        }
        else if (role === 'helmsman') {
            responseMessage = `Welcome aboard ${name}! Jinbe will teach you how to navigate the roughest seas! 🚢`;
            emoji = '⚓';
        }
        else {
            responseMessage = `Welcome aboard ${name}! Luffy will find the perfect role for your unique skills! ⚓`;
            emoji = '🏴‍☠️';
        }
        
        // Additional conditional based on Devil Fruit
        if (devilFruit) {
            responseMessage += `\n\nYour ${devilFruit} power will be a great asset to the crew!`;
            
            // Nested conditional for specific Devil Fruits
            if (devilFruit.toLowerCase().includes('gomu')) {
                responseMessage += ` Wait... you have the same power as Captain Luffy?! This is incredible!`;
            } else if (devilFruit.toLowerCase().includes('hito')) {
                responseMessage += ` A Human-Human Fruit user like Chopper? Wonderful!`;
            }
        }
        
        // Conditional based on bounty amount
        if (bounty) {
            const bountyAmount = parseInt(bounty);
            if (bountyAmount > 500000000) {
                responseMessage += `\n\nWith a ${bounty.toLocaleString()} Berry bounty, the World Government will be after us! Exciting!`;
            } else if (bountyAmount > 100000000) {
                responseMessage += `\n\nA ${bounty.toLocaleString()} Berry bounty? You're quite the notorious pirate!`;
            } else if (bountyAmount > 0) {
                responseMessage += `\n\nYour ${bounty.toLocaleString()} Berry bounty is a good start!`;
            }
        }
        
        // Show success message with enhanced formatting
        const finalMessage = `🏴‍☠️ APPLICATION SUBMITTED! 🏴‍☠️\n\n${responseMessage}\n\nWe'll contact you at: ${email}\n\n${emoji} SET SAIL FOR ADVENTURE! ${emoji}`;
        
        showFormMessage(finalMessage, 'success');
        
        // Store application in localStorage
        storeApplication({ name, email, role, devilFruit, bounty, message });
        
        // Reset form
        crewForm.reset();
    });
}

// Store application data in localStorage
function storeApplication(application) {
    let applications = JSON.parse(localStorage.getItem('crewApplications') || '[]');
    applications.push({
        ...application,
        timestamp: new Date().toISOString(),
        status: 'pending'
    });
    localStorage.setItem('crewApplications', JSON.stringify(applications));
}

// Show form message with conditional styling
function showFormMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;
    messageElement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${type === 'success' ? 'rgba(46, 213, 115, 0.95)' : 'rgba(255, 71, 87, 0.95)'};
        color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        z-index: 3000;
        max-width: 90%;
        width: 400px;
        backdrop-filter: blur(10px);
        border: 2px solid ${type === 'success' ? '#2ed573' : '#ff4757'};
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        line-height: 1.5;
        white-space: pre-line;
    `;
    
    document.body.appendChild(messageElement);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
    
    // Also allow clicking to close
    messageElement.addEventListener('click', () => {
        messageElement.remove();
    });
}

// Enhanced form validation with conditional feedback
function setupFormValidation() {
    const form = document.getElementById('crewForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldStatus(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    
    // Clear previous status
    clearFieldStatus(field);
    
    // Conditional validation based on field type
    if (field.required && !value) {
        setFieldStatus(field, 'error', 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setFieldStatus(field, 'error', 'Please enter a valid email address');
            return false;
        }
    }
    
    if (field.id === 'bounty' && value) {
        const bounty = parseInt(value);
        if (bounty < 0) {
            setFieldStatus(field, 'error', 'Bounty cannot be negative');
            return false;
        }
        if (bounty > 10000000000) {
            setFieldStatus(field, 'warning', 'That bounty is higher than any known pirate!');
            return true; // Still valid, just a warning
        }
    }
    
    setFieldStatus(field, 'success', 'Looks good!');
    return true;
}

function setFieldStatus(field, status, message) {
    field.style.borderColor = status === 'success' ? '#2ed573' : 
                            status === 'warning' ? '#ffa502' : '#ff4757';
    
    // Remove existing message
    const existingMessage = field.parentNode.querySelector('.field-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add new message
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.className = `field-message field-message-${status}`;
        messageElement.textContent = message;
        messageElement.style.cssText = `
            font-size: 0.8rem;
            margin-top: 0.25rem;
            color: ${status === 'success' ? '#2ed573' : 
                    status === 'warning' ? '#ffa502' : '#ff4757'};
            font-family: 'Inter', sans-serif;
        `;
        field.parentNode.appendChild(messageElement);
    }
}

function clearFieldStatus(field) {
    field.style.borderColor = '#ff6b35';
    const message = field.parentNode.querySelector('.field-message');
    if (message) {
        message.remove();
    }
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggle').textContent = '☀️';
    }
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    // Could implement favorite system here
}

function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add some interactive features
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToSection(targetId.substring(1));
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.remove());
    }
});