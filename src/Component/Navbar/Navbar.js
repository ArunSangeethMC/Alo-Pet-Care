import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "./Navbar.module.css";
import Nbar_logo from "../../Assets/img/logo/logo.png";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={navbar.nb_section}>
        <div className={navbar.nb_container}>
          <div className={navbar.nb_logo}>
            <img src={Nbar_logo} alt="Navbar logo" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className={navbar.menu} onClick={toggleMenu}>
            <CiMenuBurger className={navbar.menu_class} />
          </div>

          {/* UL Container */}
          <div className={`${navbar.ul_container} ${isMenuOpen ? navbar.show_ul : ''}`}>
            <ul className={navbar.ul__container}>
              <li className={navbar.ul__li}>
                <Link to="/">Home</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/about">About</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/services">Services</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={navbar.ul__li}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className={navbar.btn_container}>
            <p className={navbar.btn_container__p}>+91 08364836</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
