// Smooth scroll to services section
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Simple reveal animation on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Set initial state for animation
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
});