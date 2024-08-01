import React from "react";
import { Link } from "react-router-dom";
import navbar from "./Navbar.module.css";
import Nbar_logo from "../../Assets/img/logo/logo.png";

function Navbar() {
  return (
    <>
      <div className={navbar.nb_section}>
        <div className={navbar.nb_container}>
          <div className={navbar.nb_logo}>
            <img src={Nbar_logo} alt="Navbar logo"/>
          </div>
          <div className={navbar.ul_container}>
            <ul className={navbar.ul__container}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Contact Button */}
          <div className={navbar.btn_container}>
            <p>+91 08364836</p>
          </div>

          {/* menu */}
          <div className={navbar.menu}>
            <div className={navbar.menu_list}></div>
            <div className={navbar.menu_list}></div>
            <div className={navbar.menu_list}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
