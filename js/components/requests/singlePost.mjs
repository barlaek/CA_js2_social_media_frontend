import { postsURL } from './api.mjs';

const singPost = document.getElementById('singPost');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get('id');

const url = `${postsURL}/${id}`;

console.log(url);

async function getSinglePost() {
    try {
        const token = localStorage.getItem('accessToken');

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/js',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            displayPost(json);
        }
    } catch(error) {
        console.log(error)
    }
}

getSinglePost();

function displayPost(post) {
    singPost.innerHTML +=
    `<div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text"><p class="card-text">${post.body}</p></p>
            <p class="card-text"><small class="text-muted">${post.created}</small></p>
        </div>
    </div>
    `
}
