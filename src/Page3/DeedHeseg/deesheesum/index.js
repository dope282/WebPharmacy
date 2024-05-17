import React from "react";
import style from "./style.module.css"
import DownSum from "../../../assets/image/dooshoosum.png"
import { Link } from "react-router-dom";
const Upsum = () => (
    // <Link to="/page2">
        <div className={style.dooshoosum}>
            <img src={DownSum} alt="Deeshee sum"/>
        </div>
    /* </Link> */
)
export default Upsum;