
import { profilesUrl } from "./api.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');

const friends = document.getElementById('friendsOnline');

async function getAllProfiles() {
    try {
        const token = localStorage.getItem('accessToken')

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${profilesUrl}`, options);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            getFriends(json);
        }

        getSingleProfile(json[1]);
    } catch(error) {
        console.log(error)
    }
}

getAllProfiles();

async function getSingleProfile(name) {
    try{

        const singleProfile = `${profilesUrl}/${name.name}`;

        const token = localStorage.getItem('accessToken')

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${singleProfile}`, options);
        console.log(response)
        const json = await response.json();
        console.log(json)

    } catch(error) {
        console.log(error)
    }
}

function getFriends(name) {

    friends.innerHTML += '';

    if(name) {
        name.map((name) => {
            friends.innerHTML += `
            <a href="profile.html/${name.name}" class="list-group-item list-group-item-action py-3 lh-sm">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">${name.name}</strong>
                </div>
            </a>`
        });
    }
}