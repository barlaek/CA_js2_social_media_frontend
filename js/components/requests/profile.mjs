
import { profilesUrl } from "./api.mjs";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const name = params.get('name');

// console.log(name);

// async function getProfile() {
//     try{
//         const token = localStorage.getItem('accessToken')
        
//         const profileOptions = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//         };

//         const response = await fetch(`${API_BASE_URL}/api/v1/social/profiles/${name}?_posts=true&_following=true&_followers=true`, profileOptions)
//         console.log(response);
//         const json = await response.json();
//         console.log(json);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getProfile();

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