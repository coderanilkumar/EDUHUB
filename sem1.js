// Add interactivity to the buttons (optional)
document.querySelectorAll('.box-btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked:', button.textContent);
    });
});