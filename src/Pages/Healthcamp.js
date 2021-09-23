import React ,{useState,useEffect}from 'react';
import {Button, Container,Card,Row,Col,Spinner} from "react-bootstrap";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';
const Healthcamp = () => {
    const [data, setData] = useState([]);
    const [loading,setloading]=useState(false);
    const style = { position: "fixed",  left: "50%" };
       useEffect(() => {
        const fetchData = async () => {
            Axios.get('http://localhost:5000/camp/getCampDetail',)
            .then((response)=>{
               setData(response.data.camps);
               setloading(true);
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
           {loading? 
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
           </Row>:<Spinner animation="border" style={style}/>}

        </Container>
        <Footer/>
    </div>
    );
    
}

export default Healthcamp;