// Add click event listeners to all community buttons
document.querySelectorAll('.community-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('onclick');
        console.log(`Redirecting to: ${link}`);
    });
});