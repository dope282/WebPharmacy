import React from "react";
import style from "./style.module.css"
import AccountIcon from "../../../assets/image/iconaccount.png"
const LogoAccount  = (props) => <li className={style.Logos}>
    <a className={props.active ? style.active : null} href={props.link}>{props.children} <img src={AccountIcon}/></a>
</li>
export default LogoAccount;