import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import * as Icon from 'react-bootstrap-icons';

import styles from "/src/assets/styles/WorkCreation.module.css";

import { createWork } from "../services/WorkService";

const WorkCreation = () => {

    const getJobCategories = () => axios.get("http://localhost:8080/auth/jobcat");

    const recruiterId = localStorage.getItem("userId");

    const navigate = useNavigate();

    const [jobCats, setJobCats] = useState([]);

    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [recruiterEmail, setEmail] = useState('');
    const [recruiterPhone, setPhone] = useState('');
    const [location, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [estimatedTFTWork, setJobDuration] = useState('');
    const [paymentPerDay, setDailyWage] = useState('');
    const [expectedSkills, setExpectedSkKill] = useState('');
    const [workEstimatedStartDate, setworkStartDate] = useState('');

    useEffect(() => {
        getAllJobCategories();
    }, [])

    function getAllJobCategories() {
        getJobCategories().then((response) => {
            setJobCats(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }

    function saveWork(e) {
        e.preventDefault();

        const workData = {
            jobTitle,
            recruiterId,
            jobCategory,
            jobDescription,
            recruiterEmail,
            recruiterPhone,
            location,
            district,
            state,
            pincode,
            estimatedTFTWork,
            paymentPerDay,
            expectedSkills,
            workEstimatedStartDate
        };
    //     "jobId": 1,
    // "recruiterId": 456,
    // "jobTitle": "Software Engineer",
    // "jobCategory": "Information Technology",
    // "jobDescription": "This is a job description for a software engineer position.",
    // "location": "City",
    // "state": "State",
    // "district": "District",
    // "pincode": 123456,
    // "estimatedTFTWork": "Full-time",
    // "paymentPerDay": 100.0,
    // "workEstimatedStartDate": "2024-02-22",
    // "recruiterPhone": "123-456-7890",
    // "expectedSkills": "Java, Python, SQL",
    // "recruiterEmail": "recruiter@example.com",
    // "transportation": "Available"

        console.log(workData);

       createWork(workData).then((response) => {
             console.log(response.data);
             navigate('/home');
         }).catch(error => {
             console.log(error);
         })


    }


    return (
        <div className="container-fluid">
            <div className="container" >
                <div className="row d-flex justify-content-center mt-3">

                    <div className="col-lg-9">
                        <div className={`${styles.card} px-4 py-4`}>

                            <div className="row">
                                <div className="col-lg-6">
                                </div>

                                <div className="col-lg-6">
                                    <div className="row mb-3">

                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Job title</label>
                                                <input type="text" name=""
                                                    onChange={(e) => setJobTitle(e.target.value)}
                                                    className="form-control" id=""
                                                    placeholder="Job Title" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Category</label>

                                                <select
                                                    name=""
                                                    className="form-control"
                                                    id=""
                                                    onChange={(e) => setJobCategory(e.target.value)} // Update jobCategory state when an option is selected
                                                >
                                                    {jobCats.map(jobCat => (
                                                        <option key={jobCat.id} value={jobCat.jobCategory}>{jobCat.jobCategory}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mb-3">

                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Work description</label>
                                                <textarea name="" id=""
                                                    onChange={(e) => setJobDescription(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Write about the work"
                                                    cols="10" rows="3" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row form-outline mb-2">
                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Email</label>
                                                <input type='email' autoComplete="new-password"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className='form-control'
                                                    placeholder="user@example.com" />
                                                {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                            </div>
                                        </div>


                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Mobile</label>
                                                <input type='email' autoComplete="new-password"
                                                    onChange={(e) => setPhone(e.target.value)}
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
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    placeholder="Where the Work is, House NO/Name, Street"></textarea>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">District</label>
                                                <input type="text" className="form-control" rows="2"
                                                    onChange={(e) => setDistrict(e.target.value)}
                                                    placeholder="District" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">State</label>
                                                <input type="text" className="form-control" rows="2"
                                                    onChange={(e) => setState(e.target.value)}
                                                    placeholder="State" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Pin Code</label>
                                                <input type="text" className="form-control" rows="2"
                                                    onChange={(e) => setPincode(e.target.value)}
                                                    placeholder="654987" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Work Duration</label>
                                                <input type="text" className="form-control" rows="2"
                                                    onChange={(e) => setJobDuration(e.target.value)}
                                                    placeholder="1/2, 1, 2, ect... day" />
                                            </div>
                                        </div>

                                        <div className="col mb-2 ms-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Daily Wage</label>
                                                <input type="number" className="form-control text-success"
                                                    onChange={(e) => setDailyWage(e.target.value)}
                                                    placeholder="In Rupees" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Expected Skill</label>
                                                <input type="text" className="form-control" rows="2"
                                                    onChange={(e) => setExpectedSkKill(e.target.value)}
                                                    placeholder="Plumbing, Electrical, ect..." />
                                            </div>
                                        </div>

                                        <div className="col mb-2 ms-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Work Start Date</label>
                                                <input type="date" className="form-control"
                                                    onChange={(e) => setworkStartDate(e.target.value)}
                                                    />
                                            </div>
                                        </div>
                                    </div>

                                    {/* {<div className="col mb-2 ms-2 text-start">
                                    <label htmlFor="" className="mb-1 mx-3">Please Fill This Correct</label>
                                    <div className="form-group">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="mb-1 mx-3">The Work Need Transportation Vehicle</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="mb-1 mx-3">The Work Need Power Tools</label>
                                    </div>
                                </div>} */}

                                    <div className="row">
                                        <div className="col text-end">
                                            <button type="button" className="btn btn-success" onClick={saveWork}>Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </div>
    );

}

export default WorkCreation;
