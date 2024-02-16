import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "/src/assets/styles/Navbar.css";
import AuthService from '../services/AuthService';

function Navbar() {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    function goToHome() {
        navigate('/');
    }

    function goToLogin() {
        navigate('login');
    }

    function goToRegister() {
        navigate('register');
    }

    function handleLogout() {
        AuthService.logout();
        setLoggedIn(false);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row navbar">
                    <div className="col-lg-4 col-sm-6 col-md-6 webName">
                        <h2 className="ps-4" onClick={goToHome}><a href='' className='blueCollarGigsTitle text-decoration-none'>Blue Collar Gigs</a></h2>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3 mx-5 text-end">
                        {loggedIn ? (
                            <span className='text-dark' onClick={handleLogout}>Logout</span>
                        ) : (
                            <>
                                <h5 ><span onClick={goToLogin} id='loginRegister'>Login / </span><span onClick={goToRegister} id='loginRegister'>Register</span></h5>
                            </>
                        )}

                        <span className='text-dark' onClick={handleLogout}>Logout</span>
                        <span className='text-dark' onClick={AuthService.logout2}>Logout2</span>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Navbar;
