import React from "react";
import { NavLink } from "react-router-dom";
import { If } from 'rc-if-else';
import {Container,Navbar,Nav,Button} from "react-bootstrap";
import "../App.css"
import { FaSearch,FaPills,FaHospitalSymbol,FaUserMd,FaShoppingCart } from "react-icons/fa";
import logo from "../Images/logo.jfif";


const Header = () => {
<<<<<<< HEAD

 
=======
  function logout()
  {
    window.sessionStorage.clear();
    window.location.reload();
  }
>>>>>>> main
  return (
    <>
      <Navbar  bg="my-cyan" variant="dark" expand="lg" fixed="top">
        <Container>
<<<<<<< HEAD
          <Navbar.Brand href="#home">
            <img className="logo" src={logo}/></Navbar.Brand>
            <div class="input-group searchbox">
            <input type="text" class="form-control" id="search-txt" placeholder="Zipcode | Search medicine , Camps , Health Brands" />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
=======
          <Navbar.Brand>
            <NavLink to="/"><img className="logo w3-animate-zoom" src={logo} alt="logo"/></NavLink></Navbar.Brand>
            <If condition={window.sessionStorage.getItem("username")}>
              <h5 className="welTittle" style={{ visibility:"visible" }}>
                  Welcome {window.sessionStorage.getItem("username")}
              </h5>
            </If>
            <div className="input-group searchbox">
            <input type="text" className="form-control w3-animate-zoom" placeholder="Zipcode | Search medicine , Camps , Health Brands"/>
            <div className="input-group-append">
              <button className="btn btn-secondary w3-animate-zoom" type="button">
>>>>>>> main
                <FaSearch/>
              </button>
            </div>
        </div>
        <If condition={window.sessionStorage.getItem("username")}>
            <Button className="btn-logout" variant="link" onClick={logout}>
                Logout
            </Button>
          </If>
        </Container>
    </Navbar>
    <Navbar  className="subheader" bg="my-cyan" variant="dark" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w3-animate-zoom">
              <NavLink className="navstyle" to="#link"><div className="iconDiv"><FaPills /></div>Knock Knock Medico</NavLink>
              <NavLink className="navstyle" to="/camp"><div className="iconDiv"><FaHospitalSymbol /></div>Health Camp</NavLink>
              <NavLink className="navstyle" to="/doctors"><div className="iconDiv"><FaUserMd /></div>Doctors Consultation</NavLink>
              <NavLink className="navstyle" to="#link"><div className="iconDiv"><FaShoppingCart /></div>Cart</NavLink>
            </Nav>
          </Navbar.Collapse>
      </Container>
   </Navbar>

    </>
  );
};


export default Header;
