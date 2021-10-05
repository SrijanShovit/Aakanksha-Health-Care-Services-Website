import React from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Row,Col,Button} from 'react-bootstrap';
import about from '../Images/about.png'


const About = () => {
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <img className="aboutImg" src={about}></img>   
             <Container className="p-5 container-width">
              <div>
                  <b>Health Care Services</b>
             </div>
             <hr  className="bg-success hr-height" />
             <div>
                 <ul>
                 <li>Doctor's consultation via video at your home</li>
                 <li>Medicine delivery at yout home</li>
                 <li> Doctor's consultation via video at yout home
                    <ul>
                         <li>Doctor's video consultation at home.user will get registered and will book their appointment</li>
                         <li>Inside Doctor's at home.we will be providing updates on health care camp like blood donation etc. around the city.</li>
                         <li>In knock knock Medico we will be providing door to door delivery service of medicine from all the medical stores of town.</li>  
                    </ul>
                </li>
                 </ul>
            </div>
             <div><b>AAkanksha online doctor consultation</b></div>
             <hr  className="bg-success hr-height" />
             <p>AAkanksha Online Doctor Consultation is a health care Service that provides the users remote doctor assistance without travelling.</p>
             <p> A healthcare provider is a person or company that provides a healthcare service to you.</p>
             <p> Health care services providers help patients who are seeking treatment for the purpose of preventing,alleviating,curing,or healing human illness,physical disability or injury.Health care services providers connect people with doctor's offices ,hospitals,private clinics and pharmacies to receive treatment.</p>
             </Container>
             <Footer/>
        </div>
    );
}
export default About;