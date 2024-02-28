import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { createUser } from '../services/UserService';

function Register() {

    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationDate, setRegistrationDate] = useState(new Date());

    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        email: '',
        userType: '',
        password: ''
    })

    useEffect(() => {
        //timedate
        const intervalId = setInterval(() => {
            setRegistrationDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const formattedDateTime = format(registrationDate, 'yyyy-MM-dd\'T\'HH:mm:ss.SSS');// Customize the format as needed

    function goToLogin() {
        navigate('/login');
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleUserType(e) {
        setUserType(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    function formValidation() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Please make sure your email is correct before submitting';
            valid = false;
        }

        if (!userType) {
            errorsCopy.userType = 'Please select a user type';
            valid = false;
        } else {
            errorsCopy.userType = '';
        }

        if (password.trim() && confirmPassword.trim() && password === confirmPassword) {
            errorsCopy.password = '';
        } else {
            errorsCopy.password = 'Passwords do not match or are empty';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function registerUser(e) {
        e.preventDefault();

        const user = { email, userType, password, registrationDate: formattedDateTime };
        //  console.log(user);

        if (formValidation()) {

            createUser(user).then((response) => {
                // console.log(response.data);
                navigate('/login');
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <>

            <section className="">
                <div className="container py-5 h-100 mt-4"
                    style={{
                        backgroundImage: `url('/images/hammerHit.gif')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        backgroundPosition: 'center bottom',
                        transform: 'scaleX(-1)',
                        width: '100%',
                        height: '2000px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <div className="row d-flex justify-content-end align-items-center h-100"
                        style={{
                            transform: 'scaleX(-1)',
                            paddingRight: '50px'
                        }}>
                        <div className="col-12 col-md-10 col-lg-4 col-sm-10">
                            {/* <h3 className="text-center mb-3 text-primary">Blue Collar Gigs</h3> */}
                            <div className="card shadow-2-strong">
                                <form>
                                    <div className="card-body  text-center">


                                        <div className="form-outline mb-3">
                                            <h1 className="">Blue Collar Gigs</h1>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type='email' autoComplete="new-password"
                                                className={`form-control form-control-md ${errors.email ? 'is-invalid' : ''}`}
                                                onChange={handleEmail} placeholder="Email adress" />
                                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <select className={`form-select form-select ${errors.userType ? 'is-invalid' : ''}`} onChange={handleUserType}>
                                                <option value=''>---Register as a---</option>
                                                <option value="worker">Worker</option>
                                                <option value="recruiter">Recruiter</option>
                                            </select>
                                            {errors.userType && <div className='invalid-feedback'> {errors.userType}</div>}
                                        </div>

                                        <div className="form-outline mb-4">
                                            <div className="col">
                                                <input type='password' autoComplete="new-password"
                                                    className={`form-control form-control-md mb-3 ${errors.password ? 'is-invalid' : ''}`} name="password"
                                                    onChange={handlePassword} placeholder="Password" />
                                            </div>
                                            <div className="col">
                                                <input type='password' autoComplete="new-password"
                                                    className={`form-control form-control-md ${errors.password ? 'is-invalid' : ''}`}
                                                    onChange={handleConfirmPassword} placeholder="confirm password" />
                                                {errors.password && <div className='invalid-feedback'> {errors.password}</div>}
                                            </div>
                                        </div>

                                        <button className="btn btn-success btn-lg w-100 mb-2" onClick={registerUser}>Sign up</button>
                                        <span className=""><a href="" onClick={goToLogin} className="text-decoration-none ">Already have an account</a></span>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Register;