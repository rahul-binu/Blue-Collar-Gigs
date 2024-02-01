import React from 'react';
import { useNavigate } from 'react-router-dom';

import "/src/assets/styles/Navbar.css";


function Navbar() {

    const navigate = useNavigate();

    function goToHome(){
        navigate('/');
    }

    function goToLogin(){
        navigate('login');
    }

    function goToRegister(){
        navigate('register');
    }

    return (
        <>
            <div className="container-fluid ">
                <div className="row navbar">
                    <div className="col-lg-3 p-2 mx-5 webName">
                    <h3 className = "blueCollarGigsTitle" onClick ={ goToHome }>Blue Collar Gigs</h3>
                    </div>
                    <div className="col p-2 text-end mx-5">
                        <h4 ><span onClick={ goToLogin }>Login</span>/<span onClick={ goToRegister }>Regeister</span></h4>

                    </div>
                </div>
            </div>
        </>
    );

}

export default Navbar;
