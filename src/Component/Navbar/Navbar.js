import React from 'react'
import {Link} from "react-router-dom"
import navbar from "./Navbar.module.css"
import Navbar_logo from "../../Assets/img/logo/logo.png"

function Navbar() {
  return (
    <div className={navbar.navbar_section}>
     <div classsName={navbar.nb_container}>
      <div className={navbar.logo_container}>
        <img src={Navbar_logo} alt='navbar-logo'/>
      </div>
      <div className={navbar.ul_container}>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link to='/services'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>


      {/* Contact Number btn */}
      <div className={navbar.btn_container}>
        <p>+91 0973792492</p>
      </div>


      {/* Dropdown btn */}
      <div className={navbar.btn_container}>
        <div className={navbar.btn_line}></div>
        <div className={navbar.btn_line}></div>
        <div className={navbar.btn_line}></div>
      </div>
     </div>
    </div>
  )
}

export default Navbar