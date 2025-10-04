// Crew Data
const crewMembers = [
    {
        name: "Monkey D. Luffy",
        role: "Captain",
        bounty: "3,000,000,000 Berries",
        devilFruit: "Gomu Gomu no Mi",
        image: "/images/Onepiece/gear-5-luffy-one-piece.avif"
    },
    {
        name: "Roronoa Zoro",
        role: "Swordsman",
        bounty: "1,111,000,000 Berries",
        devilFruit: "None",
        image: "images/Onepiece/zoro-king-of-hell.jpg"
    },
    {
        name: "Nami",
        role: "Navigator",
        bounty: "366,000,000 Berries",
        devilFruit: "None",
        image: "images/Onepiece/Nami.jpg"
    },
    {
        name: "Sanji",
        role: "Cook",
        bounty: "1,032,000,000 Berries",
        devilFruit: "None",
        image: "images/Onepiece/sanji_29_29_29.webp"
    },
    {
        name: "Tony Tony Chopper",
        role: "Doctor",
        bounty: "1,000 Berries",
        devilFruit: "Hito Hito no Mi",
        image: "images/Onepiece/Chopper-monster-point.jpg"
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

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadCrewMembers();
    loadDevilFruits();
    loadTimeline();
    setupSearch();
});

function loadCrewMembers() {
    const crewGrid = document.getElementById('crewGrid');
    
    crewMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'crew-member';
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/200x200/333/fff?text=OP'">
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <p><strong>Bounty:</strong> ${member.bounty}</p>
            <p><strong>Devil Fruit:</strong> ${member.devilFruit}</p>
        `;
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
    
    storyArcs.forEach(arc => {
        const arcElement = document.createElement('div');
        arcElement.className = 'timeline-item';
        arcElement.innerHTML = `
            <h3>${arc.name}</h3>
            <p><strong>Episodes:</strong> ${arc.episodes}</p>
            <p><strong>Year:</strong> ${arc.year}</p>
        `;
        timeline.appendChild(arcElement);
    });
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