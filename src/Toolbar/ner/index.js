import React from "react";
import styles from "./stylde.module.css"
import Name from "../../assets/image/logoname.png";
const LogoName  = () => (
    <span className={styles.Logo}>
        <img src={Name}/>
    </span>
)
export default LogoName;