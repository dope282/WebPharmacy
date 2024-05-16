import React from "react";
import style from "./style.module.css"
import OntslohButeegdehuun from "./Text";
import Downsum from "./Down";
const DownSide = () => (
    <div className={style.downSide}>
        <OntslohButeegdehuun/>    
        <Downsum/>
    </div>
)

export default DownSide;