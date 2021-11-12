import React, { useEffect, useState } from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import CartStages from '../Components/CartStages'
import Delivery from '../Pages/Delivery'
import { Container, Table, Button } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom'






export default function Cart() {
    var totalPrice = 0;
    const [data, setData] = useState([]);
    const [resmsg,setResMsg]=useState("");
    const email = window.sessionStorage.getItem("email");

    const [deliveryData,setDeliveryData] = useState({
        deliveryadd : ''        
    })

    let name,value;
    const AddressData = (e) => {
      name = e.target.name;
      value = e.target.value;
      setDeliveryData({...deliveryData,[name]:value})
}

//function to submit form delivery address in backend
const handleDelivery = (e) => {
    e.preventDefault()
    const {deliveryadd} = deliveryData
    Axios.post('',
    {
      "address":deliveryadd
     }).then((response)=>
     {
       setResMsg(response.data.message);
    })
  
  }
    useEffect(() => {

        const getCartData = async () => {

            Axios.post('http://localhost:5000/user/getUserInfo',
                {
                    email: email,
                    fields: ["cartItems"]
                })
                .then((response) => {
                    if (!response.data.message) {
                        setData(response.data.userInfo.cartItems);
                    }
                })
        };
        getCartData();

    }, [setData]);
    //function for delete cart item
    function deleteCartProduct(e) {
        let name = e.currentTarget.getAttribute("name");

        Axios.post('http://localhost:5000/product/removeFromCart',
            {
                email: email,
                productName: name
            }).then((response) => {
                console.log(response.data.message)
                { window.location.reload() }
            })

    }
    //function for increment quantity
    function incrementQuan(e) {
        let name = e.currentTarget.getAttribute("name");
        let quantity = parseInt(e.currentTarget.getAttribute("quantity")) + 1;
        Axios.post('http://localhost:5000/product/changeQuantity',
            {
                email: email,
                productName: name,
                quantity: quantity
            }).then((response) => {
                console.log(response.data.message)
                { window.location.reload() }

            })
    }
    //function for decrement quantity
    function decrementQuan(e) {
        let name = e.currentTarget.getAttribute("name");
        let quantity = parseInt(e.currentTarget.getAttribute("quantity")) - 1;
        Axios.post('http://localhost:5000/product/changeQuantity',
            {
                email: email,
                productName: name,
                quantity: quantity
            }).then((response) => {
                console.log(response.data.message)
                { window.location.reload() }

            })
    }

    //load script function
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    //handling razorpay stuffs function
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        console.log(res)
        // creating a new order
        const result = await Axios.post("http://localhost:5000/product/createOrder", {
            "totalPrice": totalPrice * 100,
            "currency": "INR"
        });
        // console.log(totalPrice)
        console.log(result)

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        console.log(result.data)
        const { amount, order_id, currency, key, name } = result.data;

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: name,
            order_id: order_id,
            handler: function (response) {
                const {razorpay_signature,razorpay_order_id,razorpay_payment_id} = response;
                Axios.post('http://localhost:5000/product/addOrder',
            {
                order_id:razorpay_order_id,
                payment_id:razorpay_payment_id,
                totalPrice,
                email:window.sessionStorage.getItem("email")


            },{
                headers:{
                    'x-razorpay-signature':razorpay_signature,
                }
            }).then(response => {
                console.log(response);
            })

                // const data = {
                //     orderCreationId: order_id,
                //     razorpayPaymentId: response.razorpay_payment_id,
                //     razorpayOrderId: response.razorpay_order_id,
                //     razorpaySignature: response.razorpay_signature,
                // };

                // const result = await Axios.post("http://localhost:5000/", data);

                // alert(result.data.msg);
                // console.log(data)
                console.log('gfg')
                console.log(response)
            },

        };

        const paymentObject = new window.Razorpay(options);
        console.log(paymentObject);
        paymentObject.on('payment.failed', function (response) {
            console.log(response);
            alert("This step of Payment Failed");
        });

        // document.getElementById('pay-button').onClick = function (e) {
            console.log('abcd')
            const res2 = await paymentObject.open();
            // e.preventDefault();
        // }
        console.log(res2)
        
    }


    return (
        <div>
            <Popup />
            <Popup1 />
            <Header />
            <CartStages/>

          
           
            {email ?
                <Container className="pt-5 cartbox">
                    <Table responsive="sm" >
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>

                        {Object.values(data).map((item) => {
                            totalPrice += item.quantity * item.productDetails.price;

                            return (
                                <>
                                    <tbody>
                                        <tr id={item.id}>
                                            <td><img src={item.productDetails.imageUrl} className="productImage" alt="imageproduct" /></td>
                                            <td>{item.productDetails.name}</td>
                                            <td>{item.productDetails.description}</td>
                                            <td>
                                                <Button className="deleteBtn text-danger" name={item.productDetails.name} onClick={incrementQuan} quantity={item.quantity}>+</Button>
                                                <input type="text" className="m-auto" value={item.quantity} />
                                                <Button className="deleteBtn text-danger" name={item.productDetails.name} onClick={decrementQuan} quantity={item.quantity}>-</Button>
                                            </td>
                                            <td>{item.productDetails.price}$</td>
                                            <td>{item.quantity * item.productDetails.price}$</td>
                                            <td>
                                                <Button className="deleteBtn text-danger" onClick={deleteCartProduct} name={item.productDetails.name}>x</Button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </>
                            );
                        })}
                    </Table>
                    <div className="container my-3">
                    <div class="col">
                            Enter Address for delivery
                            <input type="text" class="form-control"
                             name="deliveryadd"
                             value={deliveryData.deliveryadd}
                             onChange={AddressData}/>
                             
                        </div>
                        
                    </div>
                    <div align="end">
                        <Button className="seemore1 my-3" id="pay-button" onClick={(e)=>handleDelivery} >Submit Address</Button>
                        <div className="p-1"><b>Grand Total: </b>{totalPrice}$</div>

                        <Button className="seemore1 my-3" id="pay-button" onClick={displayRazorpay} >Checkout</Button>
                    </div>
                </Container> :

                <Container className="text-center mb-5"><h5>Please Login to see cart details </h5></Container>}

            <Footer />




        </div>
    );
}