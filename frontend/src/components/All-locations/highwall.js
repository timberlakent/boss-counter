import React from "react";
import { Link } from "react-router-dom";



function HighWall() {
  return (
    <div className="cemetary">
      <div>
        <header>
        <h1>High Wall Of Lothric</h1>
         </header>
      </div>
      <p>Bosses:</p>
        <Link className="iudex-gundyr" to="/highwalloflothric/Vordt">
          Vordt of the Boreal Valley
          
        </Link>

        <div className="wall">
        <Link className="iudex-gundyr" to="/highwalloflothric/Vordt">
          Dancer of the Boreal Valley
          
        </Link>
        </div>
      </div>
    
  );
}

export default HighWall;