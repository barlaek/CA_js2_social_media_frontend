
import { postsURL } from "./api.mjs";

// const viewFeedEndPoint = `${postsURL}/?_author=true&_comments=true&_reactions=true`;
const token = localStorage.getItem('accessToken');
const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
};
export const postsContainer = document.getElementById('feedContainer');
const search = document.getElementById('search');

let posts = [];

search.addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredPosts = posts.filter(post => {
        return (post.title.toLowerCase().includes(searchString) || post.owner.toLowerCase().includes(search))
    });
    viewContent(filteredPosts);
})

async function getPosts(url) {

    try{
        const response = await fetch(url, getOptions)
        posts = await response.json();
        if(response.ok) {
            viewContent(posts);
        }

        console.log(response);
    } catch(error) {
        console.log(error)
    }
}

getPosts(postsURL);

export function viewContent(posts) {
    postsContainer.innerHTML += '';

    if(posts) {
        posts.map((post) => {
            let date = new Date(`${post.created}`);

            postsContainer.innerHTML +=
            `<a class="card mb-4 text-decoration-none text-reset" href="singlePost.html?id=${post.id}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text"><p class="card-text">${post.body}</p></p>
                    <p class="card-text"><small class="text-muted">${date}</small></p>
                </div>
            </a>
            `
        })
    }
}