import React, { Fragment } from 'react'
import header from "./Header.module.css"
import Service from '../Service/Service';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import BetterServices from '../BetterServices/BetterServices';
import TeamMembers from '../TeamMembers/TeamMembers';
import ContactForm from '../ContactForm/ContactForm';
// import Gallery from '../Gallery/Gallery';
// import { Link } from 'react-router-dom';


function Header() {
  return (
    <Fragment>

      <div className={header.header_section}>
        <div className={header.header_container}>

          {/* Button */}
          <div className={header.header_container_btn}>
            <div className={header.cbtn_p}>
              <p>SCROLL</p>
            </div>
            <div className={header.cbtn_btn_container}>
              <div className={`${header.cbtn_btn1}`}></div>
              <div className={`${header.cbtn_btn} ${header.cbtn_btn2}`}></div>
            </div>
          </div>

          {/* Content */}
          <div className={header.header_container_content}>
            <div className={header.ripple_container_top}>
              <div className={header.ripple_container}>
                <a href='https://www.google.com' target='blank'><FaPlay className={header.rc_icon} /></a>
              </div>
            </div>


            <div className={header.content_head_p}>
              <p className={header.content_head__p}>We help to groom your pet</p>
            </div>
            <div className={header.content_head_dia}>
              <p>We Care Your Pets.</p>
            </div>
            <div className={header.content_head_discription}>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sectetur adipisci.</p>
            </div>
            <div className={header.content_head_contact}>
              <p>Contact Now</p>
              <FaArrowRightLong style={{ fontSize: "20px" }} />
            </div>

          </div>
        </div>
      </div>
      <Service />
      <BetterServices/>
      {/* <Gallery/> */}
      <TeamMembers/>
      <ContactForm/>

    </Fragment>
  );
}

export default Header 