
document.getElementById('darkModeBtn').addEventListener('click', function () {
    const body = document.body;

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Change the button icon dynamically
    const icon = this.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});


document.querySelectorAll('.auth-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-href'); // Get the link from data-href
        if (target) {
            window.location.href = target; // Navigate to the target link
        }
    });
});


// Add click event listeners to all box buttons
document.querySelectorAll('.box-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link'); // Get the link from the button
        if (link) {
            window.open(link, '_blank'); // Open the link in a new tab
        }
    });
});

// Select carousel elements
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; // Track the current image index
const totalImages = images.length; // Total number of images

// Function to show the current image
function showImage(index) {
    carouselImages.style.transform = `translateX(-${index * 100}%)`; // Slide to the selected image
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    showImage(currentIndex);
}

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image
    showImage(currentIndex);
}

// Add event listeners to navigation buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Automatically change images every 5 seconds
setInterval(nextImage, 5000);



// Add interactivity to the course buttons
document.querySelectorAll('.course-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Course button clicked:', button.textContent);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let courseSection = document.querySelector(".course-info-container");
    courseSection.style.marginTop = "50px";
});

// Get elements
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbotBtn = document.getElementById('close-chatbot');

// Open chatbot window
chatbotBtn.addEventListener('click', () => {
    chatbotWindow.classList.add('open');
});

// Close chatbot window
closeChatbotBtn.addEventListener('click', () => {
    chatbotWindow.classList.remove('open');
});

