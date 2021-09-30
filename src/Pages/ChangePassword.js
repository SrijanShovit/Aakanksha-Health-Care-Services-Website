import React,{useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Button} from 'react-bootstrap';
import Axios from 'axios';

const ChangePassword = () => {
    const email=window.sessionStorage.getItem("email");
    const [currentpass,setCurrentPass]=useState(""); 
    const [newpassword,setNewPassword]=useState("");
    const [confirmpass,setConfirmPass]=useState("");
    const [resmsg,setResMsg]=useState("");
   
    function changePasswordHandler()
    {
        
        if(newpassword!==confirmpass){
            setResMsg("New password and Confirm Password does not match");
        }
        else
        {
            Axios.post('http://localhost:5000/user/changePassword',
            {
                "email": email,
                "currentPassword":currentpass,
                "newPassword":newpassword
            })
            .then((response)=>
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
              <h5 className="text-center">Change Password</h5>   
             <Form>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control 
                            required  
                            type="password" 
                            onChange={(event)=>{
                                setCurrentPass(event.target.value);
                            }}/>
                       </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control  
                            required  
                            type="password"
                            onChange={(event)=>{
                                setNewPassword(event.target.value);
                        }}/>
                    </Form.Group>
                    <Form.Group    className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            required 
                            type="password" 
                            onChange={(event)=>{
                               setConfirmPass(event.target.value);
                        }}/>
                    </Form.Group>
                    <h6 className="text-danger">{resmsg}</h6>
                    <Button  className=" seemore1 " onClick={changePasswordHandler}>
                        Submit
                    </Button>
              </Form>
             </Container>
             <Footer/>
        </div>
    );
}
export default ChangePassword;