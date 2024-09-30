import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <header className='nav-header '>
    <div className='srcn_container'>
    <div className="navber_row">
      <div className="logo">
        <NavLink className="logo_img" to="#">
          <img src="/images/logo.png" alt="Logo" className="header-logo" />
        </NavLink>
        <button type="button" className="burger" id="burger" onClick={toggleMenu}>
          <span className="burger_line"></span>
          <span className="burger_line"></span>
          <span className="burger_line"></span>
        </button>
      </div>
      <nav className={`navber_listing ${isOpen ? 'active' : ''}`} id="main">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Services">Services</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
     
      <div className="login_btn">
        <NavLink to="#"><span>Login</span></NavLink>
      </div>
      </nav>
    </div>
    </div>
  </header>
  );
};

export default Header;
