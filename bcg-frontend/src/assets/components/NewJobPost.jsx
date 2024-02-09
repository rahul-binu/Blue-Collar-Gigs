import React from "react";
import { useState } from "react";

const NewJobPost = () => {

    const [isChecked, setChecked] = useState(false);

    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-8 col-sm-10">
                        <div className="card shadow-2-strong">

                            <div className="card-body  text-center">

                                <div className="form-outline mb-3">
                                    <h1 className="">Add a new Work</h1>
                                    <hr />
                                </div>

                                {/* <div className="row">
                                    <div className="col-12 col-sm-auto mb-3">
                                        <div className="mx-auto" >
                                            <div className="d-flex justify-content-center align-items-center rounded" style={{ background: 'rgb(233, 236, 239)', height: '140px' }}>
                                                <img src="" alt="" id='profilePhotoremove' />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row form-outline mb-2">
                                    <div className="col text-start">
                                        <label htmlFor="" className="mx-3 mb-1">Job Title</label>
                                        <input type='email' autoComplete="new-password"
                                            className='form-control'
                                            placeholder="Job Title" />
                                        {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                    </div>
                                    <div className="col text-start">
                                        <label htmlFor="" className="mx-3 mb-1">Job Category</label>
                                        <input type='email' autoComplete="new-password"
                                            className='form-control'
                                            placeholder="Job Category" />
                                        {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                    </div>
                                </div>

                                <div className="row form-outline mb-2">
                                    <div className="col text-start">
                                        <div className="form-group">
                                            <label htmlFor="" className="mx-3 mb-1">Email</label>
                                            <input type='email' autoComplete="new-password"
                                                className='form-control'
                                                placeholder="user@example.com" />
                                            {/* {errors.email && <div className='invalid-feedback'>{errors.email}</div>} */}
                                        </div>
                                    </div>

                                    <div className="col text-start">
                                        <div className="form-group">
                                            <label htmlFor="" className="mx-3 mb-1">Contact Number</label>
                                            <input type='email' autoComplete="new-password"
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
                                                placeholder="Where the Worker Need to Come"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col mb-2 text-start">
                                        <div className="form-group">
                                            <label className="mb-1 mx-3">District</label>
                                            <input type="text" className="form-control" rows="2"
                                                placeholder="District" />
                                        </div>
                                    </div>
                                    <div className="col mb-2 text-start">
                                        <div className="form-group">
                                            <label className="mb-1 mx-3">State</label>
                                            <input type="text" className="form-control" rows="2"
                                                placeholder="State" />
                                        </div>
                                    </div>
                                    <div className="col mb-2 text-start">
                                        <div className="form-group">
                                            <label className="mb-1 mx-3">Pin Code</label>
                                            <input type="text" className="form-control" rows="2"
                                                placeholder="654987" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col mb-2 text-start">
                                        <div className="form-group">
                                            <label className="mb-1 mx-3">About The Work</label>
                                            <textarea className="form-control" rows="5"
                                                placeholder="Discription About the Work"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col mb-2 text-start">
                                        <div className="form-group">
                                            <label className="mb-1 mx-3">How Big Is Your Work</label>
                                            <input type="text" className="form-control" rows="2"
                                                placeholder="3, 4, 5, ect... hours" />
                                        </div>
                                    </div>
                                    <div className="col mb-2 ms-2 text-start">
                                        <label htmlFor="" className="mb-1 mx-3">Please Fill This Correct</label>
                                        <div className="form-group">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="mb-1 mx-3">The Work Need Transportation Vehicle</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="mb-1 mx-3">The Work Need Power Tools</label>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col text-end mx-3">
                                        <button className="btn btn-success mt-2 px-3 mb-2">Post</button>
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

export default NewJobPost;