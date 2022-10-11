const API_BASE_URL = 'https://nf-api.onrender.com';

// Endpoint: /api/v1/social/posts/

async function getPosts(url) {

    const token = localStorage.getItem('accessToken');

    console.log(token);

    const getOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    try{
        const response = await fetch(url, getOptions)
        console.log(response);
        const json = await response.json();
        console.log(json);
        if(response.ok) {
            viewContent(json);
        }
    } catch(error) {
        console.log(error)
    }
}

getPosts(`${API_BASE_URL}/api/v1/social/posts/`);

const postsContainer = document.getElementById('feedContainer');

function viewContent(posts) {
    for(let i = 0; i < i.length; i++) {
        postsContainer.innerHTML +=
        `<div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">${posts[i].title}</h5>
                <p class="card-text"><p class="card-text">${posts[i].body}</p></p>
                <p class="card-text"><small class="text-muted">${posts[i].created}</small></p>
            </div>
            <img src="..." class="card-img-bottom" alt="...">
        </div>
        `
    }
}