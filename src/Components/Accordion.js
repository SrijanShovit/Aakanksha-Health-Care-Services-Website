import React, { useState } from 'react';
//import { Data } from './Data';
//import styled from 'styled-components';
//import { IconContext } from 'react-icons';
//import { FiPlus, FiMinus } from 'react-icons/fi';
import { Container,Row,Col,Button,Spinner} from 'react-bootstrap';
import location from '../Images/location.png'
import support from '../Images/support.jpg'
import doctor from '../Images/bookdoctor.png'
import delivery from '../Images/delivery.jpg'
/*const AccordionSection = styled.div`


  align-items: center;
  justify-content: center;



`;


const Wrap = styled.div`
  background: #32aeb1;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 0.75rem;
    font-size: 1.5rem;
    text-decoration: underline;

  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #F7F6F2;
  color: #000;
  width: 100%;
  display: flex;
  padding: 1% 2% 0 2%;

  justify-content: center;
  align-items: center;
  


  p {
    font-size: 1.1rem;

  }
`;*/

const Accordion = () => {
  /*const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };*/

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
   /* <IconContext.Provider value={{ color: '#fff', size: '20px' }}>
      <AccordionSection className="w3-animate-zoom">

          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1 >{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}

      </AccordionSection>
    </IconContext.Provider>*/
  );
};

export default Accordion;
