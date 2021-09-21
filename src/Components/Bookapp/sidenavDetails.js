import React from 'react';
import "./index.css"
const SideNavDetails = (props) => {
return (
<div className='sidenav'>
  <ul>
    <li className='list'><a className='sidenavAnc' href='#section'>About</a></li>
    <li className='list'><a className='sidenavAnc' href='#section'>Scan and Pay</a></li>
  </ul>
</div>
 );
};
export default SideNavDetails
