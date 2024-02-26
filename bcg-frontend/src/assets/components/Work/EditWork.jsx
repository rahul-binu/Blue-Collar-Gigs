import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "/src/assets/styles/WorkCreation.module.css";
import { updateWorkDataAPI, getJBIdAPI } from "../../services/WorkService";


const EditWork = () => {

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
        getJobDetailsById();
    }, [])

    function getJobDetailsById() {
        const jid = localStorage.getItem('jid');

        getJBIdAPI(jid).then((response) => {
            setJobTitle(response.data.jobTitle);
            setJobCategory(response.data.jobCategory);
            setJobDescription(response.data.jobDescription);
            setEmail(response.data.recruiterEmail);
            setPhone(response.data.recruiterPhone);
            setAddress(response.data.location);
            setDistrict(response.data.district);
            setState(response.data.state);
            setPincode(response.data.pincode);
            setJobDuration(response.data.estimatedTFTWork);
            setDailyWage(response.data.paymentPerDay);
            setExpectedSkKill(response.data.expectedSkills);
            setworkStartDate(response.data.workEstimatedStartDate);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function getAllJobCategories() {
        getJobCategories().then((response) => {
            setJobCats(response.data);

            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }

    function updateWorkData(e) {
        e.preventDefault();

        const jobId = localStorage.getItem('jid');

        const jobStatus ='active';

        const updateWorkDataSet = {
            jobTitle, recruiterId, jobCategory, jobDescription,
            recruiterEmail, recruiterPhone, location, district,
            state, pincode, estimatedTFTWork, paymentPerDay,
            expectedSkills, workEstimatedStartDate,jobStatus
        };

        // const updateWorkDataSet = {
        //     "district": "idukki",
        //     "estimatedTFTWork": "1",
        //     "expectedSkills": "carpentry",
        //     "jobCategory": "Carpentry",
        //     "jobDescription": "i need to fix my broken chair",
        //     "jobTitle": "fix my chair",
        //     "location": "vellathooval",
        //     "paymentPerDay": 500,
        //     "pincode": 685563,
        //     "recruiterEmail": "rahul@gmail.com",
        //     "recruiterId": "1",
        //     "recruiterPhone": "7984561230",
        //     "state": "k",
        //     "workEstimatedStartDate": "2024-02-27"
        // }
        

        console.log("============>",updateWorkDataSet);

        updateWorkDataAPI(updateWorkDataSet, jobId).then((response) => {
            console.log(response.data);
            localStorage.removeItem('jid');
            navigate('/myposts');

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
                                    <div className="row text-center text-dark mb-3">
                                        <h3>Update Work Details</h3>
                                    </div>
                                    <div className="row mb-3">

                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Job title</label>
                                                <input type="text" name=""value={jobTitle}
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
                                                <textarea name="" id=""value={jobDescription}
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
                                                    className='form-control' value={recruiterEmail}
                                                    placeholder="user@example.com" />
                                                {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                            </div>
                                        </div>


                                        <div className="col text-start">
                                            <div className="form-group">
                                                <label htmlFor="" className="mx-3 mb-1">Mobile</label>
                                                <input type='email' autoComplete="new-password"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className='form-control' value={recruiterPhone}
                                                    placeholder="9876543210" />
                                                {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Address</label>
                                                <textarea className="form-control" rows="2"value={location}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    placeholder="Where the Work is, House NO/Name, Street"></textarea>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">District</label>
                                                <input type="text" className="form-control" rows="2" value={district}
                                                    onChange={(e) => setDistrict(e.target.value)}
                                                    placeholder="District" />
                                            </div>
                                        </div>
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">State</label>
                                                <input type="text" className="form-control" rows="2" value={state}
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
                                                <label className="mb-1 mx-3">Work Duration</label>
                                                <input type="text" className="form-control" rows="2" value={estimatedTFTWork}
                                                    onChange={(e) => setJobDuration(e.target.value)}
                                                    placeholder="1/2, 1, 2, ect... day" />
                                            </div>
                                        </div>

                                        <div className="col mb-2 ms-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Daily Wage</label>
                                                <input type="number" className="form-control text-success"value={paymentPerDay}
                                                    onChange={(e) => setDailyWage(e.target.value)}
                                                    placeholder="In Rupees" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Expected Skill</label>
                                                <input type="text" className="form-control" rows="2"value={expectedSkills}
                                                    onChange={(e) => setExpectedSkKill(e.target.value)}
                                                    placeholder="Plumbing, Electrical, ect..." />
                                            </div>
                                        </div>

                                        <div className="col mb-2 ms-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Work Start Date</label>
                                                <input type="date" className="form-control"value={workEstimatedStartDate}
                                                    onChange={(e) => setworkStartDate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col text-end">
                                            <button type="button" className="btn btn-success" onClick={updateWorkData}>Save Changes</button>
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

export default EditWork;
