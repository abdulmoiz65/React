// import React from "react";
import React, { useState } from "react";

import "../project.css";

function Counter() {

let count =  0 ;
const [currentState , UpdatedState] = useState(count);    
const clickit = () =>{
 
     UpdatedState(currentState + 1) ;

}

const reset = () =>{
   UpdatedState(0);
}

        return(
        <>
        <div className="count">
        
            <h3>This is my counter</h3>
                <button onClick={clickit}>  {currentState} </button>
                <button className="reset" onClick={reset} > Reset </button>
                
            </div>
        </>
            
        );
    
}

export default Counter;