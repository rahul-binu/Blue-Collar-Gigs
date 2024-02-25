import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';

import "/src/assets/styles/Navbar.css";
import AuthService from '../services/AuthService';
import { getProfileAction } from '../config/user';
import { getUserDetails } from '../services/profile';
import { UserType } from './utils/UserLocalStoreVal';

function Navbar() {

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        // console.log(user);
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
        navigate('/');
    }

    const goToProfile = async () => {
        try {
            await getUserDetails();
            navigate("/profile");
        } catch (error) {
            console.error("Error fetching user details:", error);
            // Handle error if needed
        }
    }

    // useEffect(
    //     () => {
    //         const UT = UserType();
    //         console.log(UT);

    //     }, []
    // );


    function NavBtnUT() {
        const UT = UserType(); // Assuming UserType() returns "worker" based on the console log

        console.log(UT, "<========"); // Output: "worker"

        if (UT) {
            if (UT == 'worker') {
                return (
                    <>

                    </>
                );
            } else {
                return "REC"; // This is where "REC" is being returned
            }
        } else {
            return "No Ut";
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row navbar">

                    <div className="col-lg-3 col-sm-6 col-md-6 webName">
                        <h2 className="ps-4" onClick={goToHome}><a href='' className='blueCollarGigsTitle text-decoration-none'>Blue Collar Gigs</a></h2>
                    </div>

                    <div className="col text-start">
                        <span className='text-dark'>{NavBtnUT()}</span>
                        { }{/*
                        <span className='text-dark' onClick={AuthService.logout2}>Logout2</span> */}
                        {/* <span className="text-danger" onClick={getUserDetails}> test actions</span> */}
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-3 mx-5 text-end">
                        {loggedIn ? (


                            <Dropdown >
                                <Dropdown.Toggle className='text-success'
                                variant="" style={{
                                    borderBottom: '1px solid green'}}>
                                    Profile
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <span className='text-dark' id='profileIcon' onClick={goToProfile}>
                                            <Icon.PersonFill /> <span style={{ fontSize: '15px' }}>Profile</span>
                                        </span>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <span className='text-dark' onClick={handleLogout}>
                                            <span className='text-danger mx-1' style={{fontSize:'20px'}}><Icon.XOctagon/>
                                            </span>Logout</span>
                                        </Dropdown.Item>
                                    {/* <Dropdown.Item href="#/action-3"></Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>

                            // <span className='text-dark' id='profileIcon' onClick={goToProfile}><Icon.PersonFill /></span>
                        ) : (
                            <>
                                <h5 ><span onClick={goToLogin} id='loginRegister'>Login / </span><span onClick={goToRegister} id='loginRegister'>Register</span></h5>
                            </>
                        )}

                    </div>

                </div>
            </div>
        </>
    );

}

export default Navbar;
