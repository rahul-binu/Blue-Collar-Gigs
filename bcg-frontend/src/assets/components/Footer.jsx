import React from 'react';

import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <div className="container-fluid bg-secondary">
                <div className="container">

                    <div className="row mt-5 p-3">
                        <div className="col-lg-6 col-sm-12">
                            <h5 className='mt-2 mx-3 footerHead'>Follow us! <span>FB icon</span><span>  Insta</span></h5>
                            <h5 className='mt-3'>Discover</h5>
                            <h5>Become your own Boss</h5>
                            <h5>Services By City</h5>
                            <h5>Elite Account</h5>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <h5 className='mt-2 mx-3 footerHead'>Company</h5>
                            <h5 className='mt-3'>About Us</h5>
                            <h5>Careers</h5>
                            <h5>Blog</h5>
                            <h5>Terms & Privacy</h5>
                            <h5>Do Not Sell My Personal Information</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;