import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import { FaFacebook,FaLinkedin,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
    <>
      <Container className="footer pt-4 w3-animate-zoom" fluid="lg">
        <Row>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center">About</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
              <p className="mt-2">AAKANKSHA is an MSME consumer service E-commerce company started with the intention of making
                people's life more comfortable. We provide a door-to-door delivery service facility .We provide a wide range
                of services and products.</p>
          </Col>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center">Product</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto" />
              <ul className="list-unstyled">
                <li className="my-2"><a href="#">Medical Safety Product</a></li>
                <li className="my-2"><a href="#">Nutritious Product</a></li>
                <li className="my-2"> <a href="#">Top Medicine Brands</a></li>
              </ul>
          </Col>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center">Useful links</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
              <ul className="list-unstyled">
                <li className="my-2"><a href="#">Knock Knock Medico</a></li>
                <li className="my-2"><a href="#">Doctors' Consultation</a></li>
                <li className="my-2"><a href="#">Medical Camp Location</a></li>
              </ul>
          </Col>
          <Col sm>
          <h6 className="text-uppercase font-weight-bold text-center">Contact</h6>
                <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
                <ul className="list-unstyled">
                <li className="my-2"> <i className="fa fa-home  mr-3" aria-hidden="true" /> Delhi,India</li>
                <li className="my-2"><i className="fa fa-envelope" aria-hidden="true" /> helthcare@gmail.com</li>
                <li className="my-2"><i className="fa fa-phone" aria-hidden="true" /> + 01 234 567 88</li>
              </ul>
          </Col>
    
        </Row>
        <Row>
        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto"  /> 
          <Col  sm >
            <p>Terms and conditions</p>
          </Col> 
          <Col sm>
            <p>©2021 Aakanksha.
            <a href="#">All Rights Reserved.</a>
            </p>
          </Col>
          <Col sm>
            <Row className="social-media">
              <Col>
                <FaFacebook color="#3b5998"/>
              </Col>
              <Col>
                 <FaLinkedin color="#0e76a8"/>
              </Col>
              <Col>
                 <FaInstagramSquare color="#fb3958"/>
              </Col>
              <Col>
                <FaTwitterSquare color="#00acee"/>
              </Col>
            </Row>
          </Col>
        </Row>
     </Container>
     
    </>
    )
}

export default Footer
