import React from "react";

import styles from "./section.module.scss";

import NavLink from "../partials/NavLink"; 

function Left() {
        return(
        <section className={styles.container}>
          <NavLink link="Home" path="/home" className={styles.nav} />
          <NavLink link="Genre" path="/genre" className={styles.nav} />
          <NavLink link="Country" path="/country" className={styles.nav}/>

        </section>
    );
}
export default Left;