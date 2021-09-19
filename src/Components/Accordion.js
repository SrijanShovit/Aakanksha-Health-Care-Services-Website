import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`


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
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: '20px' }}>
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
    </IconContext.Provider>
  );
};

export default Accordion;
