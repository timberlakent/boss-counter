import React from "react";
import { Link, useNavigate } from "react-router-dom"; 






export default function Nav() {
  const navigate = useNavigate(); // variable that allows us to navigate REST routes
 
    navigate("/"); // navigate to sign in page

  return (
    <nav>
      <ul>
        <li>
          <Link className="navbar-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-links" to="/new">
            New Run
          </Link>
        </li>
        <li>
          <button className="navbar-links" >
            Log Out
          </button>{" "}
          {/* sign out button that runs sign out function on click */}
        </li>
      </ul>
    </nav>
  );
}


