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
    document.getElementById('about').style.display = 'block';
};


// Hide Menu on Scroll Down, Make Transparent While Scrolling, and Hide at Bottom
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        document.querySelector('header').style.top = "-1000px"; // Hide menu
    } else {
        // Scrolling up
        document.querySelector('header').style.top = "0"; // Show menu
    }

    lastScrollTop = scrollTop;
});


// Lightbox functionality
document.querySelectorAll('.certificates-gallery a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';

        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';

        const img = document.createElement('img');
        img.src = this.href;
        img.alt = this.querySelector('img').alt;

        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-lightbox';
        closeBtn.textContent = '×';

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.removeChild(lightbox);
        });

        lightboxContent.appendChild(img);
        lightboxContent.appendChild(closeBtn);
        lightbox.appendChild(lightboxContent);

        document.body.appendChild(lightbox);
        lightbox.style.display = 'flex';
    });
});

// JavaScript to handle lightbox and zooming
document.querySelectorAll('.certificate-item img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = this.src; // Set the lightbox image src to the clicked image src

        // Check if the image is portrait and apply the class if needed
        if (this.naturalHeight > this.naturalWidth) {
            lightboxImg.style.maxWidth = '60vw'; // Smaller width for portrait images
            lightboxImg.style.maxHeight = '80vh'; // Maintain height
        } else {
            lightboxImg.style.maxWidth = '80vw'; // Default width for landscape images
            lightboxImg.style.maxHeight = '80vh'; // Maintain height
        }

        lightbox.style.display = 'flex'; // Show the lightbox
    });
});

document.querySelector('.close-lightbox').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none'; // Hide the lightbox
});

// Add zoom functionality to the lightbox image
let scale = 1;
const zoomStep = 0.1;
const lightboxImg = document.getElementById('lightbox-img');

lightboxImg.addEventListener('wheel', function(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
        scale += zoomStep; // Zoom in
    } else {
        scale = Math.max(scale - zoomStep, 1); // Zoom out, but not smaller than original size
    }
    lightboxImg.style.transform = `scale(${scale})`;
});








