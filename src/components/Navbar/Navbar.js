import React, {useState} from 'react';

import {Link} from 'react-scroll';
import {GiHairStrands} from 'react-icons/gi';
import {FaBars, FaTimes} from 'react-icons/fa'; 
import './Navbar.css';


function Navbar() {
    
    const [click, setClick] = useState(false)
    const handleClick =()=> setClick(!click)
    const [button, setButton] = useState(true)

    const closeMobileMenu = () =>setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }


    window.addEventListener('resize', showButton);
    return (
        <div className="bar-container">
          <div className="navbar" id="navbar">
              <div className="navbar-container container">           
                  <Link to="home" smooth={true} duration={900} className="navbar-logo">
                  <GiHairStrands className="navbar-icon" style={{marginRight: "10px"}}/>
                      MENDITTO
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes /> : <FaBars />}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                          <Link  smooth={true} duration={900} to="home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link  smooth={true} duration={900} to="about" className="nav-links" onClick={closeMobileMenu}>
                            Su di noi
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="pricing" smooth={true} duration={900} className="nav-links" onClick={closeMobileMenu}>
                            Listino prezzi
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="services" smooth={true} duration={900} className="nav-links" onClick={closeMobileMenu}>
                            Servizi
                          </Link>
                      </li>
                     
                      <li className="nav-item">
                          <Link to="gallery" smooth={true} duration={900} className="nav-links" onClick={closeMobileMenu}>
                            Galleria
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>  
        </div>
    )
}

export default Navbar
