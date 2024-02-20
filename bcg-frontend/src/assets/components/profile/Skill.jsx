import React from "react";

import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';

import Profile from "../Profile";
import ProfileSide from "./profileSide";

const Skill = () => {



    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-10 col-lg-9 col-sm-10">
                        <div className="card shadow-2-strong">

                            <div className="row card-body  text-center">

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
                                                    <img src="/images/blue-profile-logo-png-transparent-png.png" alt="" id='profilePhoto' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{firstName} Sam</h4>
                                                <p className="mb-0">@12343456</p>
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
                                                <select className="form-control">
                                                    <option value="">English</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="form-group">
                                                <label className="mb-1 mx-3">Second tongue</label>
                                                <select className="form-control">
                                                    <option value="">English</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="row">
                                        <div className="col text-end mx-3">
                                            <button className="btn btn-success mt-2 mb-2" >Save Changes</button>
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