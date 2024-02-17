import axios from 'axios';
import { authHeaderMaker } from '../config/tokens';

const REST_API_BASE_URL = 'http://localhost:8080/api/profile';

const headers = authHeaderMaker(); // Call the function to get headers

export const getUserDetails = () => axios.get(REST_API_BASE_URL, { headers })
    .then(response => {
        console.log(response.data);
        localStorage.setItem('userId', JSON.stringify(response.data.id));
        return response.data;
    });


export const createProfile = (profile) => {
    console.log(profile, { headers });
    // Make the POST request with the profile data and headers
    return axios.post(REST_API_BASE_URL, profile, { headers });
};