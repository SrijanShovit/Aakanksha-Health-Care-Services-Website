import React,{useState} from 'react';
import Modal from 'react-modal';
import Axios from 'axios';
import './css/style.css'
import { FaUser } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'50%',
    backgroundColor:'dodgerblue',
    opacity:'0.8',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Popup1() {
  
  const [email,setEmail]=useState(); 
  const [password,setPassword]=useState();
  const [loginStatus,setLoginStatus]=useState();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const login=()=>
 {
    Axios.post('http://localhost:5000/auth/login',{
        email:email,
        password:password

    }).then((response)=>{
        if(response.data.message)
        {
          setLoginStatus(response.data.message); 
        }
        else{
          if (response.data.user.username) 
          {
              setLoginStatus(response.data.user.username); 
              window.sessionStorage.setItem('username',response.data.user.username); 
              closeModal();
              {window.location.reload()}
          }

        }
      })
  }
   /*code for login ends here */
  return (
    <div>
      <button className="btn active login w3-animate-zoom" onClick={openModal}><FaUser />Login</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{color:"white"}} ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
        <h6>{loginStatus}</h6>
        <button className="close btn" onClick={closeModal}>X</button>
        <form className="w3-animate-zoom">
          <input type="Email" Placeholder="Email" className="ip" onChange={(event)=>{
                setEmail(event.target.value);
            }} required/>
          <input type="Password" Placeholder="Password" className="ip" onChange={(event)=>{
                setPassword(event.target.value);
            }} required/>
          <Button style={{outline:"none",
          border:"1px solid white",backgroundColor:"transparent",
          borderRadius:"20px"

        }}  variant="primary" onClick={login}>Submit</Button>

        </form>
      </Modal>
    </div>
  );
}
