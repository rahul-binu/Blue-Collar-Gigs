import React, { Suspense, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getJBIdAPI } from "../../services/WorkService";
import { applicationByJid } from "../../services/ApplicationService";

import * as Icon from 'react-bootstrap-icons';
import styles from '../../styles/JobCard.module.css';
import { UserId } from "../utils/UserLocalStoreVal";
import { getAWorkerProfileAPI, getWorkerData } from "../../services/WorkerServices";

function WorkDetailsR() {

    let { id } = useParams();

    const [jobTitle, setJobTitle] = useState('');
    const [district, setDistrict] = useState('');
    const [estimatedTFTWork, setEstimatedTFTWork] = useState('');
    const [expectedSkills, setExpectedSkills] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobId, setJobId] = useState(0);
    const [jobStatus, setJobStatus] = useState('');
    const [location, setLocation] = useState('');
    const [paymentPerDay, setPaymentPerDay] = useState(0);
    const [pincode, setPincode] = useState(0);
    const [recruiterEmail, setRecruiterEmail] = useState('');
    const [recruiterId, setRecruiterId] = useState(0);
    const [recruiterPhone, setRecruiterPhone] = useState('');
    const [state, setState] = useState('');
    const [workEstimatedStartDate, setWorkEstimatedStartDate] = useState('');

    const [applications, setApplications] = useState([]);
    const [workerProfileDetails, setWorkerProfileDetails] = useState([]);
    const [workerDetails, setWorkerDetails] = useState([]);


    useEffect(() => {
        getWorkById(id);
        getAllApplications()
    }, [])

    function getWorkById(id) {
        getJBIdAPI(id).then((response) => {
            // console.log(response.data);
            setJobTitle(response.data.jobTitle);
            setDistrict(response.data.district);
            setEstimatedTFTWork(response.data.estimatedTFTWork);
            setExpectedSkills(response.data.expectedSkills);
            setJobCategory(response.data.jobCategory);
            setJobDescription(response.data.jobDescription);
            setJobId(response.data.jobId);
            setJobStatus(response.data.jobStatus);
            setLocation(response.data.location);
            setPaymentPerDay(response.data.paymentPerDay);
            setPincode(response.data.pincode);
            setRecruiterEmail(response.data.recruiterEmail);
            setRecruiterId(response.data.recruiterId);
            setRecruiterPhone(response.data.recruiterPhone);
            setState(response.data.state);
            setWorkEstimatedStartDate(response.data.workEstimatedStartDate);
        }).catch((error) => {
            console.log(error);
        })
    }

    function getAllApplications() {
        applicationByJid(id)
            .then(response => {
                // console.log(response.data);
                setApplications(response.data);
                return response.data; // Return applications data for chaining
            })
            .then(applications => {
                getAllAppliedWorkers(applications);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function getAllAppliedWorkers(applications) {
        console.log(applications);

        applications.forEach(application => {
            getAppliedWorkersData(application.applicantId);
        });
    }

    function getAppliedWorkersData(wid) {
        // console.log("========>", wid);

        // Fetch worker data
        getWorkerData(wid)
            .then(response => {
                // console.log(response.data);
                setWorkerDetails(prevWorkerDetails => {
                    // Check if worker data already exists in state
                    if (!prevWorkerDetails.find(worker => worker.userId === response.data.userId)) {
                        return [...prevWorkerDetails, response.data];
                    }
                    return prevWorkerDetails; // No need to add duplicate data
                });
            })
            .catch(error => {
                console.log(error);
            });

        // Fetch worker profile data
        getAWorkerProfileAPI(wid)
            .then(response => {
                // console.log("========>", wid, response.data);
                setWorkerProfileDetails(prevWorkerProfileDetails => {
                    // Check if worker profile data already exists in state
                    if (!prevWorkerProfileDetails.find(profile => profile.profileId === response.data.profileId)) {
                        return [...prevWorkerProfileDetails, response.data];
                    }
                    return prevWorkerProfileDetails; // No need to add duplicate data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    function ProfilePic(pic) {
        if (pic) {
            return (pic);
        } else {
            return ("/images/noProWorker.png");
        }
    }


    return (
        <div className="container-fluid">

            <div className="row mb-4">
                {/* <div className="col" style={{ height: '200px' }}> {/* Adjust the height as needed */}
                {/* <img
                        src={WorkIMG(jobCategory)}
                        style={{ width: '100%', height: '130%', objectFit: 'cover' }} // Use object-fit to maintain aspect ratio
                        alt=""
                    />
                    </div> */}
            </div>


            <div className="container text-dark mb-4">

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="row mb-4">
                            <div className="col">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0' }}>
                                    <span style={{ marginRight: '0.5rem' }}><Icon.Tools /></span>{jobTitle}
                                </h2>
                                <strong className="ms-5 mt-3 "
                                    style={{ color: 'gray' }}
                                >{jobCategory}</strong>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col">
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Job Description</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <p>{jobDescription}</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col">
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Required Knowledge or Skills</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <p><span style={{ fontSize: '1.25rem' }}><Icon.Dot /></span> {expectedSkills}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card p-3 mb-4">
                                    <div className="row">
                                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Work Overview</span>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <div className="row">
                                                <p><span style={{ fontSize: '1.25rem' }}><Icon.Dot /></span> Work Estimated Duration:</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <p>{estimatedTFTWork} <span>Day</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <div className="row">
                                                <p><span style={{ fontSize: '1.25rem' }}><Icon.Dot /></span> Work Expected Start Date:</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <p>{workEstimatedStartDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <div className="row">
                                                <p><span style={{ fontSize: '1.25rem' }}><Icon.Dot /></span> Daily Wage:</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <p style={{ color: 'green', fontWeight: 'bold' }}>{paymentPerDay} <span>RS</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 bg">
                        <div className="row mb-2">
                            <div className="col">
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Recruiter Information</span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <div className="row">
                                    <p><span style={{ fontSize: '1.25rem' }}><Icon.Dot /></span> Email <Icon.EnvelopeAt /> :</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <p>{recruiterEmail}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <div className="row">
                                    <p><span style={{ fontSize: '1.25rem' }}><Icon.Dot /></span> Phone <Icon.Telephone /> :</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <p>{recruiterPhone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2 mt-4">
                            <div className="col">
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Address <Icon.GeoAltFill /></span>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="row">
                                    <p>
                                        <span style={{ marginRight: '10px', fontSize: '1.25rem' }}>{location}</span>
                                        <span style={{ marginRight: '10px', fontSize: '1.25rem' }}>{district}</span>
                                        <span style={{ marginRight: '10px', fontSize: '1.25rem' }}>{state}</span><br />
                                        <span style={{ fontSize: '1.25rem' }}>{pincode}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col ">

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center">
                        <h3>Applications</h3>
                        {/* start */}
                        {/* <div className="container text-dark mt-5">
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
                                    <div className="col-6 d-flex justify-content-end" style={{ height: '250px' }}>
                                        <img src={ProfilePic(workerProfileDetails.profilePic)}
                                            style={{
                                                marginRight: '50px',
                                                height: '350px', // Set height to 100% to fill the container height
                                                width: '350px',
                                                borderRadius: '50%',
                                                border: '2.5px solid green'
                                            }}
                                            alt="" />
                                    </div>


                                </div>
                            </div>
                        </div> */}

                        {/* acrodian */}
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {workerProfileDetails.map(workerProfileDetails => (


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={`flush-headingOne${workerProfileDetails.profileId}`}>
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${workerProfileDetails.profileId}`} aria-expanded="false"
                                            aria-controls="flush-collapseOne">
                                            <h4 >
                                                {workerProfileDetails.profileFirstName}
                                                <span style={{ paddingLeft: '15px', paddingRight: '20px' }}>
                                                    {workerProfileDetails.profileLastName}
                                                </span>
                                            </h4>
                                            {workerProfileDetails.aboutUser && workerProfileDetails.aboutUser.length > 100 ?
                                                `${workerProfileDetails.aboutUser.slice(0, 100)}...` : workerProfileDetails.aboutUser}

                                        </button>
                                    </h2>
                                    <div id={`flush-collapseOne${workerProfileDetails.profileId}`} className="accordion-collapse collapse"
                                        aria-labelledby={`flush-headingOne${workerProfileDetails.profileId}`} data-bs-parent="#accordionFlushExample">
                                        {/* acrodian body */}
                                        <div className="container text-dark mt-5">
                                            <div className="container-fluid">

                                                <div className="row text-dark mt-5 mx-5">
                                                    <div className="col-6">

                                                        <div className="row mb-4 text-center">
                                                            <h3>
                                                                <span >
                                                                    {workerProfileDetails.profileFirstName}
                                                                    <span style={{ paddingLeft: '15px' }}>
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
                                                                                workerDetails.map((workerDetail, index) => (
                                                                                    workerDetail.userId === workerProfileDetails.userId ? (
                                                                                        <span key={index}>
                                                                                            {workerDetail.skills.split(',')[0]}
                                                                                        </span>
                                                                                    ) : null
                                                                                ))
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
                                                                            {workerDetails.map(worker => (
                                                                                worker.userId === workerProfileDetails.userId ? (
                                                                                    <React.Fragment key={worker.userId}>
                                                                                        <span>{worker.flanguage}</span>
                                                                                        <span style={{ paddingLeft: '10px' }}>{worker.slanguage}</span>
                                                                                    </React.Fragment>
                                                                                ) : null
                                                                            ))}
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
                                                                        {workerDetails.map((workerDetail, index) => (
                                                                            workerDetail.userId === workerProfileDetails.userId ? (
                                                                                <span key={index}>
                                                                                    {workerDetail.skills}
                                                                                </span>
                                                                            ) : null
                                                                        ))}
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


                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end mt-4" style={{ height: '250px' }}>

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
                                                        <img src={ProfilePic(workerProfileDetails.profilePic)}
                                                            style={{
                                                                marginTop: '3em',
                                                                marginRight: '50px',
                                                                height: '250px', // Set height to 100% to fill the container height
                                                                width: '250px',
                                                                borderRadius: '50%',
                                                                border: '2.5px solid green'
                                                            }}
                                                            alt="" />
                                                    </div>


                                                </div>

                                                <div className="row text-dark align-items-center">
                                                    <hr />
                                                    <div className="row mb-3"><h5>Why You Should Hire Me</h5></div>
                                                    {applications.map(application => (
                                                        <React.Fragment key={application.applicationId}>
                                                            {workerProfileDetails.userId === application.applicantId && (
                                                                <React.Fragment>
                                                                    <div className="col-7">
                                                                        <p>{application.whyWeHire}</p>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <p>I can do this work for <span className="text-success" 
                                                                        style={{ fontSize: '18px', fontWeight: 'bold' }}>₹{application.ewpd}</span> per day</p>
                                                                    </div>
                                                                </React.Fragment>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>
                                        {/* actodian body end */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* acrodian end */}
                        {/* end */}

                    </div>
                </div>
            </div>
        </div >

    );

}

export default WorkDetailsR;