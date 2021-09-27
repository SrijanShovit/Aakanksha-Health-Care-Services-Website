import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal} from 'react-bootstrap';
import './index.css';
import QRCode from "react-qr-code";
function UpiGateway(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <button className='btn btn-primary' onClick={handleShow} type='submit'>
      Pay with UPI
    </button>
    <Modal size='lg' show={show} onHide={handleClose}>
<Modal.Body>
  <div className="card">
  <div>
    <button className='btn' onClick={handleClose}>X</button>
  </div>
  <div className="card-b">
      <div className="row"> </div>
      <div>
          <div className="col-md-10">
              <div className="left border">
                  <div className="row"> <span className="h">Payment</span>
                      <div className="icons"> <img src="https://img.icons8.com/color/48/000000/google-pay-india.png"/> <img src="https://img.icons8.com/color/48/000000/paytm.png"/> <img src="https://img.icons8.com/fluency/48/000000/bhim.png"/> </div>
                  </div>
                  <form> <p><b>UPI Id:</b></p> <input placeholder="UPI Id" style={{width:'75%'}} /><button type='submit' className='btn btn-dark'>Submit</button>
                  <div><span className='choice'>OR</span></div>
                  </form>
  <div className='centerqr'>
  <QRCode size='100' value="hey" />
  </div>
  <h3 className='scan'>Scan to Pay</h3>
  </div>
  </div>
  </div>
  </div>
  </div>
</Modal.Body>
</Modal>
  </>
)
}
export default UpiGateway
