import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import styles from "/src/assets/styles/Services.module.css";

const Service = () => {

    const getJobCategories = () => axios.get("http://localhost:8080/auth/jobcat")

    const navigate = useNavigate();

    const [jobCats, setJobCats] = useState([]);
    const [jobCIMG, setJobCIMG] = useState('');

    useEffect(() => {
        getAllJobCategories();
    }, [])

    function getAllJobCategories() {
        getJobCategories().then((response) => {
            setJobCats(response.data);
            setJobCIMG(response.data.jobCaImg);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }

    function JCIMG() {
        if (jobCIMG) {
            return (
                <img src="/images/blue-profile-logo-png-transparent-png.png" alt="" style={{ width: '140px', height: '140px' }} />
            );
        } else {
            return (
                null
            );
        }
    }


    return (
        <div className="container-fluid">

            <div className="row text-center text mb-4 mt-3" style={{ position: 'relative' }}>
                <img src="/images/FaveTools.gif" alt="" style={{ width: '100%' }} />
                <h1
                    style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)', zIndex: '999',
                        fontSize: '12em',opacity:'.6',color:'black'
                    }}>
                    Services we provide
                </h1>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-center">

                    {jobCats.map(jobCat => (
                        <div className="col-4 mt-4" key={jobCat.jcatId}>
                            <div className="card">
                                <div className={`${styles.header} card-header`} id={`${styles.card}`}>
                                    <img src={jobCat.jobCaImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="card-body">
                                    <p className="text-dark"><strong>{jobCat.jobCategory}</strong></p>
                                    <p className="text-dark">{jobCat.jobDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Service;
