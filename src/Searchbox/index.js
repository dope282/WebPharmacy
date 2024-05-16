import React from "react";
import style from "./style.module.css"
const SearchBox = () => (
    <header className={style.searchBox}>
        <input className="search-box" type="search" placeholder="Та юу хайж байна вэ?"/>
    </header>
);
export default SearchBox;