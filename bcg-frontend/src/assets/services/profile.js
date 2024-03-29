import axios from 'axios';
import { authHeaderMaker } from '../config/tokens';
import { json } from 'react-router-dom';

const REST_API_BASE_URL = 'http://localhost:8080/api/profile';
const headers = authHeaderMaker(); // Call the function to get headers

//get user details with jwt user id
export const getUserDetails = async () => {
  // console.log("hai")
    try {
        const response = await axios.get(REST_API_BASE_URL, { headers });
        localStorage.setItem('userId', JSON.stringify(response.data.id));
        localStorage.setItem('ut',(response.data.userType));
         console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:');
       // throw error; // Rethrow the error to handle it further if needed
    }
};

export const createProfile = (profile) => axios.post(REST_API_BASE_URL, profile, { headers });

export const updateProfileAPI = (newprofile, profileId) => axios.put(REST_API_BASE_URL + '/' + profileId, newprofile, { headers });



export const getProfileData = (userId) => axios.get(REST_API_BASE_URL + '/' + userId, { headers });

