import React from 'react'
import tmem from "./TeamMembers.module.css"
import TmeamImg1 from "../../../Assets/img/gallery/team1.png"
import TmeamImg2 from "../../../Assets/img/gallery/team2.png"
import TmeamImg3 from "../../../Assets/img/gallery/team3.png"

export default function TeamMembers() {
  return (
    <div className={tmem.tmem_section}>
      <div className={tmem.container}>

        {/* txt container */}
        <div className={tmem.txt_container}>

          <p className={tmem.txtc_p1}>
            Our Professional members
          </p>
          <p className={tmem.txtc_p2}>Our Team Members</p>

        </div>

        {/* img container */}
        <div className={tmem.img_container}>

          <div className={tmem.imgc__imgc}>
            <div className={tmem.imgc_div}>
              <img src={TmeamImg1} alt="img1" className={tmem.img} />
            </div>
            <div className={tmem.name_sec}>
              <p className={tmem.sec_name}>Mike Janathon</p>
              <p className={tmem.sec_profes}>Doctor</p>
            </div>
          </div>

          <div className={tmem.imgc__imgc}>
            
            <div className={tmem.imgc_div}>
              <img src={TmeamImg2} alt="img2" className={tmem.img} />
            </div>

            <div className={tmem.name_sec}>
              <p className={tmem.sec_name}>Mike Janathon</p>
              <p className={tmem.sec_profes}>Doctor</p>
            </div>
          </div>

          <div className={tmem.imgc__imgc}>
            <div className={tmem.imgc_div}>
              <img src={TmeamImg3} alt="img3" className={tmem.img} />
            </div>
            <div className={tmem.name_sec}>
              <p className={tmem.sec_name}>Mike Janathon</p>
              <p className={tmem.sec_profes}>Doctor</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
