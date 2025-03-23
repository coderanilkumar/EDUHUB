document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login (you can replace this with actual authentication logic)
    if (email === 'test@example.com' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});