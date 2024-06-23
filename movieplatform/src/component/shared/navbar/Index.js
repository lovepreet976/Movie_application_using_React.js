import React from "react";

import Left from "./sections/Left";
import SearchBar from "./sections/SearchBar";
import Right from "./sections/Right";

import styles from "./navbar.module.scss"

function NavBar(){
    return(
      <header className={styles.header}>
        <Left />
        <SearchBar />
        <Right />

      </header>
    );
}
export default NavBar;