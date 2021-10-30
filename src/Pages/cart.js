import React,{useEffect,useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Delivery from '../Pages/Delivery'
import { Container,Table,Button} from 'react-bootstrap';
import Axios from 'axios';
import {Link} from 'react-router-dom'


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



export default function Cart() {
    var totalPrice=0;
    const [data,setData]=useState([]);
    const email=window.sessionStorage.getItem("email");
   
    useEffect(() => {
       
        const getCartData = async () => {
            
            Axios.post('http://localhost:5000/user/getUserInfo',
            {
               email:email ,
               fields:["cartItems"]
            })
            .then((response)=>{
               if(!response.data.message){
                    setData(response.data.userInfo.cartItems);
                }
            })
        };
        getCartData();
       
    },[setData]);
   //function for delete cart item
    function deleteCartProduct(e)
    {
        let name = e.currentTarget.getAttribute("name");
       
        Axios.post('http://localhost:5000/product/removeFromCart',
        {
            email:email,
            productName:name
        }).then((response)=>
        {
          console.log(response.data.message)
          {window.location.reload()}
        })
       
    }
    //function for increment quantity
    function incrementQuan(e){
            let name = e.currentTarget.getAttribute("name"); 
            let quantity = parseInt(e.currentTarget.getAttribute("quantity"))+1; 
            Axios.post('http://localhost:5000/product/changeQuantity',
            {
                email:email,
                productName:name,
                quantity:quantity
            }).then((response)=>
            {
            console.log(response.data.message)
            {window.location.reload()}
           
            })
        }
        //function for decrement quantity
        function decrementQuan(e){
            let name = e.currentTarget.getAttribute("name"); 
            let quantity = parseInt(e.currentTarget.getAttribute("quantity"))-1; 
            Axios.post('http://localhost:5000/product/changeQuantity',
            {
                email:email,
                productName:name,
                quantity:quantity
            }).then((response)=>
            {
            console.log(response.data.message)
            {window.location.reload()}
           
            })
        }


        async function displayRazorpay() {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
        
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }
        
            // creating a new order
            const result = await Axios.post("http://localhost:5000/product/createOrder",{
                "totalPrice":totalPrice,
                "currency":"INR"
            });
        
            console.log(result)
        
            if (!result) {
                alert("Server error. Are you online?");
                return;
            }
        
            // Getting the order details back
            const { amount, id: order_id, currency } = result.data;
        
            const options = {
                key: process.key.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: "Soumya Corp.",
                description: "Test Transaction",
                
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
        
                    const result = await Axios.post("http://localhost:5000/payment/success", data);
        
                    alert(result.data.msg);
                },
                prefill: {
                    name: "Soumya Dey",
                    email: "SoumyaDey@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Soumya Dey Corporate Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };
        
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }
        

    return (
        <div>
            <Popup />
            <Popup1 />
            <Header />

            
            {/* progressbar */}
            <div className="container px-1 px-md-4 py-5 mx-auto">
                <div className="card-progress">
                    <div className="row d-flex justify-content-between px-3 top">
                        
                    </div> {/* Add class 'active' to progress */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <ul id="progressbar" className="text-center">
                                <li className="active step0" />
                                <li className="step0" />
                                <li className="step0" />
                                <li className="step0" />
                            </ul>
                        </div>
                    </div>                
                </div>
            </div>
            {/* progressbar */}
          {email?
           <Container className="pt-5"> 
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
                    
                   {Object.values(data).map((item)=>{
                        totalPrice += item.quantity*item.productDetails.price;
                      
                        return (
                        <>  
                            <tbody>
                                <tr id={item.id}>
                                    <td><img src={item.productDetails.imageUrl} className="productImage" alt="imageproduct"/></td>
                                    <td>{item.productDetails.name}</td>
                                    <td>{item.productDetails.description}</td>
                                    <td>
                                    <Button  className="deleteBtn text-danger"  name={item.productDetails.name} onClick={incrementQuan} quantity={item.quantity}>+</Button>
                                         <input  type="text" className="m-auto" value={item.quantity} />
                                    <Button  className="deleteBtn text-danger"  name={item.productDetails.name} onClick={decrementQuan} quantity={item.quantity}>-</Button>
                                    </td>
                                    <td>{item.productDetails.price}$</td>
                                    <td>{item.quantity*item.productDetails.price}$</td>
                                    <td>
                                       <Button  className="deleteBtn text-danger" onClick={deleteCartProduct} name={item.productDetails.name}>x</Button>
                                    </td>
                                </tr>
                            
                            </tbody>
                        </>
                        );
                    })}
                </Table>
                <div align="end">
                    <div className="p-1"><b>Grand Total: </b>{totalPrice}$</div>
                     <Button className="seemore1" onClick={displayRazorpay} >Checkout</Button>
                  
                </div>
            </Container>:
           
                <Container className="text-center mb-5"><h5>Please Login to see cart details </h5></Container>}
            
            <Footer/>

           

            
        </div>
    );
}