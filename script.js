// script.js
window.addEventListener('load', () => {
    const mainContent = document.querySelector('.main-content');

    setTimeout(() => {
        mainContent.classList.add('active'); // Основной контент открывается плавно
    }, 500); // Запуск через 0.5 секунды
});