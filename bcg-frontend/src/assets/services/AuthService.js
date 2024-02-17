import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; // Backend API URL

class AuthService {

    async login(email, password) {
        const response = await axios
            .post(API_URL + '/signin', {
                email,
                password
            });
        console.log(response.data)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data.token));
            // console.log("==========>", user);
            //console.log (JSON.parse(localStorage.getItem('user')));
        }
        console.log(response.data);
        return response.data;
    }

    logout() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("User logged out:", user);
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
