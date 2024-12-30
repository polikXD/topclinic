// Добавляем динамичное поведение кнопки
document.getElementById('contact-button').addEventListener('click', function () {
    alert('Спасибо за интерес! Мы свяжемся с вами в ближайшее время.');
});

// Навигация с плавным скроллом
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
