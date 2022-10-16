
import { profilesUrl } from "./api.mjs";

const friends = document.getElementById('friendsOnline');

async function getAllProfiles() {
    try {
        const token = localStorage.getItem('accessToken')

        friends.innerHTML += '';

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${profilesUrl}`, options);
        const profiles = await response.json();

        profiles.forEach(function(profile) {
            friends.innerHTML += 
            `<a href="profile.html?name=${profile.name}" class="list-group-item list-group-item-action py-3 lh-sm">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">${profile.name}</strong>
                </div>
            </a>
            `
        })

    } catch(error) {
        console.log(error)
    }
}

getAllProfiles();