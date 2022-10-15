
import { profilesUrl } from "./api.mjs";
import { viewContent, postsContainer } from "./viewFeed.mjs";

const friends = document.getElementById('friendsOnline');
const idCard = document.getElementById('idCard');
const profilePosts = document.getElementById('profilePosts');


async function getAllProfiles() {
    try {
        const singleProfile = `${profilesUrl}?name=${name}_posts=true&_following=true&_followers=true`;
        const token = localStorage.getItem('accessToken')

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${singleProfile}`, options);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            getFriends(json);
            getSingleProfile(json);
            getDetails(json);
            viewContent(json);
        }


    } catch(error) {
        console.log(error)
    }
}

getAllProfiles();

// async function getSingleProfile(name) {
//     try{

//         const singleProfile = `${profilesUrl}?name=${name.name}_posts=true&_following=true&_followers=true`;

//         const token = localStorage.getItem('accessToken')

//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//         };

//         const response = await fetch(`${singleProfile}`, options);
//         console.log(response)
//         const json = await response.json();
//         console.log(json)

//         if(response.ok) {
//             getDetails(json);
//             viewContent(json);
//         }

//     } catch(error) {
//         console.log(error)
//     }
// }


function getFriends(name) {

    friends.innerHTML += '';

    if(name) {
        name.map((name) => {
            friends.innerHTML += `
            <a href="profile.html?name=${name.name}" class="list-group-item list-group-item-action py-3 lh-sm">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">${name.name}</strong>
                </div>
            </a>`
        });
    }
}

function getDetails(data) {
    idCard.innerHTML += '';
        if(data) {
            data.map((data) => {
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
            })
        }
}