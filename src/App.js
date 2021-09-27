import React from 'react'
import Home from './Pages/Home'
import './App.css'
import './Pages/Home'
import Doctors from './Pages/Doctorconsultation'
import Healthcamp from './Pages/Healthcamp'
import Notfound from './Pages/Notfound'
import Products from './Pages/Products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
        <Route component={Notfound} />
      </Switch>
    </Router>
    </>
  )
}


export default App
