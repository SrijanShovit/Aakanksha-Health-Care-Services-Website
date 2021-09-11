import React from 'react';
import {Card,Button, Container,CardGroup} from "react-bootstrap";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import camp1 from '../Images/camp1.jpg'
import camp2 from '../Images/camp2.jpg'
import camp3 from '../Images/camp3.jpg'
const Healthcamp = () => {
    return (
    <div>
        <Popup />
        <Popup1 />
        <Header />   
        <Container className="pt-5">
          <div class="card-group">
                <div class="card mx-5 my-5">
                <img src={camp1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Free Medical Camp</h5>
                    <h5>Delhi,India</h5>
                <div className="d-grid gap-2">
                    <Button variant="primary" >
                        Go to Location
                    </Button>
                </div>
                </div>
            </div>
            <div class="card mx-5 my-5">
                <img src={camp2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Village Diva Medical Camp</h5>
                    <h5>Delhi,India</h5>
                    <div className="d-grid gap-2">
                    <Button variant="primary" >
                        Go to Location
                    </Button>
                </div>
                </div>
                </div>

                <div class="card mx-5 my-5">
                <img src={camp3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Cammunity Health Camp</h5>
                    <h5>Delhi,India</h5>
                    <div className="d-grid gap-2">
                    <Button variant="primary" >
                        Go to Location
                    </Button>
                </div>
                </div>
                </div>
            </div>
        </Container>
        <Footer/>
    </div>
    );
}
export default Healthcamp;