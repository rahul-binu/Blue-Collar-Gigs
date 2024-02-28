import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAllWorkersAPI, getAllWorkersProfileAPI } from "../../services/WorkerServices";
import * as Icon from 'react-bootstrap-icons';
import styles from "/src/assets/styles/JobCard.module.css";

const WorkerList = () => {

    useEffect(() => {
        getAllWorkers()
    }, []);

    const [workerProfileDetails, setWorkerProfileDetails] = useState([]);
    const [workerDetails, setWorkerDetails] = useState([]);
    const navigate = useNavigate();

    function getAllWorkers() {

        getAllWorkersAPI().then((response) => {
            console.log(response.data);
            setWorkerDetails(response.data);
        }).catch((error) => {
            console.log(error, " check here");
        })

        getAllWorkersProfileAPI().then((response) => {
            console.log(response.data);
            setWorkerProfileDetails(response.data);
        }).catch((error) => {
            console.log(error, " check here");
        })
    }

    function handleViewClick(id) {
        //console.log(id);
        navigate(`/workerdetails/${id}`);
    }

    function ProfilePic(pic) {
        if (pic) {
            return (pic);
        } else {
            return ("/images/noProWorker.png");
        }
    }

    return (
        <div className="container text-dark">
            <div className="row">
                <div className="container mt-5">
                    <h2 className="mb-4">Workers List</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>WID</th>
                                <th>Name</th>
                                <th>Expertise</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                workerProfileDetails.map(workerP => (
                                    <tr key={workerP.profileId}>
                                        <td>{workerP.profileId}</td>
                                        <td>
                                            <span>{workerP.profileFirstName} </span>
                                            <span className="px-3">{workerP.profileLastName}</span>
                                        </td>
                                        <td>
                                            {
                                                workerDetails.some(worker => workerP.userId === worker.userId) ?
                                                    workerDetails
                                                        .filter(worker => workerP.userId === worker.userId)
                                                        .map(worker => (
                                                            worker.skills.length > 0 ?
                                                                <span className="px-3"
                                                                    key={worker.workerId}>{worker.skills}</span>
                                                                : <span key={worker.workerId}>No Skills to show</span>
                                                        ))
                                                    : <span key={workerP.userId}>No Skills to show</span>
                                            }
                                        </td>
                                        <td>
                                            <span>{workerP.address}</span>
                                            <span>, {workerP.district}</span>
                                            <span>{workerP.state}</span>
                                            <span>{workerP.pincode}</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary"
                                                data-toggle="modal" data-target="#viewModal"
                                                onClick={() => handleViewClick(workerP.userId)}>View</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="container mt-5">

                    < div className="row mb-5" >
                        {
                            workerProfileDetails.map(workerP => (

                                <div className="col-6 mb-5">
                                    <div className="card p-3 " onClick={() => handleViewClick(workerP.userId)} id={styles.workerCard}>
                                        <div className="row">

                                            <div className="col-2">
                                                <img src={ProfilePic(workerP.profilePic)}
                                                    style={{
                                                        height: '100px',
                                                        width: '100px',
                                                        borderRadius: '50%',
                                                        border: '2.5px solid green'
                                                    }}
                                                    alt="" />
                                            </div>

                                            <div className="col text-start mt-2 mx-4">
                                                <div className="row">
                                                    <span style={{ fontSize: '20px', textAlign: 'left' }}>
                                                        {workerP.profileFirstName}
                                                        <span style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '10px' }}>
                                                            {workerP.profileLastName}
                                                        </span>

                                                        {
                                                            workerDetails.some(worker => workerP.userId === worker.userId) ?
                                                                workerDetails
                                                                    .filter(worker => workerP.userId === worker.userId)
                                                                    .map(worker => (
                                                                        worker.skills.length > 0 ?
                                                                            <span key={worker.workerId}
                                                                                style={{ fontSize: '14px', textAlign: 'right', paddingLef: '50px' }}
                                                                            >
                                                                                {worker.skills && worker.skills.length > 10 ? `${worker.skills.slice(0, 10)}...` : worker.skills}
                                                                            </span>
                                                                            : <span key={worker.workerId}
                                                                                style={{ fontSize: '14px', textAlign: 'left', paddingLeft: '50px' }}>No Skills to show</span>
                                                                    ))
                                                                : <span key={workerP.userId}
                                                                    style={{ fontSize: '14px', textAlign: 'left', paddingLeft: '50px' }}>No Skills to show</span>
                                                        }

                                                    </span>


                                                </div>
                                                <div className="row">
                                                    <span>
                                                        <span style={
                                                            {
                                                                marginRight: '15px'
                                                            }
                                                        }>
                                                            <Icon.FileEarmarkPersonFill />
                                                        </span>
                                                        {workerP.aboutUser && workerP.aboutUser.length > 100 ? `${workerP.aboutUser.slice(0, 100)}...` : workerP.aboutUser}
                                                    </span>
                                                </div>
                                                <div className="row text-secondary">
                                                    <span>
                                                        <span>
                                                            Check out my profile for more details...!
                                                        </span>

                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>
            </div>
        </div >
    );
}

export default WorkerList;