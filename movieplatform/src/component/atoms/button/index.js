import React from "react";
 function Button(props){

    const{name, handler,path,children,className} =props;
    return(
      <a href={path? path:""} onClick={() => handler?.()}  className="className">
        <button onClick={()=> console.log("clciked")}></button>
      <span>(name)</span>
      {children}
      </a>
    );
 }
 export default Button;