import React from 'react';

function Register() {

    return (
        <>

            <section className="">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-10 col-lg-4 col-sm-10">
                            {/* <h3 className="text-center mb-3 text-primary">Blue Collar Gigs</h3> */}
                            <div className="card shadow-2-strong">
                                <div className="card-body  text-center">


                                    <div className="form-outline mb-3">
                                        <h1 className="">Blue Collar Gigs</h1>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="-2" className="form-control form-control-md" name="email"
                                            placeholder="Email adress" />
                                    </div>

                                    <select class="form-select form-select mb-3" aria-label=".form-select-lg example">
                                        <option selected>---Register as a---</option>
                                        <option value="1">Worker</option>
                                        <option value="2">Recruiter</option>
                                    </select>

                                    <div className="form-outline mb-4">
                                        <div className="col">
                                            <input type="password" id="-2" className="form-control form-control-md mb-4" name="password"
                                                placeholder="Password" />
                                        </div>
                                        <div className="col">
                                            <input type="password" id="-2" className="form-control form-control-md mb-4"
                                                placeholder="confirm password" />
                                        </div>
                                    </div>

                                    <button className="btn btn-success btn-lg w-100 mb-2" type="submit">Sign up</button>
                                    <span className=""><a href="" className="text-decoration-none ">Already have an account</a></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;