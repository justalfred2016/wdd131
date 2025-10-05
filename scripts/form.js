// Product data array
const products = [
    { id: "prod-001", name: "Smart Home Hub" },
    { id: "prod-002", name: "Wireless Earbuds" },
    { id: "prod-003", name: "Fitness Tracker" },
    { id: "prod-004", name: "4K Monitor" },
    { id: "prod-005", name: "Mechanical Keyboard" },
    { id: "prod-006", name: "Gaming Mouse" },
    { id: "prod-007", name: "Portable Speaker" },
    { id: "prod-008", name: "Tablet Stand" },
    { id: "prod-009", name: "USB-C Hub" },
    { id: "prod-010", name: "Wireless Charger" }
];

// Populate product dropdown
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product-name');
    
    // Add products to the dropdown
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    // Set today's date as default for installation date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('installation-date').value = today;
    
    // Set current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});