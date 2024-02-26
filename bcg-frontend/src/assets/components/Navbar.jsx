import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';

import "/src/assets/styles/Navbar.css";

import Home from './Home';

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

    function gotToServices() {
        navigate('/service')
        window.location.reload();
    }

    function goToMyWorks(){
        navigate('myposts');
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };


    function NavBtnUT() {

        const UT = UserType(); // 

        // console.log(UT, "<========"); 

        if (UT) {
            if (UT == 'worker') {
                return (
                    // <Dropdown
                    //     onMouseEnter={handleMouseEnter}
                    //     onMouseLeave={handleMouseLeave}
                    //     show={showDropdown}
                    // >
                    //     <span
                    //         className="dropdown-toggle"
                    //         style={{
                    //             cursor: 'pointer',
                    //             textDecoration: 'none',
                    //             marginRight: '10px', // Add some margin for spacing
                    //         }}
                    //     >
                    //         Hover Me
                    //     </span>

                    //     <Dropdown.Menu>
                    //         <Dropdown.Item onClick={gotToServices}>Services</Dropdown.Item>
                    //         <Dropdown.Item onClick={viewWorks}>New Works</Dropdown.Item>
                    //         <Dropdown.Item >Action 3</Dropdown.Item>
                    //     </Dropdown.Menu>
                    // </Dropdown>
                    <>
                    <span className="navbar-goTo-statements mx-4" onClick={gotToServices}><strong>Services</strong></span>
                    <span className="navbar-goTo-statements mx-4"onClick={viewWorks}><strong>New Work Posts</strong></span>
                    </>
                );
            } else {
                return (
                    <>
                     <span className="navbar-goTo-statements mx-4" onClick={gotToServices}><strong>Services</strong></span>
                    <span className="navbar-goTo-statements mx-4"onClick={goToCreateWork}><strong>ADD New Work</strong></span>
                    <span className="navbar-goTo-statements mx-4"onClick={goToMyWorks}><strong>My Posts</strong></span>
                    </>
                );
            }
        } else {
            return "No Ut";
        }
    }

    const viewWorks = () => {
        const targetDiv = document.getElementById('works');
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
      };

      function goToCreateWork(){
        navigate('/creatework')
      }

    return (
        <>
            <div className="container-fluid">
                <div className="row navbar">

                    <div className="col-lg-3 col-sm-6 col-md-6 webName">
                        <h2 className="ps-4" onClick={goToHome}><a href='' className='blueCollarGigsTitle text-decoration-none'>Blue Collar Gigs</a></h2>
                    </div>

                    <div className="col text-end">
                        <span className='text-dark'>{NavBtnUT()}</span>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-2 mx-5 text-end">
                        {loggedIn ? (


                            <Dropdown >
                                <Dropdown.Toggle className='text-success'
                                    variant="" style={{
                                        borderBottom: '1px solid green'
                                    }}>
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
                                            <span className='text-danger mx-1' style={{ fontSize: '20px' }}><Icon.XOctagon />
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
