import React from "react";

import styles from "./hero.module.scss";
import * as assets from "../../../../assets";


function Hero(){


    return(
    <section className="={styles.container">
      <img src ={assets.Avatar} alt ="avatar-home"/> 

      <article>
        <div className="styles.btns">
       <Button 
       name ={"Watch Now"} 
       handler={()=>console.log("clicked watch")}
       className={styles.now}>

        <Icon icon="icon-park-solid:play" />
      </Button>

      <Button 
       name ={"Watch Now"} 
       handler={()=>console.log("clicked watch")}
       className={styles.later}>

        <Icon icon="mdi:clock" />
      </Button>
      </div>
      </article>
      
    </section>
    );
}
export default Hero;