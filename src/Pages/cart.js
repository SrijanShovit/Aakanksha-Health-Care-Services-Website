import React,{useEffect,useState} from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Container,Row,Col,Button,Spinner} from 'react-bootstrap';
import Axios from 'axios';
export default function Cart() {
    const [data,setData]=useState([]);
    useEffect(() => {
        const getCartData = async () => {
            const email=window.sessionStorage.getItem("email");
            Axios.post('http://localhost:5000/product/getCartItems',
            {
               email:email 
            })
            .then((response)=>{
               setData(response.data.cartItems);
               
               //setloading(true);
               //console.log(response.data.cartItems[0].productDetails.name);
            })
        };
        getCartData();
      },[setData]);
    
    return (
               
        <div>
        <Popup />
        <Popup1 />
        <Header />
        <Container> 
            {console.log("Object.values(data) is",Object.values(data))}
            {Object.values(data).map((item)=>{
               return <div>{item.productDetails.name}</div>
            })}
        </Container>
        <Footer/>
        </div>
    );
}