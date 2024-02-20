import axios from 'axios';
import { authHeaderMaker } from '../config/tokens';

const REST_API_BASE_URL = 'http://localhost:8080/api/profile';
const headers = authHeaderMaker(); // Call the function to get headers

//get user details with jwt user id
export const getUserDetails = async () => {
    try {
        const response = await axios.get(REST_API_BASE_URL, { headers });
        localStorage.setItem('userId', JSON.stringify(response.data.id));
       // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error; // Rethrow the error to handle it further if needed
    }
};

export const createProfile = (profile) => {
    console.log(profile, { headers });
    // Make the POST request with the profile data and headers
    return axios.post(REST_API_BASE_URL, profile, { headers });
};


export const getProfileData = (userId) => axios.get(REST_API_BASE_URL + '/' + userId, { headers });
