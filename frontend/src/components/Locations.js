import React from "react";
import { Link } from "react-router-dom";
// import FirstBoss from "./First.boss";
import Header from "./Headers/Header";

function Locations() {
  return (
    <div className="home-page">
      <div>
        <Header />

        <h1>BOSS COUNTER</h1>
        <h3>A Dark souls 3 progress tracker</h3>
      </div>
        <div className="Ash">
        <Link to="cemetaryofash">
          <img src="http://darksouls3.wdfiles.com/local--files/image-set:bonfires/cemetery-of-ash.jpg"></img>
          Cemetary Of Ash
        </Link>
        <Link to="first">
          <img src="http://darksouls3.wdfiles.com/local--files/image-set:bonfires/cemetery-of-ash.jpg"></img>
          Cemetary Of Ash
        </Link>
        </div>
      </div>
    
  );
}

export default Locations;
