import React from 'react'
import Card from './Card'
import Details from './detailsForm'
import Side from './sidenavDetails'
import './index.css'
import Header from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Popup from '../../Components/popup'
import Popup1 from '../../Components/popuplogin'


const BookappPage = () => {
    return (
        <div align="center">
             <Popup />
            <Popup1 />
            <Header />
            
            {/* <Card/> */}
            <div className="container my-5">

            <Details/>
            </div>
            {/* <Side/> */}
            <Footer />
            
        </div>
    )
}

export default BookappPage
