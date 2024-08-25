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
