import React from "react";
import { Link } from "react-router-dom";
// import FirstBoss from "./First.boss";
import Header from "./Headers/Header";

function Locations() {
  return (
    <div className="home-page">
      <div>
        <Header />

        <h1>Locations: </h1>
        <h3></h3>
      </div>
        <div className="cemetary">
        <Link className="wall" to="cemetaryofash">
          {/* <img src="http://darksouls3.wdfiles.com/local--files/image-set:bonfires/cemetery-of-ash.jpg"></img> */}
          Cemetary Of Ash
        </Link>
        
       
       <div className="wall">
       <Link className="wall" to="first">
          Next Area
        </Link>
        </div>
        </div>
        </div>      
    
  );
}

export default Locations;
