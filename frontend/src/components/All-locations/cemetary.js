import React from "react";
import { Link } from "react-router-dom";
// import FirstBoss from "./First.boss";


function Cemetary() {
  return (
    <div className="cemetary">
      <div>
        <header>
        <h1>CEMETARY OF ASH</h1>
         </header>
      </div>
      <p>Bosses:</p>
        <Link className="iudex-gundyr" to="/first">
          Iudex Gundyr
          
        </Link>
        {/* <div className="gundyr-pic">
            <img src=""></img>
            Gundyr
        </div> */}
      </div>
    
  );
}

export default Cemetary;