import React, { useEffect, useState } from 'react';

import '../styles/Profile.css';
import { createProfile, getProfileData, updateProfileAPI } from "../services/profile";
import ProfileSide from "./profile/profileSide";

function Profile() {

    const userId = localStorage.getItem("userId");

    const [profileFirstName, setProfileFirstName] = useState('');
    const [profileLastName, setProfileLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [aboutUser, setAboutUser] = useState('');
    const [profileid, setProfileId] = useState('');
    //const userId = 12;

    useEffect(() => {
        if (userId) {
            getProfileData(userId).then((response) => {
                console.log("============>", response.data)
                setProfileFirstName(response.data.profileFirstName);
                setProfileLastName(response.data.profileLastName);
                setUserEmail(response.data.userEmail);
                setUserPhone(response.data.userPhone);
                setAddress(response.data.address);
                setDistrict(response.data.district);
                setState(response.data.state);
                setPincode(response.data.pincode);
                setAboutUser(response.data.aboutUser);
                setProfileId(response.data.profileId);
                //  setProfilePhoto(response.data.profilePic);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [])

    function handleProfilePhoto(e) {
        setProfilePhoto(e.target.value);
        //console.log(profilePhoto);
    }

    function saveProfile(e) {
        e.preventDefault();

        const profile = {
            userId, profileFirstName, profileLastName, userEmail, userPhone,
            address, district, state, pincode, aboutUser
        };

        console.log(profile);

        createProfile(profile).then((response) => {
            console.log(response.data);
            navigate('/home');
        }).catch(error => {
            console.log(error);
        })
    }

    function updateProfile(e) {
        e.preventDefault();
        const newprofile = {
            userId, profileFirstName, profileLastName, userEmail, userPhone,
            address, district, state, pincode, aboutUser
        };

        updateProfileAPI(newprofile, userId).then((response) => {
            console.log(response.data);
            navigate('/home');
        }).catch(error => {
            console.log(error);
        })
    }

    function submitButton() {
        if (profileid) {
            return (<button className="btn btn-success mt-2 mb-2" onClick={updateProfile}>Save Changes</button>);
        } else {
            return (<button className="btn btn-success mt-2 mb-2" onClick={saveProfile}>Save </button>);
        }
    }

    function pageTitle() {
        if (profileid) {
            return ("Update Profile")
        } else {
            return ("Create Profile")
        }
    }

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-9 col-sm-10">
                        <div className="card shadow-2-strong">

                            <div className="row card-body  text-center">

                                <ProfileSide />

                                <div className="col-9">

                                    <div className="form-outline mb-3">
                                        <h1 className="">{pageTitle()}</h1>
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
                                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{profileFirstName} {profileLastName}</h4>
                                                <p className="mb-0"></p>
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
                                                <span className="">worker</span>
                                                <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <label htmlFor="" className="mx-3 mb-1">First Name</label>
                                            <input type='email' autoComplete="new-password"
                                                onChange={(e) => setProfileFirstName(e.target.value)}
                                                className='form-control' value={profileFirstName}
                                                placeholder="First Name" />
                                            {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                        </div>
                                        <div className="col text-start">
                                            <label htmlFor="" className="mx-3 mb-1">Last Name</label>
                                            <input type='email' autoComplete="new-password"
                                                onChange={(e) => setProfileLastName(e.target.value)}
                                                className='form-control' value={profileLastName}
                                                placeholder="Last Name" />
                                            {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                        </div>
                                    </div>

                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Email</label>
                                                <input type='email' autoComplete="new-password"
                                                    onChange={(e) => setUserEmail(e.target.value)}
                                                    className='form-control' value={userEmail}
                                                    placeholder="user@example.com" />
                                                {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                            </div>
                                        </div>


                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Mobile</label>
                                                <input type='number' autoComplete="new-password" value={userPhone}
                                                    onChange={(e) => setUserPhone(e.target.value)}
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
                                                <textarea className="form-control" rows="2" value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    placeholder="House NO/Name, Street"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">District</label>
                                                <input type="text" className="form-control" rows="2"
                                                    value={district}
                                                    onChange={(e) => setDistrict(e.target.value)}
                                                    placeholder="District" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">State</label>
                                                <input type="text" className="form-control" rows="2"
                                                    value={state}
                                                    onChange={(e) => setState(e.target.value)}
                                                    placeholder="State" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Pin Code</label>
                                                <input type="text" className="form-control" rows="2" value={pincode}
                                                    onChange={(e) => setPincode(e.target.value)}
                                                    placeholder="654987" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">About</label>
                                                <textarea className="form-control" rows="5" value={aboutUser}
                                                    onChange={(e) => setAboutUser(e.target.value)}
                                                    placeholder="My Bio"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col text-end mx-3">
                                            {submitButton()}
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