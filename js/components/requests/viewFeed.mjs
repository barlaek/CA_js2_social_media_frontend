
import { postsURL } from "./api.mjs";

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
const filterButton = document.getElementById('filter');

let posts = [];

/**
 * search function that takes one param
 * @param {event} attached to a keyup. Filters the target
 * taking a @param {post} parameter
 */

search.addEventListener('keyup', (event) => {
    const searchString = event.target.value.toLowerCase();
    const filteredPosts = posts.filter((post) => {
        return (post.title.toString().toLowerCase().includes(searchString))
        });
    console.log(filteredPosts);
    viewContent(filteredPosts);
})

/**
 * Similar to the search function.
 * Takes an @param {event} parameter and filters through
 * @param {post} parameter that we pass into the viewContent function
 */

filterButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newest = posts.filter(post => post.id >= 7500)
    console.log(newest);
    viewContent(newest);
})

/**
 * Async function that takes one
 * @param {url} for a fetch request that takes two
 * @param {url} @param {getOptions} parameters 
 */

async function getPosts(url) {

    try{
        const response = await fetch(url, getOptions)
        posts = await response.json();
        viewContent(posts);
    } catch(error) {
        console.log(error)
    }
}

getPosts(`${postsURL}/`);

/**
 * This function populates the DOM when we pass in
 * @param {endpoint} posts 
 */

export function viewContent(posts) {
    postsContainer.innerHTML += '';

    if(posts) {
        posts.forEach(post => {
            let date = new Date(`${post.created}`);

            return postsContainer.innerHTML +=
            `<a class="card mb-4 text-decoration-none text-reset" href="singlePost.html?id=${post.id}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text"><p class="card-text">${post.body}</p></p>
                    <p class="card-text"><small class="text-muted">${date}</small></p>
                </div>
            </a>`
        })
    }
}