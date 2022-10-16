
import { postsURL } from "./api.mjs";

const viewFeedEndPoint = `${postsURL}/?_author=true&_comments=true&_reactions=true`;
const token = localStorage.getItem('accessToken');
const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
};
export const postsContainer = document.getElementById('feedContainer');

async function getPosts(url) {

    try{
        const response = await fetch(url, getOptions)
        const json = await response.json();
        if(response.ok) {
            viewContent(json);
        }
    } catch(error) {
        console.log(error)
    }
}

getPosts(viewFeedEndPoint);

export function viewContent(posts) {
    postsContainer.innerHTML += '';

    if(posts) {
        posts.map((post) => {
            let date = new Date(`${post.created}`);

            postsContainer.innerHTML +=
            `<a class="card mb-4 text-decoration-none text-reset" href="singlePost.html?id=${post.id}">
                <div class="card-body">
                    <h5 class="card-title">${post.author.name}</h5>
                    <p class="card-text"><p class="card-text">${post.body}</p></p>
                    <p class="card-text"><small class="text-muted">${date}</small></p>
                </div>
            </a>
            `
        })
    }
}

const search = document.getElementById('search');
const searchMenu = document.getElementById('searchMenu');
const searchCard = document.getElementById('searchCard');

async function searchPosts(url) {
    try {
        const response = await fetch(url, getOptions)
        const json = await response.json();
        console.log(json)

        search.addEventListener('input', (event) => {
            const value = event.target.value.toLowerCase();
            if(value) {
                viewSearch(json);
            }
        })
    } catch(error) {
        console.log(error)
    }
}

searchPosts(postsURL);

function viewSearch(posts) {
    searchMenu.innerHTML += '';
    posts.map((post) => {
        searchMenu.innerHTML +=
            `<li id="searchCard">
                <a id="searchBody">${post.id}</a>
            </li>
            `
    })
}


// search.addEventListener('input', (event) => {
//     const value = event.target.value.toLowerCase();
//     posts.forEach(post => {
//         const isVisible = post.id.toLowerCase.includes(value);
//         post.element.classList.toggle('hide', !isVisible)
//     })
// })

// fetch(postsURL, getOptions)
//     .then(response => response.json())
//     .then(data => {
//         posts = data.map(post => {
//             const card = searchCard.content.cloneNode(true).children[0];
//             const body = card.getElementById('searchBody');
//             body.textContent = post.id;
//             searchMenu.append(card);
//             return { id: post.id, element: card};
//         })
//     })

// search.addEventListener('input', async (event) => {
//     event.preventDefault();
//     const value = event.target.value;
//     if(value) {
//         const response = await fetch(postsURL, getOptions)
//         const filteredResponse = response.filter((item) => {
//             if(
//                 item.title.toLowerCase().includes(value.toLowerCase()) ||
//                 item.body.toLowerCase().includes(value.toLowerCase()) ||
//                 item.id.toLowerCase().includes(value.toLowerCase()) ||
//                 item.owner.toLowerCase().includes(value.toLowerCase())
//                 ) {
//                     return item;
//                 }

//         });
//         console.log(filteredResponse);
//     }
// })