import React from "react";
import style from "./style.module.css"
import SagsIcon from "../../../assets/image/iconsags.png"
const LogoSags  = (props) => <li className={style.Logos}>
    <a className={props.active ? style.active : null} href={props.link}>{props.children}
    <img src={SagsIcon}/>
    </a>
</li>
    
export default LogoSags;