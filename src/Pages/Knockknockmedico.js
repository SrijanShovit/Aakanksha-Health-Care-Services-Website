import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import oats from '../Images/oats.jfif'

const Knockknockmedico = () => {
    return (
        <>

            <Popup />
            <Popup1 />
            <Header />
            <div class="btn-group mx-5 my-5" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Medicines</button>
                <button type="button" class="btn btn-warning">Healthcare Products</button>
                <button type="button" class="btn btn-secondary">Nutritious Products</button>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12 my-3 p-3 ">
                            <div className="card">
                                <div className="center mx-3 mt-3">
                                    <img src={oats} alt="" />
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h5>
                                        Quakr Oats
                                        </h5>
                                    </div>
                                    <div className="card-description">
                                        <p style={{color: 'grey'}}>Super Healthy Oats</p>
                                        500 g in 1 packet
                                        <br />
                                        <p style={{color: 'green',fontSize: '18px'}}> Rs 349</p>
                                    </div>
                                </div>
                                <div className="mx-3 mb-2" align="right">
                                <button type="button" class="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Knockknockmedico
