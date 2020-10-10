import React from 'react';
import './Services.css';


function Services() {
   
    var brush = require('./../../img/brush.png');
    var clip = require('./../../img/clip.png');
    var GalleryImg4 = require('./../../img/piega.jpg');
    var GalleryImg2 = require('./../../img/gallery2.jpg');
    var GalleryImg5 = require('./../../img/colore.jpg');
    var GalleryImg8 = require('./../../img/trattamenti.jpg');


    return (
   

             <section id="services">
        <h1>I NOSTRI SERVIZI</h1>
        <div className="services">
          <div className="row center">
          <div className="product--blue">
        
                <img src={GalleryImg2} alt="sedia da barbiere"  className="serviceImage"/>
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Taglio</p>
      </div>
      <div className="product--blue">  
                <img src={GalleryImg5} alt="sedia da barbiere" className="serviceImage" />
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Colore</p>
      </div>
      <div className="product--blue">
                <img src={GalleryImg4} alt="sedia da barbiere" className="serviceImage" />        
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Piega</p>
      </div>
      <div className="product--blue">
                <img src={GalleryImg8} alt="sedia da barbiere" className="serviceImage"/>
              <p style={{color: "black", fontSize: "25px", fontFamily: 'Playfair Display SC'}}>Trattamenti</p>    
      </div>
          </div>
        </div>
      </section>
   
    )
}

export default Services
