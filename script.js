// 1. Scroll Reveal Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Theme Toggle with LocalStorage
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

// 3. Dynamic Time Slots Generation
const slots = ["09:00 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];
const slotContainer = document.getElementById('time-slots');
const bookBtn = document.getElementById('book-btn');

slots.forEach(time => {
    const div = document.createElement('div');
    div.className = 'slot';
    div.innerText = time;
    div.onclick = () => {
        document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
        div.classList.add('selected');
        bookBtn.disabled = false;
    };
    slotContainer.appendChild(div);
});

// 4. Booking Success Experience
bookBtn.onclick = () => {
    document.getElementById('success-overlay').classList.remove('hidden');
};

function closeSuccess() {
    document.getElementById('success-overlay').classList.add('hidden');
    // Reset selections
    document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
    bookBtn.disabled = true;
}

// 5. Smooth Scroll Helper
function scrollToSection(id) {
    const target = document.getElementById(id);
    const offset = 80; // Navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// 6. Calculator ROI logic
const checks = document.querySelectorAll('.service-check');
const totalDisplay = document.getElementById('total-price');

checks.forEach(c => {
    c.addEventListener('change', () => {
        let total = 0;
        checks.forEach(check => {
            if(check.checked) total += parseInt(check.dataset.price);
        });
        totalDisplay.innerText = `$${total.toLocaleString()}`;
    });
});
