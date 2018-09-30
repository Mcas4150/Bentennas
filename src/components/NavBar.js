import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <img
          className="nav-logo"
          src="bentennaslogo.png"
          alt="ehfm arched logo"
        />
      </div>
      <div className="nav-middle">BENTENNAS</div>
      <div className="nav-right">
        <a href="#">About</a>
      </div>
    </div>
  );
};

export default NavBar;
