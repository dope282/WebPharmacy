import React from "react";
import styles from "./style.module.css"
import OntslohButeegdehuun from "./Text";
import Upsum from "./Deesheesum";

const DeedHeseg = () => (
    <div className={styles.downside}>
        <Upsum/>
        <OntslohButeegdehuun/>
    </div>
)

export default DeedHeseg;