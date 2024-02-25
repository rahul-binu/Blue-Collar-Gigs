import axios from 'axios';
import { getUserDetails } from './profile';

const API_URL = 'http://localhost:8080/auth'; // Backend API URL

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
           
            getUserDetails();
           //  console.log("==========>", response.data);
            //console.log (JSON.parse(localStorage.getItem('user')));
        }
        //console.log(response.data);
        //await getUserDetails();
       // return response.data;
    }

    logout() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("User logged out:", user);
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
        localStorage.removeItem('ut')
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
