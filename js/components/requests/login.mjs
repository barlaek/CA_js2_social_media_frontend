const API_BASE_URL = 'https://nf-api.onrender.com';

const form = document.getElementById('logForm');

/**
 * Attaches eventListener to the button
 * @param {event} takes an event param
 * 
 * Posts the data to the server, also taking a
 * @param {user}
 * 
 * Sets the accessToken to localStorage and redirects the user
 */

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
        const json = await response.json();
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
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