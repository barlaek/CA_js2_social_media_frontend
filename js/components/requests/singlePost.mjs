import { postsURL } from './api.mjs';
import { token, profileOptions } from '../utilities/localStorage.mjs';

const singPost = document.getElementById('singPost');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get('id');

const url = `${postsURL}/${id}`;

/**
 * Function that GETS the endpoint
 */

async function getSinglePost() {
    try {
        const response = await fetch(url, profileOptions);
        const json = await response.json();

        if(response.ok) {
            displayPost(json);
        }
    } catch(error) {
        console.log(error)
    }
}

getSinglePost();

/**
 * Populates the DOM
 * @param {endpoint} post 
 */

function displayPost(post) {
    singPost.innerHTML +=
    `<div class="card mb-4" id="updateForm">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text"><p class="card-text">${post.body}</p></p>
            <p class="card-text"><small class="text-muted">${post.created}</small></p>
            <input id="update" class="form-control col text-muted" type="text" placeholder="Update post">
            <button type="submit" class="btn btn-warning col-2 mt-2" id="updatePost">Update post</button>
            <button type="submit" class="btn btn-warning col-2 mt-2" id="deletePost">Delete post</button>
        </div>
    </div>
    `
}

const form = document.getElementById('singPost');

/**
 * Form event that updates a post
 */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const newUpdate = {
        title: '',
        body: form.update.value,
    };

    if(updatePost(newUpdate) || deletePost()){
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    form.reset();
});

/**
 * Function that updates a post. Takes one parameter that we pass the
 * @param {newUpdate} data from the form event into
 */

async function updatePost(data) {
    try {
        
        const updateOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, updateOptions);
        const json = await response.json();

    } catch(error) {
        console.log(error)
    }
}

/**
 * Function that deletes a post
 */

async function deletePost() {
    try {
        
        const updateOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, updateOptions);
        const json = await response.json();

    } catch(error) {
        console.log(error)
    }
}