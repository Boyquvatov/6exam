document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(errorData.message || 'Network response was not ok');
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('API Response:', data); // Log the response for debugging
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred: ' + error.message);
    });
});
