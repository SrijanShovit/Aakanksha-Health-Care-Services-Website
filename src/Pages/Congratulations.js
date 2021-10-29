import React,{useState} from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Link } from "react-router-dom";
import {TiTick} from "react-icons/ti"
const Placed = () => {

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
                                <li className="active step0" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* progressbar */}

            <div className="container w-75">

            </div>


            {TiTick}
            <div className="container w-50" style={{backgroundColor:'#33c5c9',borderRadius:'5px',color:'#fff'}}>
                
                <div class="row mt-2 mb-5" style={{'paddingBottom':'1rem'}}>


                    

                    <div className="col deliverybutton" align="center">
                        <Link to="/confirm"><button type="button" className="btn btn-primary btn-sm deliverybutton">Proceed</button></Link>

                    </div>
                </div>


            </div>
            <Footer/>




            
        </div>
    )
}

export default Placed
