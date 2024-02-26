import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { getAllWorks } from "../services/WorkService";
import { UserId } from './utils/UserLocalStoreVal';
import { updateWorkAPI } from '../services/WorkService';
import { useNavigate } from 'react-router-dom';
// changed to workCreation

const MyPosts = () => {

    const usId = UserId();

    const navigate = useNavigate();

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

    function workStatusUpdate(jid, status) {

        const wid = jid;
        const jobStatus = status;
        const workData = {
            jobStatus
        };

        console.log(workData);

        updateWorkAPI(wid, workData).then((response) => {
            console.log(response.data);
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }

    function editJobBtn(jid) {
        localStorage.setItem('jid', jid);
        navigate('/editwork');
    }

    function goToJobDetails(id) {
        navigate(`/workdetails/${id}`);
    }

    return (
        <>
            <div className="container-fluid">

                {/* <div className="row text-center text mb-4 mt-3" style={{ position: 'relative' }}>
                    <img src="/images/FaveTools.gif" alt="" style={{ width: '100%' }} />
                    <h1
                        style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)', zIndex: '999',
                            fontSize: '12em', opacity: '.9', color: 'light-blue'
                        }}>
                        Services we provide
                    </h1>
                </div> */}

                <div className="container mt-4">
                    <div className="row justify-content-center">
                        {works.map(work => (
                            work.recruiterId == usId && (
                                <div className="col-5 p-3" key={work.jobId}>
                                    <div className="card bg p-3">

                                        <div className="row mb-2 ">
                                            <div className="col">
                                                <h5>{work.jobTitle}</h5>
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <div className=" align-item-center bg-secondary text-center text-light"
                                                    style={{ backgroundColor: 'black', borderRadius: '50px', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                    onClick={() => goToJobDetails(work.jobId)}
                                                >
                                                    <Icon.ThreeDotsVertical />
                                                </div>
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

                                            <div className="col">
                                                <button className="btn btn-warning mx-1" onClick={() => editJobBtn(work.jobId)}>Edit <span><Icon.PencilFill /></span></button>
                                                {work.jobStatus !== 'inactive' ? (
                                                    <button className="btn btn-success mx-1" title='mark as Incompleated'
                                                        onClick={() => workStatusUpdate(work.jobId, 'inactive')}>Done <span><Icon.CheckCircle /></span></button>
                                                ) : (
                                                    <button className="btn btn-danger mx-1" title='mark as Incompleated'
                                                        onClick={() => workStatusUpdate(work.jobId, 'active')}>Incomplete <span><Icon.CheckCircle /></span></button>
                                                )}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default MyPosts;