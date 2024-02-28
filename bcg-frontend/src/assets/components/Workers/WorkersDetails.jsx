import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as Icon from 'react-bootstrap-icons';

import { getAllWorkersAPI, getAWorkerProfileAPI, getWorkerData } from "../../services/WorkerServices";
import styles from "/src/assets/styles/JobCard.module.css";

const WorkersDetails = () => {

    let { id } = useParams();

    useEffect(() => {
        getAllWorkers()
    }, []);

    const [workerProfileDetails, setWorkerProfileDetails] = useState([]);
    const [workerDetails, setWorkerDetails] = useState([]);


    function getAllWorkers() {

        console.log(id);

        getWorkerData(id).then((response) => {
            console.log(response.data);
            setWorkerDetails(response.data);
        }).catch((error) => {
            console.log(error, " check here");
        })

        getAWorkerProfileAPI(id).then((response) => {
            console.log(response.data);
            setWorkerProfileDetails(response.data);
        }).catch((error) => {
            console.log(error, " check here");
        })
    }

    function ProfilePic(pic) {
        if (pic) {
            return (pic);
        } else {
            return ("/images/noProWorker.png");
        }
    }

    return (
        <div className="container text-dark mt-5">
            <div className="container-fluid">

                <div className="row text-dark mt-5 mx-5">
                    <div className="col-6">

                        <div className="row mb-4 text-center">
                            <h3>
                                <span>
                                    {workerProfileDetails.profileFirstName}
                                    <span>
                                        {workerProfileDetails.profileLastName}
                                    </span>
                                </span>
                            </h3>
                        </div>

                        <div className="row mb-4 justify-content-center">
                            <div className="col-5">
                                <div className="card p-3" id={styles.workerdatacard}>
                                    <div className="row text-center">
                                        <h5>
                                            Iam a certified
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <span>
                                            {
                                                workerDetails.skills && workerDetails.skills.split(',')[0]
                                            }

                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="card p-3" id={styles.workerdatacard}>
                                    <div className="row text-center">
                                        <h5>
                                            I can speek
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <span>
                                            {workerDetails.flanguage}
                                            <span
                                                style={
                                                    { paddingLeft: '10px' }
                                                }>{workerDetails.slanguage}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4 justify-content-center">
                            <div className="col-12">
                                <div className="card p-3" id={styles.workerdatacard}>
                                    <div className="row text-center">
                                        <h5>
                                            Iam good at
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <span>
                                            {workerDetails.skills}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row mb-0">
                            <div className="col">
                                <hr />
                                <h4>
                                    <span style={{ fontSize: '20px', paddingRight: '10px' }}>
                                        <Icon.GeoAltFill />
                                    </span>
                                    <span>
                                        You can find me at <br />
                                    </span>
                                </h4>
                                <span>
                                    <span
                                        style={{
                                            paddingLeft: '50px'
                                        }}>
                                        {workerProfileDetails.address}
                                    </span>
                                    <span
                                        style={{
                                            paddingLeft: '10px'
                                        }}>
                                       , {workerProfileDetails.district}
                                    </span>
                                    <span
                                        style={{
                                            paddingLeft: '10px'
                                        }}>
                                        {workerProfileDetails.state}
                                    </span><br />
                                    <span
                                        style={{
                                            paddingLeft: '60px'
                                        }}>
                                        {workerProfileDetails.pincode}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <hr />
                                <h4 className="mb-2">
                                    Contact <Icon.PersonRolodex /> <br />
                                </h4>
                                <span>
                                    <span>
                                        <span
                                            style={{ paddingRight: '10px' }
                                            }>
                                            <Icon.Telephone />
                                        </span>
                                        {workerProfileDetails.userPhone}
                                    </span>
                                    <span>
                                        <span style={
                                            { paddingRight: '10px', paddingLeft: '30px' }
                                        }>
                                            <Icon.EnvelopeAt />
                                        </span>
                                        {workerProfileDetails.userEmail}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <hr />
                                <span>
                                    <h4>About me</h4>
                                    <p>
                                        {workerProfileDetails.aboutUser}
                                    </p>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-6 d-flex justify-content-end" style={{ height: '450px' }}>
                        <img src={ProfilePic(workerProfileDetails.profilePic)}
                            style={{
                                marginRight: '50px',
                                height: '450px', // Set height to 100% to fill the container height
                                width: '450px',
                                borderRadius: '50%',
                                border: '2.5px solid green'
                            }}
                            alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
}
export default WorkersDetails;