import React from "react";
import NewRelease from "./sections/new-release";
import Trending from "./sections/trending";
import Hero from "./sections/hero";
import Recommended from "./sections/recommended";
import Recents from "./sections/recents";

import { Recommend } from "@mui/icons-material";

import styles from './home.module.scss'

// import styles from "./home.module.scss";

 function Home(){
    return(
    <main className="{styles.main}">
        <Hero />
        <Recents />
        <Trending />
        <NewRelease />
        <Recommended />
    </main>
    );
 }
 export default Home;