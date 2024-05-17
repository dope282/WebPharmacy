import React from "react";
import style from "./style.module.css"
import FooterImg from "../../assets/image/Footerimage.png"
import FooterText from "./Text";

const Footer = () => (
    <div className={style.Footer}>
        <img src={FooterImg}/>
    </div>
)
export default Footer;
