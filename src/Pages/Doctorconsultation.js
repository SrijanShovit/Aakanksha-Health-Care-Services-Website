import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import doctor1 from '../Images/doctor1.jpg'
import doctor2 from '../Images/doctor2.jpg'

const Doctorconsultation = () => {
    return (
        <>
            <Popup />
            <Popup1 />
            <Header />
            <div className="container-fluid  w-100 ">
                <div className="row">


                    <div className="col-lg-12 col-12  my-3" align="left">
                        <button className="btn seemore2" disabled>Consult Doctors</button>
                    </div>

                    {/* doctor1 */}

                    <div className="col-lg-4 col-12 my-2">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor1} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. Joanna</h5>

                                <p className="card-text description">
                                    Senior Neurologist,<br/> Apollo Hospital,Kankarbagh,Patna-800020
                                    
                                </p>
                            </div>

                            <div align="right">

                                <button type="button" className="btn btn-warning seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>


                    {/* doctor 2 */}

                    <div className="col-lg-4 col-12 my-2 ">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. Kishore</h5>

                                <p className="card-text description">
                                ENT Specialist,<br/> IGIMS ,Raja Bazar,Patna-800020
                                </p>
                            </div>

                            <div align="right">

                            <button type="button" className="btn btn-warning seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>
                    {/* doctor 2 */}

                    <div className="col-lg-4 col-12 my-2">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. Peter Rodrick</h5>

                                <p className="card-text description">
                                Physician,<br/> Care and Cure ,Anishabad,Patna-800020
                                </p>
                            </div>

                            <div align="right">

                            <button type="button" className="btn btn-warning seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>
                    {/* doctor 2 */}

                    <div className="col-lg-4 col-12 my-2">

                        <div className="card cardfeature" >

                            <div align="center">
                                <img src={doctor2} className="d-block mt-3 cardgroup" alt="medicine" />
                            </div>


                            <div className="card-body">
                                <h5 className="card-title">Dr. O.P. Verma</h5>

                                <p className="card-text description">
                                Heart Specialist,<br/> AIIMS,Anishabad,Patna-800020
                                </p>
                            </div>

                            <div align="right">

                            <button type="button" className="btn btn-warning seemore1 mx-3 my-2">Book Appointment</button>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <Footer/> 

        </>
    )
}

export default Doctorconsultation
