import axios from 'axios';
import { authHeaderMaker } from '../config/tokens';
import {getUserDetails} from './profile';

const API_URL = 'http://localhost:8080/auth'; // Backend API URL
const REST_API_BASE_URL = 'http://localhost:8080/api/profile';
const headers = authHeaderMaker();

class AuthService {

    async login(email, password) {
        
        const response = await axios
            .post(API_URL + '/signin', {
                email,
                password
            });
        //console.log(response.data)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data.token));

            //await getUserDetails();

            // try {
            //     const response = await axios.get(REST_API_BASE_URL, { headers });
            //     localStorage.setItem('userId', JSON.stringify(response.data.id));
            //     localStorage.setItem('ut',(response.data.userType));
            //      console.log(response.data);
            //     return response.data;
            // } catch (error) {
            //     console.error('Error fetching user details:', error);
            //     throw error; // Rethrow the error to handle it further if needed
            // }
        }
        //console.log(response.data);
        //await getUserDetails();
        //  return response.data;
    }

    logout() {
        // const user = JSON.parse(localStorage.getItem('user'));
        // console.log("User logged out:", user);
        // localStorage.removeItem('user');
        // localStorage.removeItem('userId');
        // localStorage.removeItem('ut')
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            localStorage.removeItem(key);
        });
    
        console.log("User logged out successfully");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
