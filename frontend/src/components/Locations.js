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
        
        <Link className="wall" to="cemetaryofash">
          Cemetary Of Ash
        </Link>
        
       
       <div className="wall">
       <Link className="wall" to="first">
          High Wall of Lothric
        </Link>
        </div>
        </div>
           
    
  );
}

export default Locations;
