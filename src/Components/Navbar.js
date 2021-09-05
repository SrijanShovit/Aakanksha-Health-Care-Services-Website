import React from 'react'
import { IconContext } from "react-icons";
import {FaSearch} from 'react-icons/fa'
import logo from '../Images/logo.jfif'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <>
           <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" >
                        <img src={logo} alt="Aakanksha" width={75} height={75} className="d-inline-block align-text-top" />

                    </div>
                    <form className="d-flex">
                        <input className="form-control mr-2 searchbox" type="search" placeholder="Delivery pin | Search medicine, camps, health brands" aria-label="Search"
                        
                        />

                        {/* <Link to="/cart"> */}
                        
                    {/* </Link> */}
                      
                    
                    
                        
                    </form>

                    
                </div>

            </nav>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Knock Knock Medico</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Doctor's Consultation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Health Camps</a>
              </li>
              
              
            </ul>
           
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar
