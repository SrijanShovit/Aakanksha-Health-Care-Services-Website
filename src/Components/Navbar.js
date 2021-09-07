import React from "react";
import { IconContext } from "react-icons";
import { FaSearch,FaPills,FaHospitalSymbol,FaUserMd,FaShoppingCart,FaUser } from "react-icons/fa";
import logo from "../Images/logo.jfif";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Container,Navbar,Nav} from "react-bootstrap";
import "../App.css"
const Header = () => {
  return (
    <>
      <Navbar  bg="my-cyan" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo}/></Navbar.Brand>
            <div class="input-group searchbox">
            <input type="text" class="form-control" placeholder="Zipcode | Search medicine , Camps , Health Brands"/>
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <FaSearch/>
              </button>
            </div>
        </div>
        </Container>
    </Navbar>
    <Navbar  className="subheader" bg="my-cyan" variant="dark" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><div className="iconDiv"><FaPills /></div>Knock Knock Medico</Nav.Link>
              <Nav.Link href="#link"><div className="iconDiv"><FaHospitalSymbol /></div>Health Camp</Nav.Link>
              <Nav.Link href="#link"><div className="iconDiv"><FaUserMd /></div>Doctors Consultation</Nav.Link>
              <Nav.Link href="#link"><div className="iconDiv"><FaShoppingCart /></div>Cart</Nav.Link>
              <Nav.Link href="#link"><div className="iconDiv"><FaUser /></div>Login/Sign-up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
   </Navbar>
      
    </>
  );
};

export default Header;
