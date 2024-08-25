// Smooth Scrolling for the Menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Hide other sections and show the clicked one
        document.querySelectorAll('.content').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(this.getAttribute('href')).style.display = 'block';
    });
});

// Display the Home section by default
window.onload = function() {
    document.getElementById('home').style.display = 'block';
};

// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navMenu = document.querySelector('nav ul');

mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Hide Menu on Scroll Down
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        document.querySelector('header').style.top = "-100px"; // Hide menu
    } else {
        document.querySelector('header').style.top = "0"; // Show menu
    }
    lastScrollTop = scrollTop;
});
