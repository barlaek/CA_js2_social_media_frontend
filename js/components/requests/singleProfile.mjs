import { profilesUrl } from "./api.mjs";
import { profileOptions } from "../utilities/localStorage.mjs";

const idCard = document.getElementById('idCard');
const profilePosts = document.getElementById('profilePosts');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const name = params.get('name');

console.log(name);

const url = `${profilesUrl}/${name}`;

console.log(url);

async function getSingleProfile() {
    try {
        const response = await fetch(url, profileOptions);
        const json = await response.json();
        console.log(json);
        if(response.ok) {
            getDetails(json)
        }

    } catch(error) {
        console.log(error)
    }
}

getSingleProfile();

async function getProfilePosts() {
    try{
        const response = await fetch(`${url}?_posts=true&_following=true&_followers=true`, profileOptions);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            getPosts(json);
        }
    } catch(error) {
        console.log
    }
}

getProfilePosts();

function getDetails(data) {
        idCard.innerHTML +=
            `<div class="card mt-4">
                <img src="images/profil.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor bibendum ipsum ac tincidunt.</p>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor bibendum ipsum ac tincidunt.</p>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor bibendum ipsum ac tincidunt.</p>
                </div>
            </div>
        `
}

function getPosts(posts) {
    profilePosts.innerHTML += 
        `<div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">${posts.title}</h5>
                <p class="card-text"><p class="card-text">${posts.body}</p></p>
                <p class="card-text"><small class="text-muted">${posts.created}</small></p>
            </div>
        </div>
        `
}