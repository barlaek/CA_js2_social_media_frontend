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
    } catch(error) {
        console.log(error)
    }
}

getPosts(`${API_BASE_URL}/api/v1/social/posts/`);