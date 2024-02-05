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
                    <div className="col-lg-4 col-sm-6 col-md-6 webName">
                    <h2 className = " ps-4 " onClick ={ goToHome }><a href='' className='blueCollarGigsTitle text-decoration-none'>Blue Collar Gigs</a></h2>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3  mx-5 text-end ">
                        <h5 ><span onClick={ goToLogin } id='loginRegister'>Login / </span><span onClick={ goToRegister } id='loginRegister'>Regeister</span></h5>

                    </div>
                </div>
            </div>
        </>
    );

}

export default Navbar;
