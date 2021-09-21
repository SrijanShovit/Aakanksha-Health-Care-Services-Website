import React, { useState,useEffect } from "react";
import { Button, Col, Container,Row,ButtonGroup } from "react-bootstrap";
import Axios from "axios"
import { Link } from "react-router-dom";
const Homeproduct= () => 
{
    const [data,setData]=useState([]);
    const [category,setCategory]=useState();
    useEffect(()=>{
        getProduct('Nutrition');
    }, [])

    const getProduct=(category)=>
    {
        
        Axios.get('http://localhost:5000/product')
        .then((response)=>
        {
           
            const updatedItem=response.data.products.filter((item)=>{
                return(
                    item.category === category
                    
                  ); 
            }).slice(0,6);
            setCategory(category)
            setData(updatedItem);
          
        })
       
    }
   
    return(
        <div>
            <Container className="p-3">
                <ButtonGroup className="m-3">
                    <Button variant="secondary" onClick={()=>getProduct('Nutrition')}>Nutritious Products</Button>
                    <Button variant="secondary"  onClick={()=>getProduct('safety')}>Safety Products</Button>
                </ButtonGroup>
                <Row xs={2} md={3} className="g-4 text-center">
                    {data.map(item => (
                        <Col >
                            <img className="productImg" src={item.imageUrl} alt="productImage"></img>
                            <div><span>{item.name}</span></div>
                            <div><span>Price:{item.price}$</span></div>
                        </Col>
                        
                    ))}
                </Row>
                <Row className="p-5 text-center">
                    <Col>
                        <Link to={{
                            pathname:"/products",
                            state:{
                                category:category
                            }
                        }}>View All</Link>
                </Col>
                </Row>
          </Container>
        </div>
    );


}
export default  Homeproduct;