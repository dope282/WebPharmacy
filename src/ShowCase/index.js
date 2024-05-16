import React, { forwardRef } from "react";
import style from "./style.module.css"
import ShowImage from "../assets/image/showimage.png"
const ShowImg = () => (
    <div className={style.Show}>
        <img src={ShowImage}/>
    </div>
)
export default ShowImg;