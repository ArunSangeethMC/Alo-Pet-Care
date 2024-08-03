// Service.js
import React from 'react';
import service from "./Service.module.css"
import { GiSittingDog } from 'react-icons/gi';
import { CiStethoscope } from 'react-icons/ci';
import { MdOutlineVaccines } from 'react-icons/md';


function Service() {
  return (
    <div className={service.service_section}>
      <div className={service.ss_container}>

        <p className={service.ssc_p}>Our Professional Services</p>
        <h1 className={service.ssc_h1}>Best Pet Care Services</h1>

        <div className={service.ss_card_container}>

          <div className={service.card_box}>

            <div className={service.box_icon}>
              <GiSittingDog className={service.card__icon} />
            </div>

            <p className={service.card__p_head}>Pet Boarding</p>
            <p className={service.card__p}>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>

          </div>

          <div className={service.card_box}>
            <div className={service.box_icon}>
              <CiStethoscope className={service.card__icon} />
            </div>
            <p className={service.card__p_head}>Pet Boarding</p>
            <p className={service.card__p}>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>
          </div>

          <div className={service.card_box}>
            <div className={service.box_icon}>
              <MdOutlineVaccines className={service.card__icon} />
            </div>
            <p className={service.card__p_head}>Pet Boarding</p>
            <p className={service.card__p}>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
