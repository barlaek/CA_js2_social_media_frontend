import { profilesUrl } from "./api.mjs";

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
        const token = localStorage.getItem('accessToken');

        const profileOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/js',
                Authorization: `Bearer ${token}`,
            },
        }

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