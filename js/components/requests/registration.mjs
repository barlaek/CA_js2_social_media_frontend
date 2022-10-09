// Setting the base endpoint

const API_BASE_URL = 'https://nf-api.onrender.com';

//Register endpoint: /api/v1/social/auth/register

// Setting the input values for the newUser object

const form = document.getElementById('regForm');
const newName = document.getElementById('newName').value;
const newEmail = document.getElementById('newEmail').value;
const newPw = document.getElementById('newPw').value;

// Test object
// const userData = JSON.stringify({
//     name: "test_bombadil",
//     email: "bombadil_test@noroff.no",
//     password: "12345678"
// })

// Registration function

async function registerUser(event) {
    event.preventDefault();

    const testObject = JSON.stringify({
        name: newName,
        email: newEmail,
        password: newPw
    });

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: testObject,
    }   

    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/register`, postOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if(!json) {
            window.location.href="/index.html";
        }
    } catch(error) {
        console.log(error);
    }
}

form.addEventListener('submit', registerUser);