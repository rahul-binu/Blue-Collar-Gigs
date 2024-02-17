import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import AuthService from "../services/AuthService";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    function goRegister() {
        navigate('/Register');
    }

    function goToHome() {
        navigate('/Home');
        window.location.reload(); // Refresh the page
    }
    

    function LoginUser(e) {
        e.preventDefault();
        const user = { email, password };

       // console.log(user);

        AuthService.login(user.email, user.password)
            .then(response => {
                // Authentication successful, update UI (e.g., redirect to dashboard)
                console.log("User logged in successfully");
                goToHome();
                // Redirect to dashboard or other authenticated route
            })
            .catch(error => {
                // Authentication failed, handle error (e.g., display error message)
                //console.error("Login failed:", error.message, user);
                // Display error message to the user
            });

    }

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-4 col-sm-10">
                        {/* <h3 className="text-center mb-3 text-primary">Blue Collar Gigs</h3> */}
                        <div className="card shadow-2-strong">

                            <div className="card-body  text-center">

                                <form action="">

                                    <div className="form-outline mb-3">
                                        <h1 className="">Blue Collar Gigs</h1>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type='email' autoComplete='current-email'
                                            className='form-control form-control-md '
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email adress" />
                                        {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <div className="col">
                                            <input type='password' autoComplete='current-password'
                                                className='form-control form-control-md '
                                                //className={`form-control form-control-md mb-3 ${errors.password ? 'is-invalid' : ''}`} name="password"
                                                onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                        </div>
                                    </div>

                                    <button className="btn btn-success btn-lg w-100 mb-2" onClick={LoginUser}>LogIn</button>
                                    <span className=""><a href="" onClick={goRegister} className="text-decoration-none ">Create new account</a></span>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;