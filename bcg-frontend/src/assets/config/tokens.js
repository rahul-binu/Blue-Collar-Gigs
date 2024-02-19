
// function authHeaderMaker() {

//     // const headers = {
//     //     Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJyYWh1bGJpbnVAZ21haWwuY29tIiwiaWF0IjoxNzA4MTc3MTY0LCJleHAiOjE3MDgyNjM1NjQsImVtYWlsIjoicmFodWxiaW51QGdtYWlsLmNvbSJ9.7tnwLjW7VEVY85WtawCth11utZZYmK4d1SB2TeoxGT7FmCUXOzC63oRtkpzKPNSM8HESQz5_MOs0s2G43uSevA`
//     // };

//     const jwtToken = localStorage.getItem("user");

//     const tokenWithoutQuotes = jwtToken.replace(/^"|"$/g, ''); // Remove surrounding quotes

//     const headers = {
//         Authorization: `Bearer ${tokenWithoutQuotes}`
//     };

//     return headers;
// }

export function authHeaderMaker() {
    const headers = null;
    const jwtToken = localStorage.getItem("user");
    if (jwtToken) {
        const tokenWithoutQuotes = jwtToken.replace(/^"|"$/g, ''); // Remove surrounding quotes
        const headers = {
            Authorization: `Bearer ${tokenWithoutQuotes}`
        };
    }
    return headers;
}