import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <div className="nav-left nav-link">Live</div>
      <div className="nav-stripe" />
      <div className="nav-middle">
        <div>NOTION</div>
      </div>
      <div className="nav-stripe" />
      <div className="nav-right nav-link">About</div>
    </div>
  );
};

export default NavBar;
