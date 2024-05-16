import React, { Component } from "react";
import style from "./style.module.css"
import DoodHeseg from "./Doodheseg";
import DeedHeseg from "./Deedheseg";

class Page2 extends Component {
    render() {
        return <div className={style.page2}>
            <DeedHeseg/>
            <DoodHeseg/>
        </div>
    };
};
export default Page2;