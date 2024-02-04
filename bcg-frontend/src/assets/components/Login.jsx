import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    function goRegister() {
        navigate('/Register');
    }

    function handleEmail(e) {

    }

    function handlePassword(e) {

    }

    function LoginUser() {

    }

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-4 col-sm-10">
                        {/* <h3 className="text-center mb-3 text-primary">Blue Collar Gigs</h3> */}
                        <div className="card shadow-2-strong">

                            <div className="card-body  text-center">

                                <div className="form-outline mb-3">
                                    <h1 className="">Blue Collar Gigs</h1>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type='email' autoComplete="new-password"
                                        className='form-control form-control-md '
                                        onChange={handleEmail} placeholder="Email adress" />
                                    {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                </div>

                                <div className="form-outline mb-4">
                                    <div className="col">
                                        <input type='password' autoComplete="new-password"
                                            className='form-control form-control-md '
                                            //className={`form-control form-control-md mb-3 ${errors.password ? 'is-invalid' : ''}`} name="password"
                                            onChange={handlePassword} placeholder="Password" />
                                    </div>
                                </div>

                                <button className="btn btn-success btn-lg w-100 mb-2" onClick={LoginUser}>LogIn</button>
                                <span className=""><a href="" onClick={goRegister} className="text-decoration-none ">Create new account</a></span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;