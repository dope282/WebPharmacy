import React, { Component } from "react";
import style from "./style.module.css"
import DeedHeseg from "./DeedHeseg";
import Footer from "./Footer";

class Page3 extends Component {
    render() {
        return <div className={style.page3}>
            <DeedHeseg/>
            <Footer/>
        </div>
    };
}
export default Page3;