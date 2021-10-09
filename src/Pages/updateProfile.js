import React,{useEffect,useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container ,Form,Row,Col,Button, Spinner} from 'react-bootstrap';
import Axios from 'axios';

const UpdateProfile = () => {
   
    const [data,setData] = useState({
        name:'',
        contact: '',
        dob: '',
        gender:''
    })
    const [resmsg,setResMsg]=useState("");
    const email=window.sessionStorage.getItem("email");
    const [loading,setloading]=useState(false);
    const style = { position: "fixed",  left: "50%" };
    //function to load user detail
    useEffect(() => {
        const fetchUserData = async () => {
            Axios.post('http://localhost:5000/user/getUserInfo',
            {
                email:email
            })
            .then((response)=>{
              
               setData({
                   name:response.data.userInfo.username,
                   contact:response.data.userInfo.number,
                   dob:response.data.userInfo.DOB,
                   gender:response.data.userInfo.gender
               })
               setloading(true);
               
            })
        };
        fetchUserData();
      },[setData]);
      //function to update user information
      function updateUserInfo()
    {
        
        
            Axios.patch('http://localhost:5000/user/updateUserInfo',
            {
                "email": email,
                "username":data.name,
                "number":data.contact,
                "gender":data.gender,
                "DOB":data.dob
            })
            .then((response)=>
            {
                console.log(response.data.user.username);
                setResMsg(response.data.message);
                window.sessionStorage.setItem('username',response.data.user.username); 
                setTimeout(() => {
                    console.log('This will run after 1 second!')
                    {window.location.reload()}
                  }, 1000);
               
            })
    }
       
    return(
       
        <div>
             <Popup />
             <Popup1 />
             <Header/>
             <Container className="p-5 container-width">
                <h5 className="text-center">Update Information</h5> 
                {loading? 
                <Form className="border border-info p-5">
                        <Row className="mb-3 ">
                            <Form.Group as={Col} >
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" 
                            value={data.name} 
                            onChange={(event)=>{
                                setData({name:event.target.value});
                            }}/>
                            </Form.Group>
                       </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control   type="text" 
                            value={data.contact}
                            onChange={(event)=>{
                                setData({contact:event.target.value});
                            }}/>
                            </Form.Group>

                        </Row>
                        <Form.Group className="mb-3" >
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type="text"
                             value={data.dob} 
                             onChange={(event)=>{
                                setData({dob:event.target.value});
                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text"
                             value={data.gender} 
                             onChange={(event)=>{
                                setData({gender:event.target.value});
                            }}/>
                        </Form.Group>

                        <h6 className="text-danger">{resmsg}</h6>
                        
                        <Button   className="seemore1 float-right" onClick={updateUserInfo}>
                            Submit
                        </Button>
                </Form>:<Spinner animation="border" style={style}/>}
            </Container>
             <Footer/>
        </div>
    );
}
export default UpdateProfile;