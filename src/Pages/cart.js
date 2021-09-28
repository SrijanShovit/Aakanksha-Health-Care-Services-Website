import React,{useEffect,useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container,Table,Spinner,Button} from 'react-bootstrap';
import { FaRegWindowClose } from "react-icons/fa";
import Axios from 'axios';
export default function Cart() {
    var totalPrice=0;
    const [data,setData]=useState([]);
    const email=window.sessionStorage.getItem("email");
    useEffect(() => {
       
        const getCartData = async () => {
            
            Axios.post('http://localhost:5000/product/getCartItems',
            {
               email:email 
            })
            .then((response)=>{
               setData(response.data.cartItems);
            })
        };
        getCartData();
       
      },[setData]);

     function deleteCartProduct(e)
     {
        let name = e.currentTarget.getAttribute("name");
        console.log(name,email);
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
    return (
        <div>
            <Popup />
            <Popup1 />
            <Header />
            <Container className="pt-5"> 
                <Table striped bordered hover responsive="sm" >
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
                        totalPrice += item.quantity*item.productDetails.price
                        return (
                        <>
                            <tbody>
                                <tr id={item.id}>
                                    <td><img src={item.productDetails.imageUrl} className="productImage" alt="image"/></td>
                                    <td>{item.productDetails.name}</td>
                                    <td>{item.productDetails.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.productDetails.price}$</td>
                                    <td>{item.quantity*item.productDetails.price}$</td>
                                    <td>
                                    <Button  variant="light" onClick={deleteCartProduct} name={item.productDetails.name}>x</Button>
                                    
                                    </td>
                                </tr>
                            
                            </tbody>
                        </>
                        );
                    })}
                </Table>
                <div align="end">
                    <div className="p-1"><b>Grand Total:</b>{totalPrice} $</div>
                    <Button variant="primary" >Checkout</Button>
                </div>
            </Container>
            <Footer/>
        </div>
    );
}