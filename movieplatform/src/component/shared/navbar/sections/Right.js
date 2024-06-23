import React from "react";

import styles from "./section.module.scss";

import NavLink from "../partials/NavLink"; 

function Right() {
        return(
            <section className={styles.container}>
          <NavLink link="Movie" path="/movie" className={styles.nav}/>
          <NavLink link="Series" path="/series" className={styles.nav} />
          <NavLink link="Animation" path="/anime" className={styles.nav}/>
          <NavLink link="Login/Signup" path="/login" className={styles.nav}/>


        </section>
    );
}
export default Right;