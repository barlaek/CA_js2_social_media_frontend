
import { profilesUrl } from "./api.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');

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

        const response = await fetch(`${singleProfile}?_posts=true&_following=true&_followers=true`, options);
        console.log(response)
        const json = await response.json();
        console.log(json)

    } catch(error) {
        console.log(error)
    }
}