import React from 'react'
import cart from '../Images/cartincart.jpeg'
import loc from '../Images/locincart.jpeg'
import pay from '../Images/payincart.jpeg'
import success from '../Images/paymentsuccess.png'

const CartStages = () => {
    return (

        <div className="row">


            <div className="col-lg-12 col-12  my-3">

               


                <div className="row" align="center">
                    <div className="col-lg-3 col-12  my-3">
                        <div className="featurecircle container box">
                            <img src={cart} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                            <h6>
                                Check your cart
                            </h6>

                        </div>
                    </div>
                    <div className="col-lg-3 col-12  my-3">
                        <div className="featurecircle container box">
                            <img src={loc} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                            <h6>
                                Submit Delivery Location
                            </h6>

                        </div>
                    </div>
                    <div className="col-lg-3 col-12  my-3">
                        <div className="featurecircle container box">
                            <img src={pay} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                            <h6>
                                Make safe payment
                            </h6>

                        </div>

                    </div> 
                    <div className="col-lg-3 col-12  my-3">
                        <div className="featurecircle container box">
                            <img src={success} className="d-block mt-3 avatar" alt="doctorwelcomes" />
                            <h6>
                                Make safe payment
                            </h6>

                        </div>

                    </div> 

                </div>
            </div>



        </div>
    )
}

export default CartStages
