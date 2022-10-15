
import { profilesUrl } from "./api.mjs";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const name = params.get('name');

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
    } catch(error) {
        console.log(error)
    }
}

getAllProfiles();

async function getSingleProfile(name) {
    try{

        const singleProfile = `${profilesUrl}${name}`;

        const token = localStorage.getItem('accessToken')

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(singleProfile, options);
        console.log(response)
        const json = await response.json();
        console.log(json)

    } catch(error) {
        console.log(error)
    }
}