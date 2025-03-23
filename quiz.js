// Function to check the answer
function checkAnswer(button) {
    const isCorrect = button.getAttribute('data-correct') === 'true';
    const resultDiv = document.getElementById('result');

    if (isCorrect) {
        resultDiv.textContent = 'Correct! 🎉 +2 Marks';
        resultDiv.style.color = '#2ecc71'; // Green for correct
    } else {
        resultDiv.textContent = 'Wrong! ❌ -1 Mark';
        resultDiv.style.color = '#e74c3c'; // Red for wrong
    }

    // Disable all buttons after answering
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);
}