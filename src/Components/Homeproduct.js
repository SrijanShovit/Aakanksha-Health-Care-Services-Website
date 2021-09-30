import React, { useState,useEffect } from "react";
import { Button, Col, Container,Row,ButtonGroup,Spinner, Card } from "react-bootstrap";
import Axios from "axios"
import { Link} from "react-router-dom";
const Homeproduct= () => 
{
    const [data,setData]=useState([]);
    const [category,setCategory]=useState();
    const [loading,setloading]=useState(false);
    const style = { position: "fixed", top: "50%", left: "50%" };
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };
    useEffect(()=>{
        getProduct('Nutrition');
    }, [])

    const getProduct=(category)=>
    {
        
        Axios.post('http://localhost:5000/product/getProductDetail',{
            category:category
        })
        .then((response)=>
        {
           
           const updatedItem=response.data.products.filter((item)=>{
                return(
                    item.category === category
                    
                  ); 
            }).slice(0,6);
            
            setCategory(category)
            setData(updatedItem);
            setloading(true);
          
        })
       
    }
   
    return(
        <div>
            <Container className="p-3">
               <ButtonGroup className="m-3">
                    <Button variant="secondary" onClick={()=>getProduct('Nutrition')}>Nutritious Products</Button>
                    <Button variant="secondary"  onClick={()=>getProduct('safety')}>Safety Products</Button>
                    <Button variant="secondary"  onClick={()=>getProduct('safety')}>Best Brands</Button>
                </ButtonGroup>
                {loading?<Row xs={1} md={3} className="g-4  ">
                    {data.map(item => (
                        <Col sm={12} md={4} lg={3} xl={3}>
                            <Card className="my-3 p-3 rounded m-3">
                                <Card.Img src={item.imageUrl} alt="productImage" variant="top"/>
                                <div className="text-left"><span>{item.name}</span></div>
                                <div className="text-left"><span>Price:{item.price}$</span></div>
                            </Card>
                        </Col>
                        
                    ))}
                </Row>:<Spinner animation="border" style={style}/>}
                <Row className="p-5 text-center">
                    <Col>
                        <Link to={{
                            pathname:"/products",
                            state:{
                                category:category
                            }
                            
                        }}>
                            <Button type="button"
                                style={linkStyle}style={{backgoundColor:"primary"}} >
                                <p>View All</p>
                             
                            </Button>
                        </Link >
                   </Col>
                </Row>
            </Container>
        </div>
    );


}
export default  Homeproduct;