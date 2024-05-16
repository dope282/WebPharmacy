import React from "react";
import style from "./style.module.css"
import Logo from "../../assets/image/logo.png"
const LogoIcon  = (props) => <li className={style.Logos}>
    <a className={props.active ? style.active : null} href={props.link}>{props.children}
    <img src={Logo}/>
</a>
</li>
export default LogoIcon;