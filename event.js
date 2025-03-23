// Add click event listeners to all event buttons
document.querySelectorAll('.event-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link'); // Get the link from the data-link attribute
        window.open(link, '_blank'); // Open the link in a new tab
    });
});

// Add click event listeners to all community buttons
document.querySelectorAll('.community-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('onclick');
        console.log(`Redirecting to: ${link}`);
    });
});


// JavaScript for Event Page

// Function to handle navigation for the Home button
const homeButton = document.querySelector('.home-btn');
homeButton.addEventListener('click', () => {
    const homeLink = homeButton.getAttribute('data-link'); // Get the link from the data-link attribute
    window.location.href = homeLink; // Navigate to the home page
});

// Function to handle navigation for event buttons
const eventButtons = document.querySelectorAll('.event-btn');
eventButtons.forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link'); // Get the link from the data-link attribute
        window.open(link, '_blank'); // Open the link in a new tab
    });
});