window.onload = () => {
    let navbarToggle = document.querySelector('.menu-toggle');
    let navLinks = document.querySelector('.nav-links');

    if (navbarToggle && navLinks) {
        navbarToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');        
            navbarToggle.classList.toggle('active');
        });
    } else {
        console.error('Elements .menu-toggle or .nav-links not found');
    }
};
