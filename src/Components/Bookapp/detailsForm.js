import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import SideNavDetails from './sidenavDetails'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"
export default function InfoModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button type="button" className="btn btn-warning seemore1 mx-3 my-2"  onClick={handleShow}>Book Appointment</button>
      <div className='container-fluid'>
      <Modal   size='xl' show={show} onHide={handleClose}  >
        <Modal.Header>
        <div><h1 className='appheading'>Book an Appointment</h1></div>
        </Modal.Header>
        <Modal.Body>
        <div style={{display:"flex"}}>
<div style={{width:"20%"}}>
<SideNavDetails />
</div>
<div style={{width:"80%"}}>
  <form className='container'>
  <div style={{display:"flex", justifyContent:"space-between"}}>
<div style={{width:"48%"}}>
<label><b>First Name:</b></label>
<input className='form-control inp' type='text' placeholder="First Name"/></div>
<div style={{width:"50%"}}>
<label><b>Last Name:</b></label>
<input className='form-control inp' type='text' placeholder="Last Name"/>
</div>
  </div>


    <label><b>Reason:</b></label>
    <input className='form-control inp' type='text' placeholder="Attendee's concern" />
    <label><b>Date:</b></label>
    <input className='form-control inp' type='Date' placeholder='Date'/>
    <label><b>Time:</b></label>
    <input className='form-control inp' type='time' placeholder='time'/>
  </form>
</div>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>
            Close
          </button>
          <button className='btn btn-primary' onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}
