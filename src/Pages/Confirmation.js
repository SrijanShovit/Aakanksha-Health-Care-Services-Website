import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Link } from "react-router-dom";

const Confirmation = () => {
    return (
        <div>
             <Popup />
            <Popup1 />
            <Header /> 

             {/* progressbar */}
             <div className="container px-1 px-md-4 pt-3 mx-auto w-75">
                <div className="card-progress">
                    <div className="row d-flex justify-content-between px-3 top">

                    </div> {/* Add class 'active' to progress */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <ul id="progressbar" className="text-center">
                                <li className="active step0" />
                                <li className="active step0" />
                                <li className="active step0" />
                                <li className="active step0" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* progressbar */}

            <div className="container w-100">

                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h4>Delivery</h4>
                    </div>
                    <div className="col-12 col-lg-6">
                        Cart
                    </div>
                </div>

            </div>


            <div className="container w-50">
                

                <div class="row mt-2 mb-5">


                    <div class="col" align="left">
                        <Link to="/pay"><button type="button" className="btn btn-secondary btn-sm deliverybutton">Go Back</button></Link>

                    </div>

                    <div className="col deliverybutton" align="right">
                        <Link to="#"><button type="button" className="btn btn-primary btn-sm deliverybutton">Confirm</button></Link>

                    </div>
                </div>


            </div>
            <Footer/>




            
        </div>
    )
}

export default Confirmation
