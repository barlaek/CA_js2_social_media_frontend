export const token = localStorage.getItem('accessToken');
export const profileOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/js',
        Authorization: `Bearer ${token}`,
    },
}