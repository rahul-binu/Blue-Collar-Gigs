import React from "react";
import * as Icon from 'react-bootstrap-icons';

import styles from "/src/assets/styles/WorkCreation.module.css";

const WorkCreation = () => {


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center mt-3">

                    <div className="col-lg-9">
                    <div className={`${styles.card} px-4 py-4`}>

                            <div className="row">
                                <div className="col-lg-6">
                               </div>

                                <div className="col-lg-6">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="text" name=""
                                                className="form-control" id=""
                                                placeholder="Job Title" />
                                        </div>
                                        <div className="col">
                                            <select name="" className="form-control" id="">
                                                <option value=""> axios.get(/*REST_API_BASE_URL, user*/);</option>
                                                <option value="">2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <textarea name="" id=""
                                                className="form-control"
                                                placeholder="Write about the work"
                                                cols="10" rows="3" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col mb-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Address</label>
                                                <textarea className="form-control" rows="2"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    placeholder="Where the Work is House NO/Name, Street"></textarea>
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
                                                <label className="mb-1 mx-3">How Big Is Your Work</label>
                                                <input type="text" className="form-control" rows="2"
                                                    placeholder="1/2, 1, 2, ect... day" />
                                            </div>
                                        </div>

                                        <div className="col mb-2 ms-2 text-start">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Daily Wage</label>
                                                <input type="number" className="form-control text-success"
                                                    placeholder="In Rupees" />
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
                                            <button type="button" className="btn btn-success">Post</button>
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

export default WorkCreation;
