import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { getAllWorks } from "../../services/WorkService";


const WorkSlide = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        getAllWork();
    }, []);

    function getAllWork() {
        getAllWorks()
            .then((response) => {
                console.log(response.data);
                setWorks(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="container-fluid">
            {/* <div className="row mt-3">
                {works.map(work =>

                    <div className="col-3" key={work.jobId}>

                        <div className="card bg-primary text-white text-center p-3">
                            <blockquote className="blockquote mb-0">
                                <h3>{work.jobTitle}</h3>
                                <p>{work.jobDescription}</p>
                                <footer className="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>

                    </div>

                )}

                <div className="col-3">
                    <div className="card bg-warning p-2">
                        <div className="row">
                            <div className="col">
                                <h5>job titile heare</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="row justify-content-center mt-3">
                <div className="col-5 lg-5">
                    {works.map(work =>

                        <div className="card bg p-3" key={work.jobId}>
                            <div className="row">
                                <div className="col">
                                    <h5>{work.jobTitle}</h5>
                                </div>
                            </div>

                            <div className="row text-secondary">
                                <div className="col">
                                    <label>Estimated work start date</label>
                                    <p>{work.workEstimatedStartDate}</p>
                                </div>
                                <div className="col">
                                    <label>Work duration</label>
                                    <p>{work.estimatedTFTWork}<span> Days</span></p>
                                </div>
                            </div>

                            <div className="row text-dark">
                                <div className="col ">
                                    <p><span><Icon.EnvelopeAt /> {work.recruiterEmail}</span></p>
                                </div>
                                <div className="col">
                                    <p><span><Icon.Telephone /> {work.recruiterPhone}</span></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p>{work.jobDescription}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col d-flex">
                                    <div className="car px-3 py-2 align-item-center "
                                        style={{ backgroundColor: '#EFEFEF', borderRadius: '25px' }}>
                                        {work.jobCategory}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div> */}

            <div className="row justify-content-center mt-3">
                {works.map(work => (
                    <div className="col-5 p-3" key={work.jobId}>
                        <div className="card bg p-3">

                            <div className="row mb-2 ">
                                <div className="col">
                                    <h5>{work.jobTitle}</h5>
                                </div>
                            </div>

                            <div className="row mb-2 text-secondary">
                                <div className="col">
                                    <label>Estimated work start date</label>
                                    <p>{work.workEstimatedStartDate}</p>
                                </div>
                                <div className="col">
                                    <label>Work duration</label>
                                    <p>{work.estimatedTFTWork}<span> Days</span></p>
                                </div>
                            </div>

                            <div className="row mb-2 text-dark">
                                <div className="col-7">
                                    <p><span><Icon.EnvelopeAt /> {work.recruiterEmail}</span></p>
                                </div>
                                <div className="col-5">
                                    <p><span><Icon.Telephone /> {work.recruiterPhone}</span></p>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col">
                                    <p>{work.jobDescription}</p>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col d-flex">
                                    <div className="car px-3 py-2 align-item-center "
                                        style={{ backgroundColor: '#EFEFEF', borderRadius: '25px' }}>
                                        {work.jobCategory}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label>You can earn </label>
                                    <span className='text-success'> <strong>{work.paymentPerDay}</strong> <span className='text-dark'>RS/day</span></span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );

}

export default WorkSlide;