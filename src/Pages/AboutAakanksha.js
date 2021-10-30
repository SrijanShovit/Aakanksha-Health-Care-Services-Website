import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import { Link } from "react-router-dom";

const OurTeam = () => {
    return (
        <>

            <div className="container my-5">
                <h4 align="center">OUR TEAM</h4>
                <ul style={{fontSize:18}}>
                    <li>
                        <h6>Field of Work</h6>
                        Each and every team member is experienced and is an expert in their field of work.
                    </li>
                    <li>
                        <h6>Diversity</h6>
                        Our team is enriched in its diversity. With a team consisting of people all around India, it has been easy and effective in being connected with our domains. And this one point, helps us understand the concerns of the people from different places.
                    </li>
                    <li>
                        <h6>Strength</h6>
                        Our team is our strength. Each and every person is working towards the betterment of our society. The hard work and dedication each team member put into work can be seen in the development of our company.
                       
                       


                    </li>
                </ul>
            </div>
        </>
    )
}

const CEOMessage = () => {
    return(
        <>
         <div className="container my-5">
        <h4 align="center">CEO’s MESSAGE</h4>
        <div className="row">
            <div className="col-12 col-lg-6">
                {/* mam's photo */}
            </div>
            <div className="col-12 col-lg-6" style={{fontSize:20}}>
                
                <span style={{fontSize:35,fontWeight:'bolder'}}>" </span>
                The domains we concentrate on are the ultimate power to change society. Sport, fashion, and electronics domains are the core of the entertainment sector. While health care, foodie, social welfare and social spotlight, and the lifeline domains are the essentials to improve the quality of living.
                Our company looks forward to making a better life for people and eradicating the issues that prevent them from having an essential life. 
                <span style={{fontSize:35,fontWeight:'bolder'}}> “</span>
                

                <br />
                        <br />
                        <div style={{fontWeight: 'bold'}} align="right">
                        -	AAKANKSHA KUMARI
                        <br />
CEO AAKANKSHA COMPANY
                        </div>

            </div>
        </div>
    </div>
        
        </>
    )
   
}

const OurMission = () => {
    return (
    <div className="container my-3">
        <h4 align="center">OUR MISSION</h4>
        <p  style={{fontSize:18}}>
        Our mission is to enhance any chances and opportunities for the people in acquiring a secure employment. On the launch of our company, we are giving indefinite opportunities for any people who wish to work for us. The endless opportunities it gives for the youth is the main attraction. 
        <br />
Our mission also focuses on improving the quality of life of people and also supporting and uplifting the local vendors and stores. The platform sets a foundation for the local vendors to sell their products and artifacts, setting a value to culture and heritage. 
Moreover, the platform provides a safe and secure transaction on goods and products with the dealers and the customers. The main objective and feature of the company is having all services under one platform. People do not have to compromise their time looking into different websites for different services. They only have to depend on one company for any of the services needed. 


        </p>

    </div>
    )
    
}


const OurFeatures = () => {
    return(
        <div className="container my-5">
             <h4 align="center">OUR FEATURES(HEALTH)</h4>
             <p style={{fontSize:18}}>
             The phrase 
             <span style={{color: 'skyblue',fontWeight:'bolder'}}> “Health is wealth” </span>
             , is definitely not a joke, and people are more health conscious now than ever. The features of health offer knock-knock medico and doctors at home. 
             <br />
The knock-knock medico helps people to order their medicines from home itself. The only thing needed is to produce the doctor’s prescription in the app and once verified the medicine will be delivered at their doors.
<br />
The doctors at home feature online consultation for the patients that finds it difficult to go to the hospital. 

             </p>

        </div>
    )
}
const AboutAakanksha = () => {
    return (
        <div>
            <Popup />
            <Popup1 />
            <Header />

            {/* about company section */}


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/aboutcompany">
                        <div className="container my-4" align="center">
                            <h4 style={{ 'color': '#613866' }}>ABOUT US</h4>
                        </div>

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={{'fontSize':'16px','fontWeight':'bold'}}>
                            <li className="nav-item aboutnavitem" align="center">
                                <a className="nav-link" aria-current="page" href="#">
                                    Our Team</a>
                            </li>
                            <li className="nav-item aboutnavitem">
                                <a className="nav-link" href="#">CEO's message</a>
                            </li>
                            <li className="nav-item aboutnavitem">
                                <a className="nav-link" href="#">Our Mission</a>
                            </li>
                            <li className="nav-item aboutnavitem">
                                <a className="nav-link " href="#" tabIndex={-1} aria-disabled="true">Our Features(Health)</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <div  className='py-3' style={{backgroundColor:'rgb(238 240 246)'}}>
            <OurTeam />
            <CEOMessage/>
            <OurMission/>
            <OurFeatures/>
            </div>

            


            <Footer />

        </div>
    )
}

export default AboutAakanksha
