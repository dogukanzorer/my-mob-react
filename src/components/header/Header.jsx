import React, { useState } from 'react';
import './Header.css';
import logo from '../../img/logomymob.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="nav container">
        <i className='bx bx-menu' id="menu" onClick={toggleMenu}></i>
        <img src={logo} alt="Company Logo" className="logo-img" />
        <ul className={`navbar ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Furniture</a></li>
          <li><a href="#hiring">Hiring job</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
