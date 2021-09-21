import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousels from '../Components/Carousels'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Accordion from '../Components/Accordion'
import Homeproduct from '../Components/Homeproduct'

const Home = () => {
    return (
        <>
            <Popup />
            <Popup1 />
            <Header/>
            <Carousels/>
            <Homeproduct/>
            <Accordion />
            <Footer/>            
        </>
    )
}

export default Home
