// Add click event listeners to all buttons
document.querySelectorAll('.tool-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link'); // Get the link from the data-link attribute
        window.open(link, '_blank'); // Open the link in a new tab
    });
});
// Add click event listener to the Home button
document.querySelector('.home-btn').addEventListener('click', () => {
    const link = document.querySelector('.home-btn').getAttribute('data-link'); // Get the link from data-link attribute
    window.location.href = link; // Navigate to the home page
});