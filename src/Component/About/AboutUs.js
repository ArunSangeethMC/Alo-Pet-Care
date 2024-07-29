import React from "react";
import Img1 from "../../Assets/about-img.jpg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutus-section">
      <div className="section-container">
        <div className="container-1">
          <h1 className="container-1-h1">ABOUT US</h1>
          <p className="container-1-p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomisedThere are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised
          </p>
          <button className="container-1-btn">READ MORE</button>
        </div>
        <div className="container-2">
            <img src={Img1} alt="about uss" />
        </div>
      </div>
    </div>
  );
}
