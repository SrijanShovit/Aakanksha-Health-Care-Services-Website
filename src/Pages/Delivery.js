import React,{useState} from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Link } from "react-router-dom";



const Delivery = () => {

    const [deliveryData,setDeliveryData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        address: '',
        zipcode: '',
    })

    let name,value;
    const postDeliveryData = (e) => {
          name = e.target.name;
          value = e.target.value;
          setDeliveryData({...deliveryData,[name]:value})
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
                                <li className="step0" />
                                <li className="step0" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* progressbar */}

            <div className="container w-50">
                <form>
                    <div class="row">
                        <div class="col">
                            Full Name
                            <input type="text"
                            name="firstName"
                            value={deliveryData.firstName}
                            onChange={postDeliveryData}
                            class="form-control" placeholder="First name" />
                        </div>
                        <div class="col">
                            Last Name
                            <input type="text" 
                            name="lastName"
                             value={deliveryData.lastName}
                             onChange={postDeliveryData}
                            class="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col">
                            Phone No.
                            <input type="text" 
                            name="phone"
                            class="form-control"
                             value={deliveryData.phone}
                             onChange={postDeliveryData}
                            placeholder="Phone no." />
                        </div>
                        <div class="col">
                            Email
                            <input type="email"
                            name="email"
                             value={deliveryData.email}
                             onChange={postDeliveryData}
                            class="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col">
                            Country
                            <input type="text" 
                            name="country"
                             value={deliveryData.country}
                             onChange={postDeliveryData}
                            class="form-control" placeholder="Country" />
                        </div>
                        <div class="col">
                            City
                            <input type="text" class="form-control"
                            name="city"
                             value={deliveryData.city}
                             onChange={postDeliveryData}
                            placeholder="City" />
                        </div>
                    </div>
                    <div class="row my-2">
                        <div className="col">
                            Address

                            <div class="form-group">

                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                                name="address" 
                                 value={deliveryData.address} 
                                 onChange={postDeliveryData}
                                placeholder="Address"></textarea>
                            </div>
                        </div>

                        <div class="col">
                            Zipcode
                            <input type="text" class="form-control" 
                            name="zipcode"
                             value={deliveryData.zipcode}
                             onChange={postDeliveryData}
                            placeholder="Zipcode" />
                        </div>
                    </div>
                </form>

                <div class="row mt-2 mb-5">


                    <div class="col" align="left">
                        <Link to="/cart"><button type="button" className="btn btn-secondary btn-sm deliverybutton">Go Back</button></Link>

                    </div>

                    <div className="col deliverybutton" align="right">
                        <Link to="/pay"><button type="button" className="btn btn-primary btn-sm deliverybutton">Proceed</button></Link>

                    </div>
                </div>


            </div>
            <Footer />

        </div>
    )
}

export default Delivery
