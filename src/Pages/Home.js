import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousels from '../Components/Carousels'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Accordion from '../Components/Accordion'
import Homeproduct from '../Components/Homeproduct'
import { FaSearch} from "react-icons/fa";
import { Container } from 'react-bootstrap'
const Home = () => {
    return (
        <>
            <Popup />
            <Popup1 />
            <Header/>
            <Container>
                <div className="input-group searchbox mt-3">
                        <input type="text" className="form-control w3-animate-zoom" placeholder="Product name, Health Brands"/>
                    <div className="input-group-append">
                        <button className="btn btn-secondary w3-animate-zoom" type="button">
                        <FaSearch/>
                        </button>
                    </div>
                </div>
           </Container>
            <Carousels/>
            <Homeproduct/>
            <Accordion />
            <Footer/>            
        </>
    )
}

export default Home
