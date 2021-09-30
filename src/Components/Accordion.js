import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import location from '../Images/location.png'
import support from '../Images/support.jpg'
import doctor from '../Images/bookdoctor.png'
import delivery from '../Images/delivery.jpg'

const Accordion = () => {
return (
    <Container>
       <hr className="bg-success hr-height" />
       <h6 className="text-uppercase font-weight-bold text-center">Our Services</h6>
       <Row xs={2} md={4}className="text-center pt-2 pb-5">
          <Col>
            <div>
              <img src={support} className="featureImage"/>
            </div>
            <div>24 X 7 Support </div>
          </Col>
          <Col>
            <div>
              <img src={doctor} className="featureImage"/>
            </div>
            <div>Online Doctors Appointment </div>
          </Col>
          <Col>
            <div>
              <img src={delivery} className="featureImage"/>
            </div>
            <div>Doorstep Delivery </div>
          </Col>
          <Col>
            <div>
              <img src={location} className="featureImage"/>
              <div>Location </div>
            </div>
          </Col>
      </Row>
    </Container>
  
  );
};

export default Accordion;
