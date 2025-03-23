// Add click event listeners to all roadmap buttons
document.querySelectorAll('.roadmap-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link'); // Get the link from the data-link attribute
        window.open(link, '_blank'); // Open the link in a new tab
    });
});


// Add click event listeners to all resource buttons
document.querySelectorAll('.resource-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('onclick');
        console.log(`Redirecting to: ${link}`);
    });
});