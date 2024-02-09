import React, { useState } from "react";

import '../styles/Profile.css';

function Profile() {

    const [profilePhoto, setProfilePhoto] = useState('');
    const [firstName, setFirstName] = useState('');

    function handleProfilePhoto(e) {
        setProfilePhoto(e.target.value);
        console.log(profilePhoto);
    }

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-9 col-sm-10">
                        <div className="card shadow-2-strong">

                            <div className="row card-body  text-center">

                                <div className="col-3 text-start list-group" id='sideBar'>

                                    <a class="list-group-item py-3"><strong>Profile</strong></a>
                                    <a class="list-group-item py-3"><strong>Skill</strong></a>
                                    <a class="list-group-item py-3"><strong>Education</strong></a>
                                    <a class="list-group-item py-3"><strong>Certification</strong></a>

                                </div>

                                <div className="col-9">

                                    <div className="form-outline mb-3">
                                        <h1 className="">Update Account</h1>
                                        <hr />
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-sm-auto mb-3">
                                            <div className="mx-auto" >
                                                <div className="d-flex justify-content-center align-items-center rounded" style={{ background: 'rgb(233, 236, 239)', height: '140px' }}>
                                                    <img src="/images/blue-profile-logo-png-transparent-png.png" alt="" id='profilePhoto' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Ram Sam</h4>
                                                <p className="mb-0">@12343456</p>
                                                <div>
                                                    <div className="mt-2">
                                                        <label className="btn btn-primary">
                                                            <i className="fa fa-fw fa-camera"></i>
                                                            <input type='file' id='profilePhotoInput' className="file-input" onChange={handleProfilePhoto} />
                                                            <span>Change Photo</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center text-sm-right">
                                                <span className="">administrator</span>
                                                <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <label htmlFor="" className="mx-3 mb-1">First Name</label>
                                            <input type='email' autoComplete="new-password"
                                                className='form-control'
                                                placeholder="First Name" />
                                            {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                        </div>
                                        <div className="col text-start">
                                            <label htmlFor="" className="mx-3 mb-1">Last Name</label>
                                            <input type='email' autoComplete="new-password"
                                                className='form-control'
                                                placeholder="Last Name" />
                                            {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                        </div>
                                    </div>

                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Email</label>
                                                <input type='email' autoComplete="new-password"
                                                    className='form-control'
                                                    placeholder="user@example.com" />
                                                {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                            </div>
                                        </div>


                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Mobile</label>
                                                <input type='email' autoComplete="new-password"
                                                    className='form-control'
                                                    placeholder="9876543210" />
                                                {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Address</label>
                                                <textarea className="form-control" rows="2"
                                                    placeholder="House NO/Name, Street"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">District</label>
                                                <input type="text" className="form-control" rows="2"
                                                    placeholder="District" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">State</label>
                                                <input type="text" className="form-control" rows="2"
                                                    placeholder="State" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Pin Code</label>
                                                <input type="text" className="form-control" rows="2"
                                                    placeholder="654987" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">About</label>
                                                <textarea className="form-control" rows="5"
                                                    placeholder="My Bio"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col text-end mx-3">
                                            <button className="btn btn-success mt-2 mb-2">Save Changes</button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;