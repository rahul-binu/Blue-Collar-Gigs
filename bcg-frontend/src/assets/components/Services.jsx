import React, { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {

    const getJobCategories = () => axios.get("http://localhost:8080/auth/jobcat")

    const [jobCats, setJobCats] = useState([]);

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


    return (
        <div className="container-fluid">
            <div className="container mt-4">
                <div className="row justify-content-center">

                    {jobCats.map(jobCat => (

                        <div className="col-4 mt-4 " key={jobCat.jcatId}>
                            <div className="card">
                                <div className="card-header" style={{ background: 'rgb(233, 236, 239)', height: '140px' }}>
                                    <img src="/images/blue-profile-logo-png-transparent-png.png" alt="" style={{width :'140px',height:'140px'}}/>
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
