// const API_BASE_URL = 'https://nf-api.onrender.com';

// const postEndPoint = `${API_BASE_URL}/api/v1/social/posts/`;

// console.log(postEndPoint);

// const form = document.getElementById('postForm');
// const postsContainer = document.getElementById('feedContainer');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const form = event.target;

//     const newPost = {
//         body: form.newPost.value,
//     };

//     console.log(newPost);

//     async function createPost(newPost) {
//         try {

//         const token  = localStorage.getItem('accessToken');

//         const postOptions = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(newPost),
//         };
            
//             const response = await fetch(postEndPoint, postOptions);
//             console.log(response);
//             const json = await response.json();
//             console.log(json);

//         } catch(error) {
//             console.log(error);
//         }
//     }
//     createPost(newPost);
// })
const API_BASE_URL = 'https://nf-api.onrender.com';

const postFeedEndPoint = `${API_BASE_URL}/api/v1/social/posts`;

const form = document.getElementById('postForm');

form.addEventListener('submit', (event ) => {
    event.preventDefault();

    const form = event.target;

    const postObject = {
        title: form.title.value,
        body: form.newPost.value,
    }

    createPost(postObject);
});

async function createPost(postObject) {
    try {
        const token = localStorage.getItem('accessToken');
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postObject),
        };

        const response = await fetch(postFeedEndPoint, postOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        return json;
    } catch(error) {
        console.log(error);
    }
}

