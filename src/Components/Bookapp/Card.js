import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal} from 'react-bootstrap';
import './index.css'


function PaymentGateway(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <button className='btn btn-outline-dark' onClick={handleShow}>Pay with Card</button>
    <Modal size='xl' show={show} onHide={handleClose}>
<Modal.Body>
<div className="card">
  <div>
    <button className='btn' onClick={handleClose}>X</button>
  </div>
    <div className="card-b">
        <div className="row upper"> </div>
        <div className="row">
            <div className="col-md-7">
                <div className="left border">
                    <div className="row"> <label className="h">Payment</label>
                        <div className="icons"> <img src="https://img.icons8.com/color/48/000000/visa.png" /> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /> <img src="https://img.icons8.com/color/48/000000/maestro.png" /> </div>
                    </div>

                    <form> <label>Name:</label> <input placeholder="Name on Card" required/> <label>Card Number:</label> <input placeholder="0125 6780 4567 9909" required/>
                        <div className="row">
                            <div className="col-6"><label>Expiry Date:</label> <input placeholder="MM/YY" required/></div>
                            <div className="col-6"><label>CVV:</label> <input type='Password' id="cvv" required/> </div>
                        </div> <input type="checkbox" id="save_card" className="align-left"/> <label for="save_card">Save card details</label>
                    </form>
                </div>
            </div>
            <div className="col-md-4">
                <div className="right border">
                    <div className="row lower">
                        <div className="col text-left">Subtotal:</div>
                        <div className="col text-right">$ 46.98</div>
                    </div>
                    <div className="row lower">
                        <div className="col text-left">Delivery:</div>
                        <div className="col text-right">Free</div>
                    </div>
                    <div className="row lower">
                        <div className="col text-left"><b>Total:</b></div>
                        <div className="col text-right"><b>$ 46.98</b></div>
                    </div>
                    <div className="row lower">
                      <button className="btn btn-primary">Place order</button>
                    </div>
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
export default PaymentGateway
