const API_BASE_URL = 'https://nf-api.onrender.com';

const postEndPoint = `${API_BASE_URL}/api/v1/social/posts/`;

console.log(postEndPoint);

const form = document.getElementById('createPost');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    const newPost = {
        body: form.newPost.value,
    };

    console.log(newPost);

    async function createPost(newPost) {
        try {

            const token  = localStorage.getItem('accessToken');

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newPost),
        };
            
            const response = await fetch(postEndPoint, postOptions);
            console.log(response);
            const json = await response.json();
            console.log(json);

        } catch(error) {
            console.log(error);
        }
    }
    createPost(newPost);
})