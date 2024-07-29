import React from "react";
import About_img from "../../Assets/professional-img.png";
import "./About.css";
import AboutUs from "./AboutUs";

export default function About() {
  return (
    <>
      <AboutUs/>
      <div className="about-value-section">
        <div className="about-main">
          <div className="img-container">
            <img src={About_img} alt="about" />
          </div>
          <div className="text-container">
            <h1 className="text-container-h1">
              WE PROVIDE PROFESSIONAL HOME SERVICES.
            </h1>
            <p className="text-container-p">
              Randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
              All randomised words which don't look even slightly
            </p>
            <button className="text-container-btn">READ MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}
