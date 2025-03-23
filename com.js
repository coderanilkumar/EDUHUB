// Example: Log a message when a button is clicked
document.querySelectorAll('.resource-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Resource button clicked:', button.textContent);
    });
});