// 1. Theme Toggle
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('light-theme');
};

// 2. Navigation
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 3. Calculator
const checks = document.querySelectorAll('.service-check');
const totalLabel = document.getElementById('total-price');

checks.forEach(c => c.onchange = () => {
    let total = 0;
    checks.forEach(i => { if(i.checked) total += parseInt(i.dataset.price); });
    totalLabel.innerText = `$${total}`;
});

// 4. Calendar Slots
const slots = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];
const slotBox = document.getElementById('time-slots');
const bookBtn = document.getElementById('book-btn');

slots.forEach(t => {
    const btn = document.createElement('div');
    btn.className = 'slot';
    btn.innerText = t;
    btn.onclick = () => {
        document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
        btn.classList.add('selected');
        bookBtn.disabled = false;
    };
    slotBox.appendChild(btn);
});

bookBtn.onclick = () => {
    document.getElementById('appt-feedback').innerText = "Booking confirmed! Check your email.";
    document.getElementById('appt-feedback').classList.remove('hidden');
};

// 5. Modals
const data = {
    automation: { title: "Automation", body: "We build AI agents to handle your repetitive tasks." },
    software: { title: "Consulting", body: "Architecture reviews and tech-stack modernizing." }
};

function openModal(t) {
    document.getElementById('modalTitle').innerText = data[t].title;
    document.getElementById('modalBody').innerText = data[t].body;
    document.getElementById('serviceModal').style.display = 'block';
}
function closeModal() { document.getElementById('serviceModal').style.display = 'none'; }

// 6. Live Chat
function toggleChat() {
    document.getElementById('chat-widget').classList.toggle('chat-closed');
    document.getElementById('chat-body').classList.toggle('hidden');
}

function sendChat(e) {
    e.stopPropagation();
    const input = document.getElementById('chat-input');
    const history = document.getElementById('chat-history');
    if(!input.value) return;

    history.innerHTML += `<div class="message user">${input.value}</div>`;
    const msg = input.value.toLowerCase();
    input.value = "";

    setTimeout(() => {
        let reply = "Thanks! A human will be with you shortly.";
        if(msg.includes("hello")) reply = "Hi! How can MAX Labs help?";
        if(msg.includes("price")) reply = "Check our estimator above!";
        history.innerHTML += `<div class="message bot">${reply}</div>`;
        history.scrollTop = history.scrollHeight;
    }, 800);
}