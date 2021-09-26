import React ,{useState,useEffect}from 'react';
import {Button, Container,Card,Row,Col,Spinner} from "react-bootstrap";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import doctor1 from '../Images/doctor1.jpg'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';
const Healthcamp = () => {
    const [data, setData] = useState([]);
    const [loading,setloading]=useState(false);
    const style = { position: "fixed",  left: "50%" };
       useEffect(() => {
        const fetchData = async () => {
            Axios.post('http://localhost:5000/camp/getCampDetail',)
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

        <div className="container" align="center">
                        <div className="col-lg-12 col-12 my-2 card">

                            <div className="row mt-3">
                               

                                    {
                                        data.map( item => 
                                        (
                                            <>
                                            <div className="container"></div>
                                            <div className="col-lg-4 col-12 doctordetail doctorphoto" style={{ padding: "5px" }} align="center">
                                                
                                            <img src={item.imageUrl} className="d-block mt-3 cardgroup" alt="medicine" />
                                </div>
                                <div className="col-lg-8 col-12" align="center">

                                    <div className="card-body mt-3" align="left">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h6>{item.city}</h6>

                                        <p className="card-text description">
                                            {item.description}

                                        </p>
                                        <p style={{ padding: "3px" }}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio accusamus cum neque cumque veniam repellendus nihil corrupti, earum delectus laborum tempore perspiciatis autem exercitationem? Voluptas corrupti, ut laborum repudiandae nihil repellat quae inventore ad blanditiis delectus deleniti, provident vitae magnam voluptatum eius, dolor facilis tempora minus fuga. Quidem, facilis illum.
                                        </p>
                                    </div>

                                    <div align="right">

                                        <button type="button" className="btn btn-primary seemore1 mx-3 my-2">Go to Location</button>
                                            
                                    </div>
                                    </div>
                                    </>
                                            )
                                        )

                                    }
                                    


                                
                            </div>
                        </div>

                    </div>


        <Footer/>
    </div>
    );
    
}

export default Healthcamp;