import React ,{useState,useEffect}from 'react';
import {Button, Container,Card,Row,Col} from "react-bootstrap";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';
const Healthcamp = () => {
    const [data, setData] = useState([]);
       useEffect(() => {
        const fetchData = async () => {
            Axios.get('http://localhost:5000/camp/getCampDetail',)
            .then((response)=>{
               setData(response.data.camps);
            })
        };
        fetchData();
      }, [setData]);
    return (
    <div>
        <Popup />
        <Popup1 />
        <Header /> 
        <Container className="pt-5">
           <Row xs={1} md={3} className="g-4">
               {data.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                <div className="descDiv">{item.description}</div>
                                <span>{item.city}</span>
                                </Card.Text>
                                <Button variant="primary" >
                                Go to Location
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
           </Row>
        </Container>
        <Footer/>
    </div>
    );
    
}

export default Healthcamp;