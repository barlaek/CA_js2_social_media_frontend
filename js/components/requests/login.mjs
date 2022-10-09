const API_BASE_URL = 'https://nf-api.onrender.com';

// Endpoint: /api/v1/social/auth/login

const form = document.getElementById('logForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const user = {
        email: form.userEmail.value,
        password: form.userPw.value,
    }

    console.log(user);

    async function loginUser(user) {
        const loginOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        };

        const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/login`, loginOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
        console.log(accessToken);
        if(accessToken) {
            window.location.href='/content-feed.html';
        }
    }
    loginUser(user);
})

// Test user:
// test_bombadil
// bombadil_test@noroff.no
// 12345678