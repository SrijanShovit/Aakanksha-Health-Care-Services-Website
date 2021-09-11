import React from 'react'
import Home from './Pages/Home'
import './App.css'
import './Pages/Home'
import Doctors from './Pages/Doctorconsultation'
import Healthcamp from './Pages/Healthcamp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
    <Switch>
    <Route exact  path="/" component={Home} />
    <Route path="/doctors" component={Doctors} />
     {/* <Home /> */}
     <Route path="/camp" component={Healthcamp} />
     </Switch>
     </Router>
    </>
  )
}


export default App
