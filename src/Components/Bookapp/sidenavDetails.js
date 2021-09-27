import React from 'react';
import "./index.css"
import PaymentGateway from './Card'
const SideNavDetails = (props) => {
return (
<div className='sidenav'>
  <ul>
    <li className='list'><button className='btn btn-md btn-light'>Details</button></li>
    <li className='list'><button className='btn btn-md btn-light disabled'>Payment</button></li>
  </ul>
</div>
 );
};
export default SideNavDetails
