import React, { Suspense, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getJBIdAPI } from "../../services/WorkService";
import { createApplicationReq, applicationCheckByJUId } from "../../services/ApplicationService";

import * as Icon from 'react-bootstrap-icons';
import WorkIMG from "./WorkIMG";
import { UserId } from "../utils/UserLocalStoreVal";

function WorkDetails() {

    let { id } = useParams();

    const applicantId = UserId();
    const [applyBtnStatus, setApplyBtnStatus] = useState(0);

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
    const [whyWeHire, setwhyWeHire] = useState('');
    const [ewpd, setEstWorkerPropo] = useState('');


    useEffect(() => {
        getWorkById(id);
        eligbleCheck()
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

    function eligbleCheck() {
        applicationCheckByJUId(id, applicantId)
            .then(response => {
                console.log(response);
                setApplyBtnStatus(1);
            })
            .catch(error => {
                console.log(error);
                setApplyBtnStatus(0);
            });
    }


    function jobRequest() {

        const jobId = id;


        const applicationReq = {
            jobId, applicantId,
            ewpd, whyWeHire
        };
        // console.log(applicationReq);
        createApplicationReq(applicationReq)
            .then(response => {
                console.log("Success:", response);
                // window.refre
                window.location.reload();
            })
            .catch(error => {
                console.error("Error:", error.message);
            });
    }

    function applyBtn() {
        if (applyBtnStatus === 0) {
            return (
                <button type="button" className="btn btn-success"
                    title="Make a request if you are interested" onClick={jobRequest}
                >
                    Request consideration for employment
                </button>
            );
        } else {
            return (
                <button type="button" className="btn btn-warning"
                    title="Make a request if you are interested"
                >
                    <span className="px-3"><Icon.ExclamationOctagon /></span>    You have already requested for this work
                </button>
            );
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


            <div className="container text-dark">
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
                                <form >
                                    <div className="row mt-3">
                                        <textarea id="" cols="30" rows="3" placeholder="Write somthing about why i hire you"
                                            onChange={(e) => setwhyWeHire(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="row mt-3">
                                        <input type="text" className="form-control" required
                                            placeholder="Your estimated wage/day" onChange={(e) => setEstWorkerPropo(e.target.value)} />
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            {applyBtn()}
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <p>After your profile has been validated by the job provider, they will initiate contact with you.</p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );

}

export default WorkDetails;