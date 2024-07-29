import React from "react";
import "./Home.css";
import Slider_img from "../../Assets/slider-img.png";
import Repair from "../../Assets/tools.svg";
import Improve from "../../Assets/construction.svg";
import Maintain from "../../Assets/maintenance.svg";

export default function Home() {
  return (
    <div className="home-section">
      <div className="home-container">
        <div className="data-container">
          <h1 className="home-section-h1">Repair and Maintenance Services</h1>
          <p className="home-section-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <button className="home-section-btn">Contact Us</button>
        </div>

        <div className="home-img-container">
          <img src={Slider_img} alt="img" />
        </div>
      </div>

      {/* secton 2 */}

      <div className="home-section2">
        <div className="tool-container-box box-1">
          <img src={Repair} alt="images1" />
          <div className="container-box-p p-box-1">
            <p>REPAIR</p>
          </div>
        </div>
        <div className="tool-container-box box-2">
          <img src={Improve} alt="image2s" />
          <div className="container-box-p">
            <p>IMPROVE</p>
          </div>
        </div>
        <div className="tool-container-box box-3">
          <img src={Maintain} alt="images2" />
          <div className="container-box-p p-box-3">
            <p>MANTAIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
