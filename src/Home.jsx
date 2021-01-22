
import React, { Component } from "react";
import './home.css';
import * as ReactBootStrap from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';





class Home extends Component{
    render(){
    

        return (

          
              
                <div className="Home">

                    <div>
                    <ReactBootStrap.Container>
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col sm={6}>
                                    <div className ="text">
                                     <h3>Salutare, bine ai venit pe site-ul nostru</h3>
                                     <h3>Pigeon Ring's</h3>
                                  </div>
                     
                                
        
                       </ReactBootStrap.Col>

                           <ReactBootStrap.Col sm={4}>
                                
                                <div className="voiajor"> 
                             <Image src = "pigeon-vector-png-2.png"bsPrefix></Image>
                                  </div>
                                
                                
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                                
                            <div className="Accesoriilenoastre">
                                
                                <h1><br /><br />Accesoriile noastre</h1>

                            </div>

                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col sm>
                                <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">

                                            <Image src = "(5).png"bsPrefix></Image>
                                                  
                                            </div>
                                            <div class="flip-card-back">
                                           
                                            <h1>Accesorii</h1>
                                            <p></p>
                                            <p>We love that guy</p>
                                            <ReactBootStrap.Button href="./Accesorii">Vezi</ReactBootStrap.Button>{''}
                                            </div>
                                           
                                        </div>
                                        </div>
                                
                                
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col sm>
                                <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                            <Image src = "p (4).png"bsPrefix></Image>
                                            </div>
                                            <div class="flip-card-back">
                                            <h1>Porumbei</h1>
                                            <p></p>
                                            <p>We love that guy</p>
                                            <ReactBootStrap.Button href="./Porumbei">Vezi</ReactBootStrap.Button>{''}
                                            
                                            </div>
                                          
                                        </div>
                                        </div>
                                
                                
                                
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col sm>
                                
                                <div class="flip-card">
                                        <div class="flip-card-inner">
                                         <div class="flip-card-front">
                                           <Image src = "(4).png"bsPrefix></Image>
                                             </div>
                                               <div class="flip-card-back">
                                                  <h1>Inele Porumbei</h1>
                                               <p></p>
                                              <p>We love that guy</p>
                                             
                                              <ReactBootStrap.Button href="./Inele">Vezi</ReactBootStrap.Button>{''}
                                            
                                         </div> 
                                    </div>
                                </div> 
                                
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                </ReactBootStrap.Container>



                <Container>
                <Row>
                 <Col sm={8}>
                     <div div className="contactimg">
                 <Image src = "Contact-Us-Team.jpg"bsPrefix></Image>
                    </div>
                 </Col>
                <Col sm={4}>
                    
                    <div className="textcontact">

                        <h1>Contacteaza-ne:</h1>
                        <div className="textcontact2">
                        <h3>Tel: 0774 622 044</h3>
                        <h3>Email: CR_Robert9@yahooo.com</h3>
                        <h3>Adresa: Bihor, Oradea str. -</h3>
                        </div>
                    </div>

                </Col>
                  </Row>
                </Container>
                                <div>

                                </div>
           
                               
<footer class="page-footer font-small cyan darken-3">
   <div class="footer-copyright text-center py-3">© 2020 Copyright:
     <a href="www.Ring's Pigeon"> Ring's Pigeon</a>
   </div>
</footer>

                                       

                    </div>
                   
                      
                            

                   
                </div>

               

  

        );
    }
}

    export default Home;
