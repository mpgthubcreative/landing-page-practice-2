// Testimonial Carousel Navigation
let currentIndex = 0;
const carousel = document.querySelector('.testimonial-carousel');
const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.section-testimonial .dot');
const prevBtn = document.querySelector('.section-testimonial .left');
const nextBtn = document.querySelector('.section-testimonial .right');

function updateCarousel() {
    if (!carousel || cards.length === 0) return;
    
    // Scroll the current card into view centered
    cards[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(cards.length - 1, currentIndex + 1);
        updateCarousel();
    });
}

// Dot navigation
if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
}