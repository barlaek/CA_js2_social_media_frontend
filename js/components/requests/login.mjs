const API_BASE_URL = 'https://nf-api.onrender.com';

// Endpoint: /api/v1/social/auth/login

const form = document.getElementById('logForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const user = {
        email: form.userEmail.target,
        password: form.userPw.target,
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
    }
    loginUser(user);
})

// const userLogin = document.getElementById('userLogin');
// const userEmail = document.getElementById('userEmail').value;
// const userPw = document.getElementById('userPw').value;

// async function loginUser(event) {
//     event.preventDefault();

//     const postData = JSON.stringify({
//         email: userEmail,
//         email: userPw
//     });

//     const postOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: postData,
//     };

//     try {
//         const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/login`, postOptions);
//         console.log(response);
//         const json = await response.json();
//         console.log(json);

//         const accessToken = json.accessToken;
//         localStorage.setItem('accessToken', accessToken);
//         console.log(accessToken);

//     } catch(error) {
//         console.log(error);
//     }
// }

// userLogin.addEventListener('submit', loginUser);