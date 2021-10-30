import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'

const Notfound=()=>{
	
	return(
		<>
		<Popup />
            <Popup1 />
            <Header /> 
		<div className="w3-container w3-center w3-card w3-animate-zoom">
		<div className="center" style={{
			alignItems: "center",
			justifyContent: "center",
			height:'400px',
			marginTop:'35px'
		}} >
			<div className="container" style={{fontWeight:'lighter'}}>
			<h2>404 NOT FOUND</h2>
			<p><h2>🤧 OOPS!!</h2></p>
			<p style={{fontSize:'16px'}}>The page you are looking for does not exist or is temporarily unavailable.</p>
			
			</div>
			
		</div>
		</div>
		<Footer/>
		</>
		)
}
export default Notfound;