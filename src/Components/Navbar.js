import React from 'react'
import { IconContext } from "react-icons";
import {FaSearch} from 'react-icons/fa'
import logo from '../Images/logo.jfif'

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

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link " href="index.html">Knock Knock Medico <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="location.html">Health Camp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="consultation.html">Doctor's Consultation</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* <a href="shoppingcart.html" className="shopping-cart form-control mr-sm-2">
              <i className="fa fa-shopping-cart" style={{fontSize: '30px'}} />
              <span />
            </a> */}
            <button type="button" className="btn btn-primary ml-2 mr-2 signinbutton">Log In
                        {/* {props.btnx ? "Sign In" : "Sign Out" } */}
                    </button> 
          </form>
        </div>
      </nav>
        </>
    )
}

export default Navbar
