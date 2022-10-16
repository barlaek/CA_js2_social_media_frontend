import { postsURL } from './api.mjs';
import { token, profileOptions } from '../utilities/localStorage.mjs';

const singPost = document.getElementById('singPost');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get('id');

const url = `${postsURL}/${id}`;

console.log(url);

async function getSinglePost() {
    try {

        const response = await fetch(url, profileOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);

        if(response.ok) {
            displayPost(json);
            // updatePost(json);
        }
    } catch(error) {
        console.log(error)
    }
}

getSinglePost();

// async function updatePost(data) {
//     try {

//         const upDateBody = {
//             title: data.title,
//             body: data.body,
//         };

//         const updateOptions = {
//             method: 'PUT',
//             header: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token},`
//             },
//             body: JSON.stringify(upDateBody),
//         };

//         const response = await fetch(url, updateOptions);
//         console.log(response);
//         const json = await response.json();
//         console.log(json);

//     } catch(error) {
//         console.log(error)
//     }

// }


function displayPost(post) {
    singPost.innerHTML +=
    `<div class="card mb-4" id="updateForm">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text"><p class="card-text">${post.body}</p></p>
            <p class="card-text"><small class="text-muted">${post.created}</small></p>
            <input id="update" class="form-control col text-muted" type="text" placeholder="Update post">
            <button type="submit" class="btn btn-warning col-2" id="updatePost">Update</button>
        </div>
    </div>
    `
}

const form = document.getElementById('singPost');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const newUpdate = {
        title: '',
        body: form.update.value,
    };

    if(updatePost(newUpdate)){
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
    };

    form.reset();
});

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
        console.log(response);
        const json = await response.json();
        console.log(json);

    } catch(error) {
        console.log(error)
    }
}