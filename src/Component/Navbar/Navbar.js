import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navbar-main">
      <div className="logo">
        <p className="logo-p">BALAJI</p>
      </div>
      <div className="links">
        <ul className={`navbar-ul ${isOpen ? 'active' : ''}`}>
          <li className='navbar-li'>
            <Link to="/" onClick={toggleDropdown}>Home</Link>
          </li>
          <li className='navbar-li'>
            <Link to="/about" onClick={toggleDropdown}>About Us</Link>
          </li>
          <li className='navbar-li'>
            <Link to="/service" onClick={toggleDropdown}>Service</Link>
          </li>
          <li className='navbar-li'>
            <Link to="/contact" onClick={toggleDropdown}>Contact Us</Link>
          </li>
        </ul>
        {isOpen ? (
          <AiOutlineClose className='nav-bars-close' onClick={toggleDropdown} />
        ) : (
          <FaBars className='nav-bars-burger' onClick={toggleDropdown} />
        )}
      </div>
    </div>
  );
}
