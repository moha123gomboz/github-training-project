// 1. تفاعل زر إلقاء التحية
const helloButton = document.getElementById('helloBtn');

helloButton.addEventListener('click', function() {
    alert('أهلاً بك في موقعي الشخصي! سعيد جداً بزيارتك.');
});

// 2. تحديث السنة الحالية تلقائياً في التذييل (Footer)
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();

yearSpan.textContent = currentYear;