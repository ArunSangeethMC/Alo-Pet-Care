import React from 'react'
import bservices from "./BetterServices.module.css"
// import Bservices_img1 from "../../../Assets/img/gallery/about.png"
// import Bservices_img2 from "../../../Assets/img/gallery/section_bg02.png"
import { TbGridDots } from "react-icons/tb";

function BetterServices() {
    return (
        <div className={bservices.bservices_section}>
            <div className={bservices.bservices_container_top_level}>

                {/* Container 1  */}
                <div className={bservices.container_img}>


                    {/* Box 1 */}
                    <div className={bservices.c1_box} style={{background:"#1a1f50"}}>
                        <div className={bservices.box_icon_p}>
                            <TbGridDots />
                            <p>354</p>
                        </div>
                        <div className={bservices.box_p}>
                            <p>Success</p>
                            <p>Treatment</p>
                        </div>
                    </div>


                    {/* Box 2 */}
                    <div className={bservices.c1_box} style={{background:"#eb4916", marginLeft:"10px"}}>
                        <div className={bservices.box_icon_p}>
                            <TbGridDots />
                            <p>354</p>
                        </div>
                        <div className={bservices.box_p}>
                            <p>Success</p>
                            <p>Treatment</p>
                        </div>
                    </div>
                </div>

                {/* Container 2    */}
                <div className={bservices.container_discription}>
                    <p className={bservices.cd_h1}>We are commited for
                        better service</p>
                    <p className={bservices.cd_p1}>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu.</p>
                    <p className={bservices.cd_p2}>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
                    <div className={bservices.cd_btn}>
                        <button className={bservices.btn}>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BetterServices
