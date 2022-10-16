/**
 * Form submission. Takes one
 * @param {event} and targets the values of the form
 * for the following function that posts to the registration endpoint.
 * registerUser takes one
 * @param {newUser} and we pass the form values into the newUser parameter to register the account
 * 
 */

const API_BASE_URL = 'https://nf-api.onrender.com';

const form = document.getElementById('regForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const newUser = {
        name: form.newName.value,
        email: form.newEmail.value,
        password: form.newPw.value,
    }

    async function registerUser(newUser) {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        };

        const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/register`, postOptions);
        const json = await response.json();

        if(json) {
            window.location.href='/index.html';
        }
    }
    registerUser(newUser);
})