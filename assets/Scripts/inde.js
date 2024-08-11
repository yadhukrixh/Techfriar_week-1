document.addEventListener('DOMContentLoaded', () => {
    let navbarToggle = document.querySelector('.menu-toggle');
    let navLinks = document.querySelector('.nav-links');
    navbarToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');        
        navbarToggle.classList.toggle('active');
    });
});












