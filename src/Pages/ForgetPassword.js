import React from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Row,Col,Button} from 'react-bootstrap';


const ForgetPassword = () => {
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <Container className="p-5 container-width">
              <h5 className="text-center">Reset Password</h5>   
             <Form className="border border-info p-5">
                    <Row className="mb-3 ">
                        <Form.Group as={Col} >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Row>
                    <Row className="text-center"><div>OR</div></Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control   />
                        </Form.Group>

                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control  />
                    </Form.Group>
                    
                    <Button  type="submit" className=" seemore1 " >
                        Submit
                    </Button>
              </Form>
             </Container>
             <Footer/>
        </div>
    );
}
export default ForgetPassword;