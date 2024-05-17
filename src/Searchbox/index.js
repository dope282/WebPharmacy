import React from "react";
import style from "./style.module.css"
import HaihLogo from "../assets/image/searchicon.png"
const SearchBox = () => (
    <header className={style.searchBox}>
        {/* <SearchIcon/> */}
        <img src={HaihLogo}/>
        <input className="search-box" type="search" placeholder="Та юу хайж байна вэ?" /> 
        <button>Хайх</button>
    </header>
);
export default SearchBox;