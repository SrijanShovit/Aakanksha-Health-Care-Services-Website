import React,{useState} from "react";
import {  NavLink } from "react-router-dom";
import { If } from 'rc-if-else';
import {Container,Navbar,Nav,Dropdown} from "react-bootstrap";
import "../App.css"
import { FaSearch,FaPills,FaHospitalSymbol,FaUserMd,FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import logo from "../Images/logo.jfif";


const Header = () => {
 
  function logout()
  {
    window.sessionStorage.clear();
    window.location.reload();
  }

  return (
    <>
      {/*<Navbar  bg="my-cyan" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/"><img className="logo" src={logo} alt="logo"/></NavLink></Navbar.Brand>
            <div className="input-group searchbox">
              <input type="text" className="form-control w3-animate-zoom" placeholder="Zipcode | Search medicine , Camps , Health Brands"/>
              <div className="input-group-append">
                <button className="btn btn-secondary w3-animate-zoom" type="button">
                  <FaSearch/>
                </button>
              </div>
           </div>
          <If condition={window.sessionStorage.getItem("username")}>
              <Dropdown    style={{ visibility:"visible" }}>
                  <Dropdown.Toggle  id="dropdown-basic">
                  <div className="userDiv p-1" style={{ visibility:"visible" ,display:"inline-block",}}></div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/updateProfile">{window.sessionStorage.getItem("username")}</Dropdown.Item>
                    <Dropdown.Item href="/updateProfile">Update Profile</Dropdown.Item>
                    <Dropdown.Item href="/changepassword">Change Password</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      Order</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2" onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </If>
        </Container>
    </Navbar>*/}
    <Navbar  className="subheader" bg="my-cyan" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand>
              <NavLink to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w3-animate-zoom">
              <NavLink className="navstyle" to="/"><div className="iconDiv"><AiFillHome /></div>Home</NavLink>
              <NavLink className="navstyle" to={{
                            pathname:"/products",
                            state:{
                                category:'Nutrition'
                            }
                          }}><div className="iconDiv"><FaPills /></div>Knock Knock Medico</NavLink >
              <NavLink className="navstyle" to="/camp"><div className="iconDiv"><FaHospitalSymbol /></div>Health Camp</NavLink>
              <NavLink className="navstyle" to="/doctors"><div className="iconDiv"><FaUserMd /></div>Doctors Consultation</NavLink>
              <NavLink className="navstyle" to="/cart"><div className="iconDiv"><FaShoppingCart /></div>Cart</NavLink>
              
            </Nav>
          </Navbar.Collapse>
          <If condition={window.sessionStorage.getItem("username")}>
                <Dropdown    style={{ visibility:"visible",float:"right" }}>
                    <Dropdown.Toggle  id="dropdown-basic">
                    <div className="userDiv p-1" style={{ visibility:"visible" ,display:"inline-block",}}></div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/updateProfile">{window.sessionStorage.getItem("username")}</Dropdown.Item>
                      <Dropdown.Item href="/updateProfile">Update Profile</Dropdown.Item>
                      <Dropdown.Item href="/changepassword">Change Password</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">
                        Order</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-2" onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </If>
      </Container>
    </Navbar>
  </>
  );
};


export default Header;
