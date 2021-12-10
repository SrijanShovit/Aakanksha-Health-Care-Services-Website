import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  ButtonGroup,
  Spinner,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import style from "./css/style.css";
import "./css/link.css";

const Homeproduct = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();
  const [loading, setloading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const style = { position: "fixed", top: "50%", left: "50%" };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
  };

  useEffect(() => {
    getProduct("Nutrition");
  }, []);
  //function to load product
  const getProduct = (category) => {
    Axios.post("http://localhost:5000/product/getProductDetail", {
      category: category,
    }).then((response) => {
      const updatedItem = response.data.products
        .filter((item) => {
          return item.category === category;
        })
        .slice(0, 8);

      setCategory(category);
      setData(updatedItem);
      setloading(true);
    });
  };
  //function to search products
  const searchProduct = () => {
    Axios.post("http://localhost:5000/product/searchProducts", {
      searchQuery: keyword,
      page: 1,
      pageLimit: 5,
    }).then((response) => {
      setData(response.data.results);
    });
  };

  return (
    <div>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <ButtonGroup>
              <Button
                variant="secondary"
                onClick={() => getProduct("Nutrition")}
              >
                Nutritious Products
              </Button>
              <Button variant="secondary" onClick={() => getProduct("safety")}>
                Safety Products
              </Button>
              <Button variant="secondary" onClick={() => getProduct("safety")}>
                Best Brands
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <div className="input-group searchbox mt-3">
              <input
                type="text"
                className="form-control w3-animate-zoom"
                placeholder="Product name, Health Brands"
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-secondary w3-animate-zoom"
                  type="button"
                  onClick={searchProduct}
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </Col>
        </Row>
        {loading ? (
          <Row xs={1} md={3} className="g-4  ">
            {data.map((item) => (
              <Col sm={12} md={4} lg={3} xl={3}>
                <Card className="my-3 p-3 rounded m-3">
                  <Card.Img
                    src={item.imageUrl}
                    alt="productImage"
                    variant="top"
                  />
                  <Card.Body variant="flush">
                    <Card.Title>
                      <div>
                        <span>{item.name}</span>
                      </div>
                    </Card.Title>

                    <Card.Text>
                      <div className="productprice">
                        Price:<strong>{item.price}$</strong>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div>
                        Store Name:<strong>{item.localStore.name}</strong>
                      </div>
                    </Card.Text>
                    <Card.Text>
                      <div>
                        Store Address:<strong>{item.localStore.address}</strong>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Spinner animation="border" style={style} />
        )}
        <Row className="p-5 text-center">
          <Col>
            <Link
              to={{
                pathname: "/products",
                state: {
                  category: category,
                },
              }}
              className="link-bg"
            >
              <Button>
                <p>View All</p>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Homeproduct;
