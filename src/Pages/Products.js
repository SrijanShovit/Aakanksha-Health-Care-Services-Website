import React from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';
import { Container,Row,Col,Button,Spinner } from 'react-bootstrap';
export default class  Products extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:false
        }
        this.getProduct = this.getProduct.bind(this)
        this.style = { position: "fixed",  left: "50%" };
    }
    
    getProduct(category)
    {
       
        Axios.get('http://localhost:5000/product')
        .then((response)=>
        {
           const updatedItem=response.data.products.filter((item)=>{
                return(
                    item.category === category
                    
                  ); 
            });
            this.setState({
                data: updatedItem,
            });
            this.setState({
                loading:true,
            });
          
        })
       
    }
   
    componentDidMount() {
        window.addEventListener('load', this.getProduct(this.props.location.state.category));
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.getProduct(this.props.location.state.category))  
     } 
    render()
    {
    
        return(
            <>
                <Popup />
                <Popup1 />
                <Header />
                <Container className="p-5">
                {this.state.loading?  
                    <Row xs={2} md={3} className="g-4">
                        {this.state.data.map((item)=>{
                        return(
                            <div className="shadow-lg p-5 mb-5 bg-white rounded">
                                    <Col>
                                        <div className="text-center"><img className="productImg" src={item.imageUrl} alt="productImage"></img></div>
                                        <div className="text-left"><span>Product Name: {item.name}</span></div>
                                        <div  className="text-left"><span>Description: {item.description}</span></div>
                                        <div  className="text-left"><span>Price: {item.price}$</span></div>
                                        <div className="text-center"><Button variant="primary">Add to Cart</Button></div>
                                </Col>
                            </div>
                        
                            ) ;
                        })}
                    </Row>:<Spinner animation="border" style={this.style}/>}
                </Container>
                <Footer/>
           </>
        );

    }
}
