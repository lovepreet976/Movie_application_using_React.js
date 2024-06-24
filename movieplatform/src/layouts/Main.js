import React, { Suspense } from 'react';
import NavBar from '../component/shared/navbar';
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
function Main(){
    return(
        <Suspense fallback={<h1>Loading...</h1>} >
           <NavBar />
           <section className='styles.main'>
            <Outlet />
           </section>
        </Suspense>
    );
}
export default Main