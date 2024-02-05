import React from 'react';

import "/src/assets/styles/Home.css";
// import { Search } from "react-bootstrap-icons";


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
                <button className="btn btn-outline-light" type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;