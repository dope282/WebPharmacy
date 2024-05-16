import React from "react";
import style from "./style.module.css"
import DownSum from "../../assets/image/dooshoosum.png"
import { Link } from "react-router-dom";
const Downsum = () => (
    // <Link to="/page2">
        <div className={style.dooshoosum}>
            <img src={DownSum} alt="Dooshoo sum"/>
        </div>
    /* </Link> */
)
export default Downsum;