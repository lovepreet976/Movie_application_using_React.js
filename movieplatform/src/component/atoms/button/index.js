import React from "react";
import styles from "./button.module.scss"
 function Button(props){

    const{name, handler,path,children,className} =props;
    return(
      <a href={path? path:""} onClick={() => handler?.()}  className={'${classname} ${styles.button'}>
        <button onClick={()=> console.log("clciked")}></button>
      <span>(name)</span>
      {children}
      </a>
    );
 }
 export default Button;