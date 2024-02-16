import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; // Backend API URL

class AuthService {

    async login(email, password) {
        const response = await axios
            .post(API_URL + '/signin', {
                email,
                password
            });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data.accessToken));
            console.log("==========>", response.data.accessToken);
        }
        console.log(response.data);
        return response.data;
    }

    logout() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("User logged :", user);
        localStorage.removeItem('user');
        console.log("User logged out:", user);
    }

    logout2() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("User logged out:", user); // Log user before removing from local storage
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
