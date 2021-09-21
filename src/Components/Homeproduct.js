import React, { useState,useEffect } from "react";
import { Button, Col, Container,Row,ButtonGroup } from "react-bootstrap";
import Axios from "axios"
const Homeproduct= () => 
{
    const [data,setData]=useState([]);
    useEffect(()=>{
        getProduct('Nutrition');
    }, [])

    const getProduct=(category)=>
    {
        console.log("inside safety");
        Axios.get('http://localhost:5000/product')
        .then((response)=>
        {
            console.log(response.data.products[0].category);
            const updatedItem=response.data.products.filter((item)=>{
                  return item.category == category;
            });
            setData(updatedItem);
          
        })
       
    }
   
    return(
        <div>
            <Container className="p-3">
            <ButtonGroup className="m-3 ">
                <Button variant="secondary" onClick={()=>getProduct('Nutrition')}>Nutritious Products</Button>
                <Button variant="secondary"  onClick={()=>getProduct('safety')}>Safety Products</Button>
                <Button variant="secondary">View All</Button>
            </ButtonGroup>
            <Row xs={2} md={3} className="g-4">
                {data.map(item => (
                    <Col >
                        <img className="productImg" src={item.imageUrl}></img>
                        <div><span>{item.name}</span></div>
                        <div><span>Price:{item.price}$</span></div>
                    </Col>
                    
                ))}
            </Row>
          
                
            </Container>
        </div>
    );


}
export default  Homeproduct;