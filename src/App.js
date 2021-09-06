import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Carousels from './Components/Carousels'
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
      <Navbar/>
      <Carousels/>
      {/* <Footer/> */}
    </>
  )
}


export default App
