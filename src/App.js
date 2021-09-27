import React,{useState} from 'react'
import Home from './Pages/Home'
import './App.css'
import './Pages/Home'
import Doctors from './Pages/Doctorconsultation'
import Healthcamp from './Pages/Healthcamp'
import Notfound from './Pages/Notfound'
import Knockknockmedico from './Pages/Knockknockmedico'
import Products from './Pages/Products'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Pages/cart'


const App = () => {
  const [email,setEmail]=useState("");
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
        <Route component={Notfound} />
      </Switch>
    </Router>
    </>
  )
}


export default App
