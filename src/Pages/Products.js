import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import Popup from "../Components/popup";
import Popup1 from "../Components/popuplogin";
import Axios from "axios";
import { FaSearch} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";


export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      categorynames: {
        Nutrition: false,
        safety: false,
      },
      price: [],
      count: 0,
      show: false,
      brandnames:{
        Boost:false,
        Horlicks:false,
        Muscleblaze:false,
        Apollo:false

    },
    resposesmsg:""
    };
    this.getProduct = this.getProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.categoryCheckHandlker=this.categoryCheckHandlker.bind(this)
    this.brandCheckHandlker=this.brandCheckHandlker.bind(this)
    this.filterHandler = this.filterHandler.bind(this);

    this.style = { position: "fixed", left: "50%" };
  }
  //function to get products  on page load
  getProduct(category) {
    Axios.post("http://localhost:5000/product/getProductDetail", {
      category: category,
    }).then((response) => {
      this.setState({
        data: response.data.products,
      });
      this.setState({
        loading: true,
      });
    });
  }
  //function for add product in cart
  addToCart = (e) => {
    e.target.classList.remove("seemore1");
    e.target.style.backgroundColor = "green";
    this.setState({
      count: this.state.count + 1,
      show: true,
    });
    let name = e.currentTarget.getAttribute("name");
    const email = window.sessionStorage.getItem("email");
    Axios.post("http://localhost:5000/product/addToCart", {
      email: email,
      productName: name,
    }).then((response) => {
      console.log(response);
    });
  };

  componentDidMount() {
    window.addEventListener(
      "load",
      this.getProduct(this.props.location.state.category)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "load",
      this.getProduct(this.props.location.state.category)
    );
  }

  //function to get clicked checkbox value
  categoryCheckHandlker=(e)=>{
    var {name,checked}=e.target;
    this.setState((e)=>{
        var selectedcategory=e.categorynames;
        return selectedcategory[name]=checked;
    });

}
brandCheckHandlker=(e)=>{
    var {name,checked}=e.target;
    this.setState((e)=>{
        var selectedbrand=e.brandnames;
        return selectedbrand[name]=checked;
    });

}

  //function for filter data
  filterHandler() {
    var category = Object.keys(this.state.categorynames).filter(
      (x) => this.state.categorynames[x]
    );
    var brand=Object.keys(this.state.brandnames).filter((x)=>this.state.brandnames[x]);
    if (this.state.price>0) {
      var price = this.state.price.split(",").map((n) => parseInt(n, 10));
    }

    Axios.post("http://localhost:5000/product/getProductDetail", {
      category: category,
      priceRange: price,
      brand:brand
    }).then((response) => {
      this.setState({
        resposesmsg:response.data.message
    });
      this.setState({
        data: response.data.products,
      });
      this.setState({
        loading: true,
      });
    });
  }

  render() {
    return (
      <>
        <Popup />
        <Popup1 />
        <Header />
         

        <Container className="py-5">
           <div className="input-group searchbox">
              <input type="text" className="form-control w3-animate-zoom" placeholder="Product name, Health Brands"/>
              <div className="input-group-append">
                <button className="btn btn-secondary w3-animate-zoom" type="button">
                  <FaSearch/>
                </button>
              </div>
           </div>
          <Row>
          <h6 className="text-center">{this.state.resposesmsg}</h6>
            <Col md="auto">
              <div className="p-5">
                  <label><b>Select Category</b></label>
                  <div><input type="checkbox" name="Nutrition" onChange={this.categoryCheckHandlker}/> Nutritious</div>
                  <div><input type="checkbox" name="safety" onChange={this.categoryCheckHandlker}/> safety</div>
                  <label><b>Select Brand</b></label>
                  <div><input type="checkbox"  name="Apollo"  onChange={this.brandCheckHandlker}/> Apollo </div>
                  <div><input type="checkbox"  name="Muscleblaze"  onChange={this.brandCheckHandlker}/> Muscleblaze</div>
                  <div><input type="checkbox"  name="Boost"  onChange={this.brandCheckHandlker}/> Boost</div>
                   <div><input type="checkbox"  name="Horlicks"  onChange={this.brandCheckHandlker}/> Horlicks</div>
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
              {this.state.show ? (
                <label className="p-2">{`${this.state.count} Products added to cart`}</label>
              ) : (
                ""
              )}

              {this.state.loading ? (
                <Row xs={1} md={3} className="g-4">
                  {this.state.data.map((item) => {
                    return (
                      <Col sm={12} md={4} lg={3} xl={3}>
                        <Card className="my-3 p-3 rounded m-3">
                          <Card.Img
                            className="productImg"
                            src={item.imageUrl}
                            alt="productImage"
                          />
                          <ListGroup variant="flush">
                            <ListGroupItem>
                              <div className="productname">
                                <span> {item.name}</span>
                              </div>
                            </ListGroupItem>

                            <ListGroupItem>
                              <div className="productdescription">
                                <span>Description: {item.description}</span>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="productprice">
                                <span>Price:{item.price}$</span>
                              </div>
                            </ListGroupItem>
                            <ListGroupItem>
                              <div className="text-center ">
                                <Button
                                  className="seemore1"
                                  onClick={this.addToCart}
                                  name={item.name}
                                >
                                  Add to Cart
                                </Button>
                              </div>
                            </ListGroupItem>
                          </ListGroup>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              ) : (
                <Spinner animation="border" style={this.style} />
              )}
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
