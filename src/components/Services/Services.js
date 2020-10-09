import React from 'react';
import './Services.css';


function Services() {
   
    var brush = require('./../../img/brush.png');
    var clip = require('./../../img/clip.png');
    return (
   

             <section id="services">
        <h1>I NOSTRI SERVIZI</h1>
        <div className="services">
          <div className="row center">
          <div className="product--blue">
        <div className="product_inner">
        <div className="card__image" style={{marginBottom: '10px'}}>
                <img src={clip} alt="sedia da barbiere" />
              </div>
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Taglio</p>
          <p style={{color: "black", fontSize:"19px", fontWeight:"lighter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt </p>
        </div>
        <div className="product_overlay">
        </div>
      </div>
      <div className="product--blue">
        <div className="product_inner">
        <div className="card__image" style={{marginBottom: '10px'}}>
                <img src={clip} alt="sedia da barbiere" />
              </div>
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Colore</p>
          <p style={{color: "black", fontSize:"19px", fontWeight:"lighter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt </p>
        </div>
        <div className="product_overlay">
        </div>
      </div>
      <div className="product--blue">
        <div className="product_inner">
        <div className="card__image" style={{marginBottom: '10px'}}>
                <img src={clip} alt="sedia da barbiere" />
              </div>
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Piega</p>
          <p style={{color: "black", fontSize:"19px", fontWeight:"lighter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt </p>
        </div>
        <div className="product_overlay">
        </div>
      </div>
      <div className="product--blue">
        <div className="product_inner">
        <div className="card__image" style={{marginBottom: '10px'}}>
                <img src={clip} alt="sedia da barbiere" />
              </div>
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Trattamenti</p>
          <p style={{color: "black", fontSize:"19px", fontWeight:"lighter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt </p>
        </div>
        <div className="product_overlay">
        </div>
      </div>
          </div>
        </div>
      </section>
   
    )
}

export default Services
