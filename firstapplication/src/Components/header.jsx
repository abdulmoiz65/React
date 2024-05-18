import React from "react";
import { Link } from "react-router-dom";
import "../project.css";

function Header() {
    return(
       <div className="myheader">
            <ul>
               <Link to="/home"> <li>Home</li> </Link>
               <Link to="/counter"> <li>Counter</li></Link>
               <Link to="/about"> <li>About</li> </Link>
            </ul>
       </div>
    );
    
}

export default Header;