import React from "react";
import style from "./style.module.css"
import LikeIcon from "../../../assets/image/iconlike.png"
const LogoLike  = (props) => <li className={style.Logos}>
    <a className={props.active ? style.active : null} href={props.link}>{props.children}
    <img src={LikeIcon}/>
        </a></li>

export default LogoLike;