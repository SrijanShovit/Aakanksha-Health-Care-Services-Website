import React,{useState} from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Link } from "react-router-dom";

const Payment = () => {

    const [payData,setPayData] = useState({
        chname:'',
        cardno: '',
        enddate: '',
        cvv:''
    })

    let name,value;
    const postPayData = (e) => {
          name = e.target.name;
          value = e.target.value;
          setPayData({...payData,[name]:value})
    }
    return (
        <div>
             <Popup />
            <Popup1 />
            <Header /> 

             {/* progressbar */}
             <div className="container px-1 px-md-4 pt-3 mx-auto w-75">
                <div className="card-progress">
                    <div className="row d-flex justify-content-between px-3 top">

                    </div> {/* Add class 'active' to progress */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <ul id="progressbar" className="text-center">
                                <li className="active step0" />
                                <li className="active step0" />
                                <li className="active step0" />
                                <li className="step0" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* progressbar */}

            <div className="container w-75">

            </div>


            <div className="container w-50" style={{backgroundColor:'#33c5c9',borderRadius:'5px',color:'#fff'}}>
                <form>
                    <div class="row">
                        <div class="col">
                        Cardholder Name
                            <input type="text" class="form-control" 
                            name="chname"
                            value={payData.chname}
                            onChange={postPayData}
                            placeholder="Cardholder Name" />
                        </div>
                        <div class="col">
                        Card number
                            <input type="text" class="form-control"
                             name="cardno"
                             value={payData.cardno}
                             onChange={postPayData}
                            placeholder="Card number" />
                        </div>
                    </div>
                
                    <div class="row my-2">
                        <div class="col">
                            End Date
                            <input type="date" class="form-control"
                             name="enddate"
                             value={payData.enddate}
                             onChange={postPayData}
                            placeholder="" />
                        </div>
                        <div class="col">
                        CVV
                            <input type="text" class="form-control" 
                             name="cvv"
                             value={payData.cvv}
                             onChange={postPayData}
                            placeholder="" />
                        </div>
                    </div>
                
                </form>

                <div class="row mt-2 mb-5" style={{'paddingBottom':'1rem'}}>


                    <div class="col" align="left">
                        <Link to="/delivery"><button type="button" className="btn btn-secondary btn-sm deliverybutton">Go Back</button></Link>

                    </div>

                    <div className="col deliverybutton" align="right">
                        <Link to="/confirm"><button type="button" className="btn btn-primary btn-sm deliverybutton">Proceed</button></Link>

                    </div>
                </div>


            </div>
            <Footer/>




            
        </div>
    )
}

export default Payment
