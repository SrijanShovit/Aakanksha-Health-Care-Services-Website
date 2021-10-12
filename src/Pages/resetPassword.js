import React,{useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Row,Col,Button} from 'react-bootstrap';
import Axios from 'axios';

const resetPassword = () => {
   /* const [email,setEmail]=useState("");
    const [resmsg,setResMsg]=useState("");
    const sendEmailHandler=()=>{
        
        Axios.post('http://localhost:5000/auth/forgotPassword',
        {
          "email":email
         }).then((response)=>
         {
            console.log(response.data.message);
            setResMsg(response.data.message);
        })
     }*/
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <Container className="p-5 container-width">
              <h5 className="text-center">Reset Password</h5>  
             <Form className="border border-info p-5">
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                     
                    <Button   className=" seemore1 " >
                        Submit
                    </Button>
              </Form>
             </Container>
             <Footer/>
        </div>
    );
}
export default resetPassword;