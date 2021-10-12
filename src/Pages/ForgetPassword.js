import React,{useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Row,Col,Button} from 'react-bootstrap';
import Axios from 'axios';

const ForgetPassword = () => {
    const [email,setEmail]=useState("");
    const [resmsg,setResMsg]=useState("");
    const sendEmailHandler=()=>{
        
        Axios.post('http://localhost:5000/auth/forgotPassword',
        {
          "email":email
         }).then((response)=>
         {
           setResMsg(response.data.message);
        })
     }
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <Container className="p-5 container-width">
              
                <Form className="border border-info p-5">
                        <Row className="mb-3 ">
                            <Form.Group as={Col} >
                            <Form.Label>Please enter Email</Form.Label>
                            <Form.Control type="text" onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}/>
                            </Form.Group>
                        </Row>
                        
                        <h6 className="text-danger">{resmsg}</h6>

                        <Button   className=" seemore1 " onClick={sendEmailHandler}>
                            Submit
                        </Button>
                </Form>

             </Container>
             <Footer/>
        </div>
    );
}
export default ForgetPassword;