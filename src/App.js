import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import ListinoPrezzi from './components/Pricing/ListinoPrezzi';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Galleria';
// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div className="App">
    
    <SimpleReactLightbox>
    <Navbar />
    <Hero />
    <About />
    <ListinoPrezzi />
    <Services />
    <Gallery />
  
    <Footer />
      </SimpleReactLightbox>
   
    </div>
  );
}

export default App;
