import React, { Component } from "react";
import './App.css'; 
import './contact.css';
import {Button} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Home';
import Home from "./Home";
import './Contact';
import Contact from "./Contact";
import Porumbei from './Porumbei';
import Accesorii from './Accesorii';
import Inele from './Inele'














function App() {
  return (
   
    <div className="App">
       



 <div>
 
 <ReactBootStrap.Navbar bg="primary" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">Pigeon</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="Home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="Contact">Contact</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
    
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
      
    
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar>



  <React.Fragment>
        <Router>

          <Switch>
             
              <Route exact path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/porumbei" component={Porumbei} />
                <Route path="/accesorii" component={Accesorii}/>
                <Route path="/inele" component={Inele}/>
               
          </Switch>
          

        </Router>


        </React.Fragment>
      
        
        

  </div>
   
        
</div>

                                       
    
  );

}



export default App;