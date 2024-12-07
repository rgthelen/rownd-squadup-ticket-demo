// Initialize Rownd
window.rownd = window.rownd || [];



// Handle tickets button click
function handleTicketsClick() {
    if (window.rownd?.squadUp?.yourTickets) {
        window.rownd.squadUp.yourTickets();
    } else {
        console.error('Rownd Squad Up not initialized');
    }
}

// Optional: Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add animation on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.ticket-card, .feature-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check 