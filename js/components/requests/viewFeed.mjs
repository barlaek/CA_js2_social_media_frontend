
import { postsURL } from "./api.mjs";

const viewFeedEndPoint = `${postsURL}/?_author=true&_comments=true&_reactions=true`;

const token = localStorage.getItem('accessToken');

let posts = [];

const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
};

async function getPosts(url) {

    try{
        const response = await fetch(url, getOptions)
        // console.log(response);
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

export const postsContainer = document.getElementById('feedContainer');

export function viewContent(posts) {
    postsContainer.innerHTML += '';

    if(posts) {
        posts.map((post) => {
            let date = new Date(`${post.created}`);

            postsContainer.innerHTML +=
            `<a class="card mb-4 text-decoration-none text-reset" href="singlePost.html?id=${post.id}">
                <div class="card-body">
                    <h5 class="card-title">${post.author.name}</h5>
                    <p class="card-text"><p class="card-text">${post.body}</p></p>
                    <p class="card-text"><small class="text-muted">${date}</small></p>
                </div>
            </a>
            `
        })
    }
}

const searchForm = document.getElementById('searchForm');
const search = document.getElementById('search');

search.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    posts.forEach(post => {
        const isVisible = post.id.toLowerCase().includes(value) || post.author.name.toLowerCase().includes(value);
        post.element.classList.toggle('hide', !isVisible);
    })
})

async function searchPosts() {
    try {
        const response = await fetch(postsURL, getOptions);
        console.log(response)
        const json = await response.json();

    } catch(error) {
        console.log(error);
    }
}

searchPosts();