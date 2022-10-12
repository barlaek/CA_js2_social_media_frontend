
import { API_BASE_URL } from "./api.mjs";

// const API_BASE_URL = 'https://nf-api.onrender.com';

// Endpoint: /api/v1/social/posts/

const viewFeedEndPoint = `${API_BASE_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`;

async function getPosts(url) {

    const token = localStorage.getItem('accessToken');

    console.log(token);

    const getOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    try{
        const response = await fetch(url, getOptions)
        console.log(response);
        const json = await response.json();
        console.log(json);
        if(response.ok) {
            viewContent(json);
        }
    } catch(error) {
        console.log(error)
    }
}

getPosts(viewFeedEndPoint);

const postsContainer = document.getElementById('feedContainer');

function viewContent(posts) {
    postsContainer.innerHTML += '';

    if(posts) {
        posts.map((post) => {
            let date = new Date(`${post.created}`);

            postsContainer.innerHTML +=
            `<div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${post.author.name}</h5>
                    <p class="card-text"><p class="card-text">${post.body}</p></p>
                    <p class="card-text"><small class="text-muted">${date}</small></p>
                </div>
            </div>
            `
        })
    }
}

// const form = document.getElementById('postForm');

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
            
//             const response = await fetch(viewFeedEndPoint, postOptions);
//             console.log(response);
//             const json = await response.json();
//             console.log(json);

//         } catch(error) {
//             console.log(error);
//         }
//     }
//     viewContent(createPost(newPost));
//     form.reset();
// })
