import React from "react";
import style from "./style.module.css"
import LogoIcon from "./logo";
import LogoName from "./ner";
import Navi from "./nav";
const Toolbar = () => (
    <header className={style.Toolbar}>
        <ul><LogoIcon link="/main"></LogoIcon></ul>
        <LogoName/>
        <Navi/>
    </header>
);
export default Toolbar;