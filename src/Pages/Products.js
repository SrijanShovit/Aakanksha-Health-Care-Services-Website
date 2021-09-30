import React from 'react';
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';
import { Container,Row,Col,Button,Spinner} from 'react-bootstrap';
import { Radio, RadioGroup} from 'react-radio-group'

export default class  Products extends React.Component {
    
    constructor(props){
       
        super(props);
        this.state={
            data:[],
            loading:false,
            categorynames:{
                Nutrition:false,
                safety:false
            },
            brandnames:{
                Boost:false,
                Horlicks:false,
                Muscleblaze:false,
                Apollo:false

            },
            price:[],
            count:0,
            show:false
        }
        this.getProduct = this.getProduct.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.ckeckboxClickHandler=this.ckeckboxClickHandler.bind(this)
        this.filterHandler=this.filterHandler.bind(this)
        
        this.style = { position: "fixed",  left: "50%" };
    }
    //function to get products  on page load
    getProduct(category)
    {
        
        Axios.post('http://localhost:5000/product/getProductDetail',
           {
               category:category
           })
        .then((response)=>
        {
          
            this.setState({
                data: response.data.products,
            });
            this.setState({
                loading:true,
            });
          
        })
       
    }
    //function for add product in cart
    addToCart=(e)=>{
        e.target.classList.remove('seemore1');
        e.target.style.backgroundColor = "green"
        this.setState({
            count: this.state.count + 1,
            show:true
        });
        let name = e.currentTarget.getAttribute("name");
        const email=window.sessionStorage.getItem("email");
        Axios.post('http://localhost:5000/product/addToCart',
        {
            email:email,
            productName:name
        }).then((response)=>
       {
          console.log(response)
         
       })

    }
    
    componentDidMount() {
        window.addEventListener('load', this.getProduct(this.props.location.state.category));
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.getProduct(this.props.location.state.category))  
     } 

    //function to get clicked checkbox value
    ckeckboxClickHandler=(e)=>{
        var {name,checked}=e.target;
        this.setState((e)=>{
            var selectedcategory=e.categorynames;
            return selectedcategory[name]=checked;
        });
        this.setState((e)=>{
            var selectedbrand=e.brandnames;
            return selectedbrand[name]=checked;
        });
    }

    //function for filter data
    filterHandler(){
        var category=Object.keys(this.state.categorynames).filter((x)=>this.state.categorynames[x]);
        var brand=Object.keys(this.state.brandnames).filter((x)=>this.state.brandnames[x]);
        if(this.state.price){
            var price=this.state.price.split(',').map( n => parseInt(n, 10));
        }
       
        Axios.post('http://localhost:5000/product/getProductDetail',
           {
               category:category,
               priceRange:price,
               brand:brand
           })
        .then((response)=>
        {
          
            this.setState({
                data: response.data.products,
            });
            this.setState({
                loading:true,
            });
          
        })
    }
 
    render()
    {
        
        return(
            <>
                <Popup />
                <Popup1 />
                <Header />
                <Container className="py-5">
                    
                   <Row>
                       <Col md="auto" >
                       <div className="p-5">
                            <label><b>Select Category</b></label>
                            <div><input type="checkbox" name="Nutrition" onChange={this.ckeckboxClickHandler}/> Nutritious</div>
                            <div><input type="checkbox" name="safety" onChange={this.ckeckboxClickHandler}/> safety</div>
                            <label><b>Select Brand</b></label>
                            <div><input type="checkbox"  name="Apollo"  onChange={this.ckeckboxClickHandler}/> Apollo </div>
                            <div><input type="checkbox"  name="Muscleblaze"  onChange={this.ckeckboxClickHandler}/> Muscleblaze</div>
                            <div><input type="checkbox"  name="Boost"  onChange={this.ckeckboxClickHandler}/> Boost</div>
                            <div><input type="checkbox"  name="Horlicks"  onChange={this.ckeckboxClickHandler}/> Horlicks</div>

                            <RadioGroup name="price">
                                    <label><b>Price:</b></label>
                                    <div className="radio-button-background">
                                        <Radio  className="radio-button" value={[10,50]} onChange={(e)=>this.setState({price:e.target.value})} />10$-50$ 
                                    </div>
                                    <div className="radio-button-background">
                                        <Radio  className="radio-button" value={[50,100]} onChange={(e)=>this.setState({price:e.target.value})}/>50$-100$ 
                                        
                                    </div>
                                   
                            </RadioGroup>
                            <Button className="seemore1" onClick={this.filterHandler}>Apply Filter</Button>
                       </div>
                       </Col>
                       <Col>
                       {this.state.show?
                           <label className="p-2">{`${this.state.count} Products added to cart`}</label>:("")
                       }
                       
                        {this.state.loading?  
                            <Row xs={1} md={3} className="g-4">
                                {this.state.data.map((item)=>{
                                    return(
                                        <div className="shadow-lg p-5 mb-5  bg-white rounded">
                                                <Col md="auto">
                                                    <div className="text-center"><img className="productImg" src={item.imageUrl} alt="productImage"></img></div>
                                                    <div className="text-left"><span>Product: {item.name}</span></div>
                                                    <div  className="text-left"><span>Description: {item.description}</span></div>
                                                    <div  className="text-left"><span>Price: {item.price}$</span></div>
                                                    <div className="text-center p-3"><Button className="seemore1" onClick={this.addToCart} name={item.name}>Add to Cart</Button></div>
                                               </Col>
                                        </div>) ;
                                    })
                                }
                    
                            </Row>:<Spinner animation="border" style={this.style}/>}</Col>
                    </Row>
                    
                </Container>
                <Footer/>
           </>
        );

    }

}



