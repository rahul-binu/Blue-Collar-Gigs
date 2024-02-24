import React from "react";

import { useState, useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';

import Profile from "../Profile";
import ProfileSide from "./profileSide";
import { getProfileData } from "../../services/profile";
import { getWorkerData, createWorker, updateWorker } from "../../services/WorkerServices";

const Skill = () => {

    const userId = localStorage.getItem("userId");

    const [profileFirstName, setProfileFirstName] = useState('');
    const [profileLastName, setProfileLastName] = useState('');
    const [profilePic, setProfilePhoto] = useState('');
    const [skills, setSkill] = useState('')
    const [workerId, setWorkerId] = useState('');
    const [slanguage, setSlanguage] = useState('');
    const [flanguage, setFlanguage] = useState('');

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
            navigate('/');
        }).catch(error => {
            console.log(error);
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
            navigate('/');
        }).catch(error => {
            console.log(error);
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

    return (
        <>
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
                                                <span className="">worker</span>
                                                <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Skill</label>
                                                <textarea className="form-control" rows="2"
                                                    value={skills}
                                                    onChange={(e) => setSkill(e.target.value)}
                                                    placeholder="Electrical, Painting, ect..."></textarea>
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
                                                   <option value="englis">English</option>
                                                    <option value="malayalam">Malayalam</option>
                                                    <option value="hindhi">Hindi</option>
                                                    <option value="English">English</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Second tongue</label>
                                                <select className="form-control"
                                                    onChange={(e) => setSlanguage(e.target.value)}
                                                >
                                                    <option value={slanguage}>
                                                        {
                                                            slanguageSelect()
                                                        }
                                                    </option>

                                                    <option value="englis">English</option>
                                                    <option value="malayalam">Malayalam</option>
                                                    <option value="hindhi">Hindi</option>
                                                    <option value="English">English</option>
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