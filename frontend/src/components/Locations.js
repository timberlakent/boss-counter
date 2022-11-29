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
       <Link className="wall" to="highwalloflothric">
          High Wall of Lothric
        </Link>
        </div>

        <div className="wall-1">
       <Link className="wall-1" to="highwalloflothric">
          Undead Settlement
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-2" to="highwalloflothric">
          Road of Sacrifices
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-3" to="highwalloflothric">
          Cathedral of The Deep
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-4" to="highwalloflothric">
          Farron Keep
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-5" to="highwalloflothric">
          Catacombs of Carthus
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-6" to="highwalloflothric">
          Smouldering Lake
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-7" to="highwalloflothric">
         Irithyll of The Boreal Valley
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-8" to="highwalloflothric">
          Irythyll Dungeon
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-9" to="highwalloflothric">
          Profaned Capital
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-10" to="highwalloflothric">
          Anor Londo
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-11" to="highwalloflothric">
          Lothric Castle
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-12" to="highwalloflothric">
          Grand Archives
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-13" to="highwalloflothric">
          Kiln of the First Flame
       </Link>
        </div>
        <div className="wall">
       <Link className="wall-14" to="highwalloflothric">
          Firelink Shrine
       </Link>
        </div>
        
        </div>
        // </div>
           
    
  );
}

export default Locations;
