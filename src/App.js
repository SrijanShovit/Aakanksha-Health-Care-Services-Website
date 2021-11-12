import React,{useState} from 'react'
import Home from './Pages/Home'
import './App.css'
import './Pages/Home'
import Doctors from './Pages/Doctorconsultation'
import Healthcamp from './Pages/Healthcamp'
import Notfound from './Pages/Notfound'
import Products from './Pages/Products'
import Location from './Pages/Location'
import UpdateProfile from './Pages/updateProfile'
import ForgetPassword from './Pages/ForgetPassword'
import ChangePassword from './Pages/ChangePassword'
import Delivery from  './Pages/Delivery'
import Payment from './Pages/Payment'
import Confirmation from './Pages/Confirmation'
import About from './Pages/About'

import Placed from './Pages/Congratulations'
import AboutAakanksha from './Pages/AboutAakanksha'
import ReachOut from './Pages/ReachOut'

import resetPassword from './Pages/resetPassword'

import docApp from './Components/Bookapp/detailsForm'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Pages/cart'


const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/medico" component={Knockknockmedico} /> */}
        <Route path="/doctors" component={Doctors} />
        <Route path="/camp" component={Healthcamp} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/pay" component={Payment} />
        <Route path="/confirm" component={Confirmation} />
        <Route path="/placed" component={Placed} />
        <Route path="/location" component={Location} />
        <Route path="/updateProfile" component={UpdateProfile} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/about" component={About} />

        <Route path="/aboutcompany" component={AboutAakanksha} />
        <Route path="/reachout" component={ReachOut} />

        <Route path="/resetPassword/:token" component={resetPassword} />
        <Route path="/bookingappointment" component={docApp} />

        <Route component={Notfound} />
      </Switch>
    </Router>
    </>
  )
}


export default App
