import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import "/src/assets/styles/Home.css";
import * as Icon from 'react-bootstrap-icons';
import JobCard from './JobCard';
import WorkSlide from './Work/WorkSlides';
import { getUserDetails } from '../services/profile';


function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails();
  }, [])

  function goToService() {
    navigate('/service');
  }

  function goToSearch() {
    console.log(searchTerm);
    navigate(`/searchWork/${searchTerm}`)

  }

  const [searchTerm, setSearchTerm] = useState('');

  const relatedWords = ["Moving",
    "Cleaning", "Plumbing", "Electrical", "Landscaping", "Painting", "Carpentry",
    "Roofing", "Flooring", "Masonry", "Welding", "Automotive", "Pest Control",
    "Drywall", "Locksmith", "Appliances", "Janitorial", "Demolition"];

    const handleInputChange = (event) => {
      const { value } = event.target;
      const defaultValue = "0000";
      if (value.trim() === "") {
          setSearchTerm(defaultValue);
      } else {
          setSearchTerm(value);
      }
  };
  



  return (
    <div className="container-fluid">

      <div className="container">
        <div className="row">
          <div className="col text-center my-5">
            <h1 id='siteTitle'>Empowering Skills, Fuelling Futures</h1>
          </div>
        </div>

        <div className="container mt-5">

          <div className="row justify-content-center ">
            <div className="col-md-6">

              <div className="pill-search-container d-flex">
                <input
                  className="form-control me-2 pill-search"
                  type="search"
                  list="relatedWords"
                  placeholder="Search Works title, category or district"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button className="btn btn-success" onClick={goToSearch}><Icon.Search /></button>

                {/* Datalist for autocomplete suggestions */}
                <datalist id="relatedWords">
                  {relatedWords.map((word, index) => (
                    <option key={index} value={word} />
                  ))}
                </datalist>
              </div>

            </div>
          </div>

          <div className="row justify-content-center mt-5">

            <div className="col-lg-2">
              <div className="card text-center d-flex align-items-center justify-content-center p-2" id='job-category-card'>
                <h5 className="m-0">Assembly</h5>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card text-center d-flex align-items-center justify-content-center p-2" id='job-category-card'>
                <h5 className="m-0">Plumbing</h5>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card text-center d-flex align-items-center justify-content-center p-2" id='job-category-card'>
                <h5 className="m-0">Electrical</h5>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card text-center d-flex align-items-center justify-content-center p-2" id='job-category-card'>
                <h5 className="m-0">Demolition</h5>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card text-center d-flex align-items-center justify-content-center p-2" id='job-category-card'>
                <h5 className="m-0">Pest Control</h5>
              </div>
            </div>

            <div className="col-lg-2" onClick={goToService}>
              <div className="card text-center d-flex align-items-center justify-content-center p-2" id='job-category-card'>
                <h5 className="m-0">More <span><Icon.CaretRightFill /></span></h5>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col text-danger">
            <p>about</p>
          </div>
        </div>
      </div> */}

      <div className="container-fluid mt-5">
        <JobCard />
      </div>

      <div className="container" id="works">
        <WorkSlide />
      </div>


    </div>
  )
}

export default Home;