import React from 'react';
import './Footer.css';
import { AiFillInstagram } from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaPhoneSquareAlt} from 'react-icons/fa';


function Footer() {
  var FooterImg = require('./../../img/gallery4.jpg');
  var FooterImg8 = require('./../../img/gallery5.jpg');
  var FooterImg7 = require('./../../img/gallery8.jpg');
  var FooterImg3 = require('./../../img/gallery7.jpg');
  var FooterImg4 = require('./../../img/gallery9.jpg');
  var FooterImg5 = require('./../../img/gallery2.jpg');
  
    var FooterImg1 = require('./../../img/icon.png');
    var FooterImg2 = require ('./../../img/forcina.png');

    return (
      
        <footer className="footer" style={{paddingBottom: '15px'}}>
        <img src={FooterImg2} style={{width: "400px"}} className="clip"></img>
        <hr></hr>
        <div className="container">
          <div className="about-us">
            <h2>Dove siamo<img src={FooterImg1} style={{width: '60px', height: '70px', marginBottom: "-5px"}} /></h2>
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6130684049417!2d14.310048315416196!3d41.077449779293815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a55429c2c3adb%3A0x8405bd0f190492f5!2sMENDITTO%20PARRUCCHIERI%20BARBER!5e0!3m2!1sit!2sit!4v1599521157352!5m2!1sit!2sit" width={270} height={210} frameborder={0} style={{border:0}} allowfullscreen aria-hidden="false" tabindex={0} />
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/antonio.menditto/?hl=it" target="_blank" style={{textDecoration: 'none'}}>
              <h2>Instagram</h2>
              <div className="flex-row" style={{marginTop: '25px'}}>
                <img src={FooterImg} alt="prodotti capelli" style={{width:"90px", height:"90px"}}/>
                <img src={FooterImg8} alt="insta2" style={{width:"90px", height:"90px"}}/>
                <img src={FooterImg7} alt="insta3" style={{width:"90px", height:"90px"}}/>
              </div>
              <div className="flex-row">
                <img src={FooterImg3} alt="insta4" style={{width:"90px", height:"90px"}}/>
                <img src={FooterImg4} alt="prodotti per la barba" style={{width:"90px", height:"90px"}}/>
                <img src={FooterImg5} alt="insta6" style={{width:"90px", height:"90px"}}/>
              </div>
            </a>
          </div>
          <div className="follow" style={{marginTop: '30px'}}>
            <h2>Seguici su</h2>
            <div className="social-icons" style={{marginTop: '10px'}}>
              <a href="https://www.instagram.com/antonio.menditto/?hl=it" target="_blank"> <AiFillInstagram  className="instagram" style={{color: "#000", fontSize: "28px", marginRight: "10px"}}/></a>
              <a href="https://www.facebook.com/antoniomenditto21" target="_blank"><FaFacebookSquare className="facebook" style={{color: "#000", fontSize: "25px"}}/></a>
            </div>
            <h3 style={{color: '#fff', marginTop: '30px', fontWeight: 'bold', fontSize: "25px"}}>Chiama per prenotare:</h3>
            <a href="tel:331 987 9197" className="call" style={{textDecoration:"none", fontSize: "28px", color: "#000", marginBottom: "0px"}}>
              <h5>  <FaPhoneSquareAlt  style={{marginRight: "10px", marginTop: "-10px"}}/> 0823 125 0756</h5>
            </a>

          </div>
        </div>
        
        <div className="footer-text" style={{textAlign: 'center', margin: 0}}>
          <p style={{textAlign: 'center', marginBottom: 0, color: '#000', textDecoration: "none"}}>Copyright 2020 © Menditto Parrucchieri</p>
        </div>
        
      </footer>
    )
}

export default Footer;