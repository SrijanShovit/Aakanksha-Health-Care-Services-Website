import React,{useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ResetPassword = () => {
    const [newpass,setNewPass]=useState("");
    const [confirmpass,setConfirmPass]=useState("");
    const params=useParams();
    const [resmsg,setResMsg]=useState("");
    
    const resetPasswordHandler=()=>
    {
        if(newpass!==confirmpass){
            setResMsg("New password and Confirm Password does not match");
        }
        else{
            Axios.post('http://localhost:5000/auth/resetPassword',
            {
              token:params.token,
              newPassword:newpass
             }).then((response)=>
             {
                setResMsg(response.data.message);
            })

        }
        
     }
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <Container className="p-5 container-width">
              <h5 className="text-center">Reset Password</h5>  
             <Form className="border border-info p-5">
                    <Form.Group className="mb-3" >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control  
                        onChange={
                            (event)=>{
                                setNewPass(event.target.value);
                            }
                        }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                           onChange={(event)=>{
                            setConfirmPass(event.target.value);
                        }}/>
                    </Form.Group>
                    <h6 className="text-danger">{resmsg}</h6>
                    <Button   className=" seemore1 " onClick={resetPasswordHandler}>
                        Submit
                    </Button>
              </Form>
             </Container>
             <Footer/>
        </div>
    );
}
export default ResetPassword;