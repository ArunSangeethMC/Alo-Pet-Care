import React from 'react'
import cform from "./ContactForm.module.css"
// import ConatctFormHeaderImg from "../../../Assets/img/gallery/contact_bg.png"
// import ConatctFormimgCImg from "../../../Assets/img/gallery/contact_form.png"
// import ConatctFormDogImg from "../../../Assets/img/gallery/shape1.png"

function ContactForm() {
    return (
        <div className={cform.cform_section}>
            <div className={cform.cform_container}>

                {/* img Container */}
                <div className={cform.cform_img_container}>
                    <div className={cform.imgc_img}></div>
                </div>

                {/* form */}
                <div className={cform.cform_form_container}>

                    <div className={cform.fc_himg_container}>
                        <div className={cform.himg__cr}>
                            <p className={cform.himg__cr_p}>World's Leading Law Consultency Agency !</p>
                        </div>
                    </div>

                    <div className={cform.fc_form}>
                        <div className={cform.forn_row_wid}>

                            <div className={cform.form_input_row}>

                                <div className={cform.fr_input}>
                                    <input type='text' placeholder='Name' className={cform.cfrinputs}></input>
                                    <input type='text' placeholder='Phone Number' className={cform.cfrinputs}></input>
                                    <input type='text' placeholder='Age' className={cform.cfrinputs}></input>
                                    <input type='email' placeholder='Email' className={cform.cfrinputs}></input>
                                </div>

                                <div className={cform.fr_msg_input}>
                                    <textarea placeholder='Message' className={cform.msgi_txta}></textarea>
                                    <div className={cform.msgi_btn}>
                                        <button className={cform.msgi__btn}>Submit Now</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactForm
