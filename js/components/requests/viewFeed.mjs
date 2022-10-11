const API_BASE_URL = 'https://nf-api.onrender.com';

// Endpoint: /api/v1/social/posts/

const viewFeedEndPoint = `${API_BASE_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`;

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

getPosts(viewFeedEndPoint);

const postsContainer = document.getElementById('feedContainer');

function viewContent(posts) {
    postsContainer.innerHTML += '';

    if(posts) {
        posts.map((post) => {
            let date = new Date(`${post.created}`);

            postsContainer.innerHTML +=
            `<div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${post.author.name}</h5>
                    <p class="card-text"><p class="card-text">${post.body}</p></p>
                    <p class="card-text"><small class="text-muted">${date}</small></p>
                </div>
            </div>
            `
        })
    }

}
