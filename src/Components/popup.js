import React,{useState} from 'react';
import Modal from 'react-modal';
import './css/style.css'
import { FaUser } from "react-icons/fa";
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { If } from 'rc-if-else';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"dodgerblue",
    opacity:"0.8",
    width:"50%",

  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Popup() {
  const [username,setUsername]=useState(); 
  const [email,setEmail]=useState(); 
  const [password,setPassword]=useState();
  const [status,setStatus]=useState();
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
    window.location.reload();
  }
  const register=()=>{
    console.log(username);
   Axios.post('http://localhost:5000/auth/register',{
       username:username,
       password:password,
       email:email

   }).then((response)=>{
      setStatus(response.data.message);
   })
}
  return (
    <div>
      <button className="btn signup active  w3-animate-zoom" onClick={openModal}><FaUser />Signup</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Signup</h2>
        <button className="close btn" onClick={closeModal}>X</button>

        
        <If condition={status}>
          <h6>
            {status}
          </h6>
        </If>
        <form className="w3-animate-zoom">
          <input type="text" Placeholder="Full Name" className="ip" onChange={(event)=>{
            setUsername(event.target.value);
        }} required  />
          <input type="Email" Placeholder="Email" className="ip"  onChange={(event)=>{
            setEmail(event.target.value);
        }} required  />
          <input type="Password" Placeholder="Set Password" className="ip"  onChange={(event)=>{
            setPassword(event.target.value);
        }} required  />
          <Button style={{outline:"none",
          border:"1px solid white",backgroundColor:"transparent",
          borderRadius:"20px"

        }}  variant="primary" onClick={register}>Submit</Button>

        </form>
      </Modal>
    </div>
  );
}
