import React from 'react'
import './Hero.css';
import { AiFillInstagram } from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import Navbar from './../Navbar/Navbar';
import $ from "jquery";
function Hero() {

var image = require('./../../img/back6.jpg');
var image1 = require('./../../img/back11.jpg');

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 260) {
        $(".phone").addClass("black");
        $(".instagram").addClass("black");
        $(".facebook").addClass("black");
        
    } else {
        $(".phone").removeClass("black");
        $(".instagram").removeClass("black");
        $(".facebook").removeClass("black");
    }
});

    return (
        <div className="hero">
        <div className="slogan-container">
        <h1 className="slogan">"Una donna che si taglia i capelli, è una donna che sta per cambiar vita."</h1>
            <p style={{marginBottom:"30px"}}>-Coco Chanel</p>
            <a href="tel: 0823 125 0756" className="call" style={{color: "#fff"}}>    <button className="hero-btn">Chiama ora</button></a>
            </div>
            <img src={image} className="heroImg"/>
            <img src={image1} className="heroImg1"/>
            
        
    <div className="icon-container">
    <a href="https://www.instagram.com/antonio.menditto/?hl=it" target="_blank" style={{color:"#fff"}} > <AiFillInstagram  className="instagram"/></a>
   <a href="https://www.facebook.com/antoniomenditto21" target="_blank" style={{color:"#fff"}} > <FaFacebookSquare className="facebook"/></a>
   <a href="tel: 0823 125 0756" className="call" style={{color: "#fff"}}>  <FaPhoneSquareAlt className="phone" /></a>
    </div>              
        </div>

    )
}

export default Hero
