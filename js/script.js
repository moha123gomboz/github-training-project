const helloButton = document.getElementById('helloBtn');

helloButton.addEventListener('click', function() {
    alert('أهلاً بك في موقعي الشخصي! سعيد جداً بزيارتك.');
});

const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();

yearSpan.textContent = currentYear;