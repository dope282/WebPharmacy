import React from "react";
import style from "./style.module.css"
import SearchLogo from "../../assets/image/searchicon.png"
const SearchIcon = () => (
    <span className={style.searchlogo}>
        <img src={SearchLogo}/>
    </span>
)
export default SearchIcon;