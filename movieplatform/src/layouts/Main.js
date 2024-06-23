import React ,{ Suspense } from 'react';
import NavBar from '../component/shared/navbar/Index';
import { Outlet } from "react-router-dom";
function Main(){
    return(
        <Suspense fallback={<h1>Loading...</h1>} >
           <NavBar />
           <section>
            <Outlet />
           </section>
        </Suspense>
    );
}
export default Main