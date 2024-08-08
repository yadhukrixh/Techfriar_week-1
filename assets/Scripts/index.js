document.addEventListener('DOMContentLoaded', () => {
    let menuToggle = document.querySelector('.menu-toggle');
    let navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');        
        menuToggle.classList.toggle('active');
    });
});












