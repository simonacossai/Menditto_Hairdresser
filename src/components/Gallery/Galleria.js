import React from 'react';
import './Galleria.css';
import { SRLWrapper } from "simple-react-lightbox";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Galleria() {
    var GalleryImg1 = require('./../../img/about2.jpg');
    var GalleryImg2 = require('./../../img/about3.jpg');
    var GalleryImg3 = require('./../../img/gallery3.jpg');
    var GalleryImg4 = require('./../../img/gallery4.jpg');
    var GalleryImg5 = require('./../../img/gallery1.jpg');
    var GalleryImg6 = require('./../../img/gallery1.jpg');
    var GalleryImg7 = require('./../../img/gallery5.jpg');
    var GalleryImg8 = require('./../../img/gallery6.jpg');
    var GalleryImg9 = require('./../../img/gallery7.jpg');
    var GalleryImg10 = require('./../../img/gallery8.jpg');
    var GalleryImg11 = require('./../../img/gallery9.jpg');
  

    return (
        <div >
        <div className="container text-center" id="gallery" style={{marginTop: '6em'}}>
          <h1 style={{fontWeight: 500, fontSize: '2.8em'}}>Galleria</h1>
        </div>
      
<Container>
<SRLWrapper>     
<div >
    <Row className="gallery-row">
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg1} className="img-fluid" /></a></Col>
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg2} className="img-fluid" /></a></Col>
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg3} className="img-fluid" /></a></Col>
  </Row>
  <Row  className="gallery-row">
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg4} className="img-fluid" /></a></Col>
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg10} className="img-fluid" /></a></Col>
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg11} className="img-fluid" /></a></Col>
  </Row>
  <Row  className="gallery-row">
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg7} className="img-fluid" /></a></Col>
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg8} className="img-fluid" /></a></Col>
    <Col> <a href={GalleryImg1} data-lightbox="image-1"><img src={GalleryImg9} className="img-fluid" /></a></Col>
  </Row>
  </div>
  </SRLWrapper>
</Container>
   
      </div>
    )
}

export default Galleria
