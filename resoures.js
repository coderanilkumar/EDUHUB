// Add click event listeners to all resource buttons
document.querySelectorAll('.resource-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('onclick');
        console.log(`Redirecting to: ${link}`);
    });
});