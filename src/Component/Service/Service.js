import React from "react";
import "./Service.css";
import service_img_1 from "../../Assets/s1.png";
import service_img_2 from "../../Assets/s2.png";
import service_img_3 from "../../Assets/s3.png";

export default function Service() {
  return (
    <div className="service-section">
      <div className="service-section-container">
        <h1>OUR SERVICES</h1>
        <div className="service-container">
          <div className="service-container-boxes">
            <img src={service_img_1} alt="service1" />
            <h3 className="service-container-box-h3">Maintenance</h3>
            <p className="service-container-box-p">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          <div className="service-container-boxes">
            <img src={service_img_2} alt="service2" />
            <h3 className="service-container-box-h3">Electrical</h3>
            <p className="service-container-box-p">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          <div className="service-container-boxes">
            <img src={service_img_3} alt="service3" />
            <h3 className="service-container-box-h3">Plumbing</h3>
            <p className="service-container-box-p">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
        </div>
        {/* Button */}
        <button>VIEW MORE</button>
      </div>
    </div>
  );
}
