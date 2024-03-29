import React, { useEffect, useState } from 'react';

import '../styles/Profile.css';
import { createProfile, getProfileData, updateProfileAPI } from "../services/profile";
import { uploadToCloudinary } from './utils/uploadToCloudinary';
import ProfileSide from "./profile/profileSide";
import ErrorPop from './ESMessage/ErrorPop';
import SuccessPop from './ESMessage/SuccessPop';

function Profile() {

    const userId = localStorage.getItem("userId");
    const userType = localStorage.getItem('ut');

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [profileFirstName, setProfileFirstName] = useState('');
    const [profileLastName, setProfileLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState();
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [aboutUser, setAboutUser] = useState('');
    const [profileid, setProfileId] = useState('');
    const [profilePic, setProfilePhoto] = useState('');

    const [errors, setErrors] = useState({
        userEmail: '', profileFirstName: '', district: '',
        address: '', profileLastName: '', userPhone: '',
        state: '', pincode: '', aboutUser: ''
    });


    // const [isLoading, setLoading] = useState(false);
    //const userId = 12;

    const handleSelectImage = async (event) => {
        //setLoading(true);
        const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
        console.log(imageUrl);
        setProfilePhoto(imageUrl);
    };

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
                setProfilePhoto(response.data.profilePic);

            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    function saveProfile(e) {
        e.preventDefault();

        const profile = {
            userId, profileFirstName, profileLastName, userEmail, userPhone,
            address, district, state, pincode, aboutUser, profilePic
        };

        if (formValidation()) {
            createProfile(profile).then((response) => {
                console.log(response.data);
                //  navigate('/');
                setSuccessMessage("Profile created successfully")
            }).catch(error => {
                console.log(error);
                setErrorMessage("Wrong Credentials, Try again");
            })
        }

    }

    function updateProfile(e) {
        e.preventDefault();

        const newprofile = {
            userId, profileFirstName, profileLastName, userEmail, userPhone,
            address, district, state, pincode, aboutUser, profilePic
        };

        console.log(newprofile);

        if (formValidation()) {

            updateProfileAPI(newprofile, userId).then((response) => {
                console.log(response.data);
                setSuccessMessage("Profile updated successfully")
                // navigate('/');
            }).catch(error => {
                console.log(error);
                setErrorMessage("Oops! Something unexpected occurred while processing your request");
            })
        }
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

    function profilePhoto() {
        if (!profilePic) {
            return (<img src="/images/blue-profile-logo-png-transparent-png.png" alt="" id='profilePhoto' />);
        } else {
            return (<img src={profilePic} alt="" id='profilePhoto' />)
        }
    }

    function formValidation() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (!userEmail.trim()) {
            errorsCopy.userEmail = 'Please make sure your email is provided';
            valid = false;
        } else {
            errorsCopy.userEmail = '';
        }

        // Profile First Name Validation
        if (!profileFirstName.trim()) {
            errorsCopy.profileFirstName = 'Please provide your first name';
            valid = false;
        } else {
            errorsCopy.profileFirstName = '';
        }

        // District Validation
        // if (!district.trim()) {
        //     errorsCopy.district = 'Please provide your district';
        //     valid = false;
        // } else {
        //     errorsCopy.district = '';
        // }

        // // Address Validation
        // if (!address.trim()) {
        //     errorsCopy.address = 'Please provide your address';
        //     valid = false;
        // } else {
        //     errorsCopy.address = '';
        // }

        // Profile Last Name Validation
        if (!profileLastName.trim()) {
            errorsCopy.profileLastName = 'Please provide your last name';
            valid = false;
        } else {
            errorsCopy.profileLastName = '';
        }

        // User Phone Validation
        if (!userPhone.trim()) {
            errorsCopy.userPhone = 'Please provide your phone number';
            valid = false;
        } else if (userPhone.trim().length !== 10) {
            errorsCopy.userPhone = 'Phone number must be 10 digits';
            valid = false;
        } else {
            errorsCopy.userPhone = '';
        }
        

        // State Validation
        // if (!state.trim()) {
        //     errorsCopy.state = 'Please provide your state';
        //     valid = false;
        // } else {
        //     errorsCopy.state = '';
        // }

        // Pincode Validation
        // if (!pincode.trim()) {
        //     errorsCopy.pincode = 'Please provide your pincode';
        //     valid = false;
        // } else {
        //     errorsCopy.pincode = '';
        // }

        // About User Validation
        // if (!aboutUser.trim()) {
        //     errorsCopy.aboutUser = 'Please provide some information about yourself';
        //     valid = false;
        // } else {
        //     errorsCopy.aboutUser = '';
        // }

        setErrors(errorsCopy);

        return valid;
    }


    return (
        <>
            <ErrorPop errorMessage={errorMessage} />

            <SuccessPop successMessage={successMessage} />

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
                                                    {profilePhoto()}
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
                                                            <input type='file' id='profilePhotoInput' className="file-input" onChange={handleSelectImage} />
                                                            <span>Change Photo</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center text-sm-right">
                                                <span className="">Welcome {userType}</span>
                                                <div className="text-muted"><small>Explore what we offer that meets your needs</small></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <label htmlFor="" className="mx-3 mb-1">First Name</label>
                                            <input type='email' autoComplete="new-password"
                                                onChange={(e) => setProfileFirstName(e.target.value)}
                                                className={`form-control ${errors.profileFirstName ? 'is-invalid' : ''}`}
                                                value={profileFirstName}
                                                placeholder="First Name" />
                                            {errors.profileFirstName && <div className='invalid-feedback'>{errors.profileFirstName}</div>}
                                        </div>
                                        <div className="col text-start">
                                            <label htmlFor="" className="mx-3 mb-1">Last Name</label>
                                            <input type='email' autoComplete="new-password"
                                                onChange={(e) => setProfileLastName(e.target.value)}
                                                className={`form-control ${errors.profileLastName ? 'is-invalid' : ''}`} value={profileLastName}
                                                placeholder="Last Name" />
                                            {errors.profileLastName && <div className='invalid-feedback'>{errors.profileLastName}</div>}
                                        </div>
                                    </div>

                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Email</label>
                                                <input
                                                    type='email'
                                                    autoComplete="new-password"
                                                    onChange={(e) => setUserEmail(e.target.value)}
                                                    className={`form-control ${errors.userEmail ? 'is-invalid' : ''}`}
                                                    value={userEmail}
                                                    placeholder="user@example.com"
                                                />
                                                {errors.userEmail && <div className='invalid-feedback'>{errors.userEmail}</div>}
                                            </div>
                                        </div>


                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Mobile</label>
                                                <input type='number' autoComplete="new-password" value={userPhone}
                                                    onChange={(e) => setUserPhone(e.target.value)}
                                                    className={`form-control ${errors.userPhone ? 'is-invalid' : ''}`}
                                                    placeholder="9876543210" />
                                                {errors.userPhone && <div className='invalid-feedback'>{errors.userPhone}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Address</label>
                                                <textarea className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                                    rows="2" value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    placeholder="House NO/Name, Street"></textarea>
                                                {errors.address && <div className=''>{errors.address}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">District</label>
                                                <input type="text" className={`form-control ${errors.district ? 'is-invalid' : ''}`} rows="2"
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