import axios from "axios";

// class User {

//     API_BASE_URL = "http://localhost:8080";

//     jwtToken = localStorage.getItem("user")

//     getCurrentUser() {
//         return JSON.parse(localStorage.getItem('user'));
//     }

//     // api = axios.create({
//     //     baseURL: {API_BASE_URL},
//     //     headers: {
//     //         "Authorization": `bearer ${jwtToken}`,
//     //         "Content-Type": "application/json"
//     //     }
//     // })
// }

export const getProfileAction = (jwt) => async () => {
    const API_BASE_URL = "http://localhost:8080";

    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
            Authorization: `bearer ${jwt}`,
        },
    });

    console.log("profile --------", data);

};

const getUserDetails = (jwt) => axios.get(`${API_BASE_URL}/api/users/profile`, {
    headers: {
        Authorization: `bearer ${jwt}`,
    },
});

// export default new User;
