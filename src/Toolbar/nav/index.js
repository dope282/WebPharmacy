import React from "react";
import style from "./style.module.css"
import LogoAccount from "./account";
import LogoSags from "./sags";
import LogoLike from "./like";
const Navi = () => (
    <div>
        <ul className={style.Navi}>
            <LogoAccount link="/account"></LogoAccount>
            <LogoSags link="/sags"></LogoSags>
            <LogoLike link="/like"></LogoLike>
        </ul>
    </div>
)
export default Navi;