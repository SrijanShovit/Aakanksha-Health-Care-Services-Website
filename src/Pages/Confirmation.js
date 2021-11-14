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

             

            <div className="container w-100">

                <p>Congratulations!! Your payment was successful</p>

            </div>


            
            <Footer/>




            
        </div>
    )
}

export default Confirmation
