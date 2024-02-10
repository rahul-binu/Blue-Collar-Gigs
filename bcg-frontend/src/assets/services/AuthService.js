import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Backend API URL

class AuthService {

    async login(email, password) {
        const response = await axios
            .post(API_URL + '/login', {
                email,
                password
            });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
