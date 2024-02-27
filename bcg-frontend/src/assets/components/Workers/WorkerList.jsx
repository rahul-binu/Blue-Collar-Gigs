import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAllWorkersAPI, getAllWorkersProfileAPI } from "../../services/WorkerServices";

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
        console.log(id);
        navigate('workerDetail:{id}');
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
                                                                <span key={worker.workerId}>{worker.skills}</span>
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
        </div>
    );
}

export default WorkerList;