import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import { FaFacebook,FaLinkedin,FaInstagramSquare,FaTwitterSquare,FaYoutubeSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
    <>
      <div className="footer p-4 w3-animate-zoom bg-dark text-light"  fluid="lg">
        <Row>
          <Col sm>
            
              <h6 className="text-uppercase font-weight-bold text-center text-light">About</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
              <ul>
                <li><a href="/aboutcompany"><h6 className='text-light'>
                About Aakanksha Company
                  </h6></a> </li>
              </ul>
              <ul>
                <li><a href="/about"><h6 className='text-light'>
                About Aakanksha's Healthcare Services
                  </h6></a> </li>
              </ul>
              <p className="mt-2">AAKANKSHA is an MSME consumer service E-commerce company started with the intention of making
                people's life more comfortable. We provide a door-to-door delivery service facility .We provide a wide range
                of services and products.</p>
              <a href="/about">More.....</a>  
              <br />
              <br />
              
               
          </Col>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center text-light">Features</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto" />
              <ul >
                <li className="my-2"><a href="#">Medical Safety Product</a></li>
                <li className="my-2"><a href="#">Nutritious Product</a></li>
                <li className="my-2"> <a href="#">Top Medicine Brands</a></li>
              </ul>
          </Col>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center text-light">Useful links</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
              <ul>
                <li className="my-2"><a href="#">Knock Knock Medico</a></li>
                <li className="my-2"><a href="#">Doctors' Consultation</a></li>
                <li className="my-2"><a href="#">Medical Camp Location</a></li>
              </ul>
          </Col>
          <Col sm>
          <h6 className="text-uppercase font-weight-bold text-center text-light">Contact</h6>
                <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
                <ul>
                <li className="my-2"> <i className="fa fa-home  mr-3" aria-hidden="true" /> Delhi,India</li>
                <li className="my-2"><i className="fa fa-envelope" aria-hidden="true" /> helthcare@gmail.com</li>
                <li className="my-2"><i className="fa fa-phone" aria-hidden="true" /> + 01 234 567 88</li>
                <Link to='/reachout'><li className="my-2">Reach Out To Us</li></Link>
                
                
              </ul>
             
          </Col>
    
        </Row>
        <Row>
        <Container><hr className="bg-success" /></Container>
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
              <a href="https://www.instagram.com/aakankshacompany/"><FaInstagramSquare color="#fb3958"/></a>
                 
              </Col>
              <Col>
              <a href="https://twitter.com/AAKANKS57852311"><FaTwitterSquare color="#00acee"/></a>
                
              </Col>
              <Col>
              <a href="https://www.youtube.com/channel/UCQ79LZ_IrnxzkFL5MZxxOeg"><FaYoutubeSquare color="red"/></a>
                
              </Col>
            </Row>
          </Col>
        </Row>
     </div>
     
    </>
    )
}

export default Footer
