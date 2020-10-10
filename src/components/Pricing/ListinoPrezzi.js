import React from 'react';
import './ListinoPrezzi.css';

var brush = require('./../../img/brush.png');
var scissors = require('./../../img/scissors.png');
var bottle = require('./../../img/bottle.png');


function ListinoPrezzi() {
    return (
       
      <section id="pricing">
      <h1>Listino prezzi</h1>
      <div className="pricing pricing-palden">
        <div className="pricing-item">
          <div className="pricing-deco">
            <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
              <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
              <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
              <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
              <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
            </svg>
            <div className="pricing-price"><img src={scissors} style={{height: "100px", width: "100px"}}></img>
            </div>
            <h3 className="pricing-title">Basici</h3>
          </div>
          <ul className="pricing-feature-list">
            <li className="pricing-feature">Taglio 15,00€</li>
            <li className="pricing-feature">Piega corta 10,00€</li>
            <li className="pricing-feature">Piega media 13,00€</li>
            <li className="pricing-feature">Piega lunghi 15,00€</li>
          </ul>
        <a href="https://www.uala.it/menditto-parrucchieri_via-santa-croce-22" target="_blank"><button className="pricing-action">Prenota ora</button></a>
        </div>
        <div className="pricing-item pricing__item--featured">
          <div className="pricing-deco">
            <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
              <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
              <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
              <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
              <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
            </svg>
            <div className="pricing-price"><img src={brush} style={{height: "100px", width: "100px"}}></img>
            </div>
            <h3 className="pricing-title">Tocchi di colore</h3>
          </div>
          <ul className="pricing-feature-list">
            <li className="pricing-feature">Colore ricrescita 25,00€</li>
            <li className="pricing-feature">Colore completo 35,00€</li>
            <li className="pricing-feature">Colpi di sole 50,00€</li>
            <li className="pricing-feature">Meches 80,00€</li>
            <li className="pricing-feature">Balayage 80,00€</li>
          </ul>
          <a href="https://www.uala.it/menditto-parrucchieri_via-santa-croce-22" target="_blank"><button className="pricing-action">Prenota ora</button></a>
        </div>
        <div className="pricing-item">
          <div className="pricing-deco">
            <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
              <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
              <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
              <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
              <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
            </svg>
            <div className="pricing-price"><img src={bottle} style={{height: "100px", width: "100px"}}></img>
            </div>
            <h3 className="pricing-title">Trattamenti</h3>
          </div>
          <ul className="pricing-feature-list">
          <li className="pricing-feature">Babylights 100,00€</li>
            <li className="pricing-feature">Stiratura alla keratina a partire da 80,00€</li>
            <li className="pricing-feature">Ricostruzione 15,00€</li>
            <li className="pricing-feature">Ondulazione a partire da 40,00€</li>
          </ul>
          <a href="https://www.uala.it/menditto-parrucchieri_via-santa-croce-22" target="_blank"><button className="pricing-action">Prenota ora</button></a>
        </div>
      </div>
    </section>
    )
}

export default ListinoPrezzi;
