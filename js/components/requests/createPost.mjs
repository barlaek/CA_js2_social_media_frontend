
const API_BASE_URL = 'https://nf-api.onrender.com';

const postFeedEndPoint = `${API_BASE_URL}/api/v1/social/posts`;

const form = document.getElementById('postForm');

form.addEventListener('submit', (event ) => {
    event.preventDefault();

    const form = event.target;

    const postObject = {
        title: '',
        body: form.newPost.value,
    }

    if(createPost(postObject)){
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    form.reset();
});

async function createPost(postObject) {
    try {
        const token = localStorage.getItem('accessToken');
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postObject),
        };

        const response = await fetch(postFeedEndPoint, postOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        return json;
    } catch(error) {
        console.log(error);
    }
}

