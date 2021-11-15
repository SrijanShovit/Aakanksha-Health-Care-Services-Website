import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import store1 from '../Images/store1.jpg'
import store2 from '../Images/store2.jfif'
import store3 from '../Images/store3.jfif'
import store4 from '../Images/store4.jpg'

import {
    Link
  } from "react-router-dom";

const KnockKnockstore = () => {
    return (
        <div>
            <Popup />
            <Popup1 />
            <Header />
             <div className="container w-75 mb-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card fetcard featurecard1">
                        <img src={store1} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">GUPTA MEDICAL STORE</h5>
                            <p className="card-text">
                            Address : Salt Lake Road, Kolkata
                                <br/>
                                Store Timings: 9:00 A.M. - 8:00 P.M.
                            </p>
                           
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                <Link to="/products">
                                <button type="button" class="btn btn-success btn-sm">
                                        See Products
                                    </button>

                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card fetcard featurecard2">
                        <img src={store2} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">WELLNESS FOREVER CHEMISTS</h5>
                            <p className="card-text">
                            Address : Rd No-4, Rajendra Nagar, Patna 
                                <br/>
                                Store Timings: 10:00 A.M. - 8:00 P.M.
                            </p>
                           
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                <Link to="/products">
                                <button type="button" class="btn btn-success btn-sm">
                                        See Products
                                    </button>

                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card fetcard featurecard3">
                        <img src={store3} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ANAMIKA PHARMA</h5>
                            <p className="card-text">
                                Address : Venkat Jagnnatham Road, Bengaluru
                                <br/>
                                Store Timings: 9:00 A.M. - 7:00 P.M.
                            </p>
                           
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                <Link to="/products">
                                <button type="button" class="btn btn-success btn-sm">
                                        See Products
                                    </button>

                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card fetcard featurecard4">
                        <img src={store4} className="card-img-top rotcard" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MEDICANA STORE</h5>
                            <p className="card-text">
                                Address : Station Road Market , Patna
                                <br/>
                                Store Timings: 10:00 A.M. - 9:00 P.M.
                            </p>
                           
                            <div class=" d-md-flex justify-content-md-end">
                                <div class="btn-group">
                                    <Link to="/products">
                                <button type="button" class="btn btn-success btn-sm">
                                        See Products
                                    </button>

                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default KnockKnockstore
