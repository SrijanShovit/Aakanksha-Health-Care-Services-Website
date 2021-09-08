import React from 'react'
import Header from './Components/Navbar'
import Footer from './Components/Footer'
import Carousels from './Components/Carousels'
import Popup from './Components/popup'
import Popup1 from './Components/popuplogin'
import Accordion from './Components/Accordion'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Popup />
      <Popup1 />
      <Header/>
      <Carousels/>
      <Accordion />
       <Footer/>
    </>
  )
}


export default App
