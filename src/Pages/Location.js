import React from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container} from 'react-bootstrap';


const Location = () => {
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <Container className="p-5 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223993.60806146188!2d76.9512659749794!3d28.69263406144206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1632937751201!5m2!1sen!2sus" 
                width="600" height="450"  >
                </iframe>
             </Container>
             <Footer/>
        </div>
    );
}
export default Location;