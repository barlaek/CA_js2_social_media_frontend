// Setting the base endpoint

const API_BASE_URL = 'https://nf-api.onrender.com';

//Register endpoint: /api/v1/social/auth/register

const form = document.getElementById('regForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const newUser = {
        name: form.newName.value,
        email: form.newEmail.value,
        password: form.newPw.value,
    }

    console.log(newUser);

    async function registerUser(newUser) {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        };

        const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/register`, postOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            window.location.href='/index.html';
        }
    }
    registerUser(newUser);
})