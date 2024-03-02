import { BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';

import { useState, useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';
import SuccessPop from '../ESMessage/SuccessPop';
import ErrorPop from '../ESMessage/ErrorPop';
import ProfileSide from "./profileSide";
import { getProfileData } from "../../services/profile";
import { getWorkerData, createWorker, updateWorker } from "../../services/WorkerServices";


const Skill = () => {

    const userId = localStorage.getItem("userId");


    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [profileFirstName, setProfileFirstName] = useState('');
    const [profileLastName, setProfileLastName] = useState('');
    const [profilePic, setProfilePhoto] = useState('');
    const [skills, setSkill] = useState('')
    const [workerId, setWorkerId] = useState('');
    const [slanguage, setSlanguage] = useState('');
    const [flanguage, setFlanguage] = useState('');
    const [expertIn, setExpertIn] = useState('');

    const options = [
        'Assembly',
        'Moving',
        'Cleaning',
        'Plumbing',
        'Electrical',
        'Landscaping',
        'Painting',
        'Carpentry',
        'Roofing',
        'Flooring',
        'Masonry',
        'Welding',
        'Automotive',
        'Pest Control',
        'Drywall',
        'Locksmith',
        'Appliances',
        'Janitorial',
        'Demolition'
    ];


    useEffect(() => {
        if (userId) {
            getProfileData(userId).then((response) => {
                console.log("============>", response.data)
                setProfileFirstName(response.data.profileFirstName);
                setProfileLastName(response.data.profileLastName);
                setProfilePhoto(response.data.profilePic);
            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    useEffect(() => {
        if (userId) {
            getWorkerData(userId).then((response) => {
                console.log("============>", response.data)
                setSkill(response.data.skills);
                setWorkerId(response.data.workerId);
                setFlanguage(response.data.flanguage);
                setSlanguage(response.data.slanguage);

            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    function updateSkills(e) {
        e.preventDefault();

        const certification = ""

        const newWorkerData = {
            userId, skills, flanguage, slanguage, certification
        };


        console.log(newWorkerData);

        updateWorker(newWorkerData, userId).then((response) => {
            console.log(response.data);
            setSuccessMessage("Profile data updated successfully")
        }).catch(error => {
            console.log(error);
            // window.alert("An error occurred: " + error.message);
            // showErrorPopup('An error occurred: ' + error.message);
            setErrorMessage("Oops! Something unexpected occurred while processing your request");
        })
    }

    function saveSkills(e) {
        e.preventDefault();

        const certification = ""

        const worker = {
            userId, skills, flanguage, slanguage, certification
        };

        console.log(worker);

        createWorker(worker).then((response) => {
            console.log(response.data);
            setSuccessMessage("Profile data updated successfully")
        }).catch(error => {
            console.log(error);
            setErrorMessage("Oops! Something unexpected occurred while processing your request");
        })
    }



    function profilePhoto() {
        if (!profilePic) {
            return (<img src="/images/blue-profile-logo-png-transparent-png.png" alt="" id='profilePhoto' />);
        } else {
            return (<img src={profilePic} alt="" id='profilePhoto' />)
        }
    }

    function submitButton() {
        if (workerId) {
            return (<button className="btn btn-success mt-2 mb-2" onClick={updateSkills}>Save Changes</button>);
        } else {
            return (<button className="btn btn-success mt-2 mb-2" onClick={saveSkills}>Save </button>);
        }
    }

    function slanguageSelect() {

        if (slanguage) {
            return (slanguage)
        } else {
            return "select a language"
        }
    }

    function flanguageSelect() {

        if (flanguage) {
            return (flanguage)
        } else {
            return "select a language"
        }
    }

    //const [skills, setSkills] = useState('');
    const [isValid, setIsValid] = useState(true); // State to track input validity

    const handleSkillChange = (e) => {
        setSkill(e.target.value);
        setIsValid(true); // Reset validation on input change
    };

    // Function to validate skills (for example, checking for non-empty input)
    const validateSkills = () => {
        const isValidSkills = skills.trim() !== '';
        setIsValid(isValidSkills);
    };



    return (
        <>

            <ErrorPop errorMessage={errorMessage} />

            <SuccessPop successMessage={successMessage} />

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-9 col-sm-10">
                        <div className="card shadow-2-strong">

                            <div className="row card-body  text-center">
                                {/* <img src={profilePic} alt="" /> */}

                                <ProfileSide />

                                <div className="col-9">

                                    <div className="form-outline mb-3">
                                        <h1 className="">Update Account</h1>
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

                                            </div>
                                            <div className="text-center text-sm-right">
                                                <span className=""> Welcome worker</span>

                                            </div>
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Skills</label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${isValid ? '' : 'is-invalid'}`} // Apply 'is-invalid' class if validation fails
                                                        value={skills}
                                                        onChange={handleSkillChange}
                                                        onBlur={validateSkills} // Validate skills on blur
                                                        placeholder="Enter skills separated by commas (e.g., Electrical, Painting, etc...)"
                                                    />

                                                    {isValid ? (
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <BsCheckCircle color="green" />
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <BsExclamationCircle color="red" />
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                {!isValid && (
                                                    <div className="invalid-feedback">Please enter at least one skill.</div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Mother tongue</label>
                                                <select className="form-control"
                                                    onChange={(e) => setFlanguage(e.target.value)}
                                                >
                                                    <option value={slanguage}>
                                                        {
                                                            flanguageSelect()
                                                        }
                                                    </option>
                                                    <option value="English">English</option>
                                                    <option value="Malayalam">Malayalam (മലയാളം)</option>
                                                    <option value="Hindi">Hindi (हिन्दी)</option>
                                                    <option value="Tamil">Tamil (தமிழ்)</option>
                                                    <option value="Telugu">Telugu (తెలుగు)</option>
                                                    <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                                                    <option value="Marathi">Marathi (मराठी)</option>
                                                    <option value="Bengali">Bengali (বাংলা)</option>
                                                    <option value="Gujarati">Gujarati (ગુજરાતી)</option>
                                                    <option value="Punjabi">Punjabi (ਪੰਜਾਬੀ)</option>
                                                    <option value="Odia">Odia (ଓଡ଼ିଆ)</option>
                                                    <option value="Assamese">Assamese (অসমীয়া)</option>
                                                    <option value="Urdu">Urdu (اردو)</option>
                                                    <option value="Sanskrit">Sanskrit (संस्कृतम्)</option>
                                                    <option value="Konkani">Konkani (कोंकणी)</option>
                                                    <option value="Manipuri">Manipuri (মৈতৈলোন্)</option>
                                                    <option value="Sindhi">Sindhi (سنڌي)</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">I can also speek</label>
                                                <select className="form-control"
                                                    onChange={(e) => setSlanguage(e.target.value)}
                                                >
                                                    <option value={slanguage}>
                                                        {
                                                            slanguageSelect()
                                                        }
                                                    </option>

                                                    <option value="English">English</option>
                                                    <option value="Malayalam">Malayalam (മലയാളം)</option>
                                                    <option value="Hindi">Hindi (हिन्दी)</option>
                                                    <option value="Tamil">Tamil (தமிழ்)</option>
                                                    <option value="Telugu">Telugu (తెలుగు)</option>
                                                    <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                                                    <option value="Marathi">Marathi (मराठी)</option>
                                                    <option value="Bengali">Bengali (বাংলা)</option>
                                                    <option value="Gujarati">Gujarati (ગુજરાતી)</option>
                                                    <option value="Punjabi">Punjabi (ਪੰਜਾਬੀ)</option>
                                                    <option value="Odia">Odia (ଓଡ଼ିଆ)</option>
                                                    <option value="Assamese">Assamese (অসমীয়া)</option>
                                                    <option value="Urdu">Urdu (اردو)</option>
                                                    <option value="Sanskrit">Sanskrit (संस्कृतम्)</option>
                                                    <option value="Konkani">Konkani (कोंकणी)</option>
                                                    <option value="Manipuri">Manipuri (মৈতৈলোন্)</option>
                                                    <option value="Sindhi">Sindhi (سنڌي)</option>

                                                </select>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="row mt-4 mb-4">
                                        <div className="col">
                                            <div className="form-group text-start">
                                                <label className="mb-1 mx-3 ">Iam an expert in</label>
                                                <select className="form-control"
                                                    onChange={(e) => setExpertIn(e.target.value)}
                                                >
                                                    <option value="">Select an option...</option>
                                                    <option value="Assembly">Assembly</option>
                                                    <option value="Moving">Moving</option>
                                                    <option value="Cleaning">Cleaning</option>
                                                    <option value="Plumbing">Plumbing</option>
                                                    <option value="Electrical">Electrical</option>
                                                    <option value="Landscaping">Landscaping</option>
                                                    <option value="Painting">Painting</option>
                                                    <option value="Carpentry">Carpentry</option>
                                                    <option value="Roofing">Roofing</option>
                                                    <option value="Flooring">Flooring</option>
                                                    <option value="Masonry">Masonry</option>
                                                    <option value="Welding">Welding</option>
                                                    <option value="Automotive">Automotive</option>
                                                    <option value="Pest Control">Pest Control</option>
                                                    <option value="Drywall">Drywall</option>
                                                    <option value="Locksmith">Locksmith</option>
                                                    <option value="Appliances">Appliances</option>
                                                    <option value="Janitorial">Janitorial</option>
                                                    <option value="Demolition">Demolition</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col text-end mx-3">
                                            <span >{submitButton()}</span>
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

export default Skill;