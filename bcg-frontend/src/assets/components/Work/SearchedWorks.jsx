import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

import styles from "/src/assets/styles/SearchedWorks.module.css";
import { getWorkByKey } from "../../services/WorkService";

const SearchedWorks = () => {

    const [searchResults, setWorks] = useState([]);

    const { key } = useParams()
    const checkKey = key;
    // console.log(checkKey);
    const navigate = useNavigate();

    useEffect(() => {
        findWork(key);
    }, [])

    function findWork(key) {
        getWorkByKey(key)
            .then((response) => {
                console.log(response.data)
                setWorks(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    function goToJobDetails(id) {
        navigate(`/workdetails/${id}`);
    }

    return (
        <div className={styles["search-results-container"]}>
        {searchResults !== null && searchResults.length > 0 ? (
            <div className={styles["work-list"]}>
                {searchResults.map((work, index) => (
                    <div key={index} className={styles["work-item"]} onClick={() => goToJobDetails(work.jobId)}>
                        <h2>{work.jobTitle}</h2>
                        <p>
                            <span>
                                <Icon.GeoAltFill />
                            </span>
                            <span>{work.location}</span><span>  </span>
                            <span>{work.district}</span>
                        </p>
                        <p>Payment: ₹{work.paymentPerDay}</p>
                    </div>
                ))}
            </div>
        ) : searchResults !== null ? (
            <div className={`${styles["search-results-container"]} ${styles["text-center"]}`}>
                <div className={styles["no-results-wrapper"]}>
                    <img src="https://indiaai.gov.in/indiaAi-2021/build/images/Listing-page/gif/no-result.gif" alt="No Results" className={styles["no-results-image"]} />
                    <h1 className={styles["no-results-text"]}>Oops! No Results Found</h1>
                    <p className={styles["no-results-description"]}>Try refining your search criteria or explore other options.</p>
                </div>
            </div>
        ) : (
            <div className={`${styles["search-results-container"]} ${styles["text-center"]}`}>
                <div className={styles["no-results-wrapper"]}>
                    <h1 className={styles["no-results-text"]}>Error Occurred</h1>
                    <p className={styles["no-results-description"]}>An error occurred while fetching the data. Please try again later.</p>
                </div>
            </div>
        )}
    </div>
    
    );
}

export default SearchedWorks;
