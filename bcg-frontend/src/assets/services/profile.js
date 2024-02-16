import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/profile';

export const createProfile = (profile) => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('user');

    // Set the request headers with the JWT token
    const headers = {
        Authorization: `Bearer ${token}`
    };
    console.log(profile,{headers});

    // Make the POST request with the profile data and headers
    return axios.post(REST_API_BASE_URL, profile, { headers });
};