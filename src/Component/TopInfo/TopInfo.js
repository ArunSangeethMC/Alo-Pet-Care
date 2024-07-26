import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "./TopInfo.css"

export default function TopInfo() {
  return (
    <div className="topinfo-container">
      <div className="conatct">
        <IoCall className="contact-icon"/>
        <p className="contact-text">Call:+91 97998978878</p>
      </div>
      <div className="conatct">
        <MdEmail className="contact-icon"/>
        <p className="contact-text">Email: Demoua@gmail.com</p>
      </div>
    </div>
  );
}
