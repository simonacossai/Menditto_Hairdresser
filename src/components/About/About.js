import React from 'react';
import './About.css';
import {Link} from 'react-scroll';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  var aboutImg = require('./../../img/about.jpg');
  var forcina= require('./../../img/forcina.png');

    return (
      <div style={{display:"block"}}>
      <section id="about">
  <div className="about-left-col" >
    <img src={aboutImg} /> 
  </div>
  <div className="about-right-col" >
    <div className="about-text">
      <h1>Su di noi</h1>
      <h2 style={{fontSize:"20px"}}>
      Attività nata nel 1992, il salone di bellezza Menditto parrucchieri si trova in via Santa Croce 18
      e si classifica come miglior parrucchiere di Caserta. Attività tramandata da generazioni oggi 
      appartiene ad Antonio Menditto che, insieme ai suoi fratelli, cerca di realizzare quello che era il sogno
      del padre. Il salone di bellezza dei Menditto è un luogo che unisce passione e impegno, 
      due caratteristiche che non passano inosservate alle clienti.
      Da anni offriamo look d'effetto, che fondono la modernità della moda londinese -portata dai numerosi viaggi del proprietario-
      alla tradizione a cui le nostre radici da sempre sono ancorate.
      </h2>
    </div>
  </div>
</section>
<img src={forcina} style={{textAlign:"center"}} className="hairClip"></img>
  </div>
    )
}

export default About;
