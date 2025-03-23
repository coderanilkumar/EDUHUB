// Add click event listeners to all "Read More" buttons
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('onclick');
        console.log(`Redirecting to: ${link}`);
    });
});