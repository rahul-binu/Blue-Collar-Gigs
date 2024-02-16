import React from 'react';

import "/src/assets/styles/Home.css";
import * as Icon from 'react-bootstrap-icons';


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center my-5">
          <h1 id='siteTitle'>Empowering Skills, Fuelling Futures</h1>
        </div>
      </div>

      <div className="container mt-5">

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="pill-search-container">
              <form className="d-flex">
                <input className="form-control me-2 pill-search" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success"><Icon.Search /></button>
              </form>
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

        </div>
      </div>

    </div>
  )
}

export default Home;