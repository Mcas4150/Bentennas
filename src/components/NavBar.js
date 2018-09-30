import React from "react";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <div className="nav-left" />
      <div className="nav-middle" />
      <div className="nav-right">
        <div className="nav-socials-wrapper">
          <a href="#" target="blank">
            <img
              className="nav-social"
              src="instagram-teal.png"
              alt="instagram logo"
            />
          </a>
          <a href="#" target="blank">
            <img
              className="nav-social"
              src="facebook-teal.png"
              alt="facebook logo"
            />
          </a>
          <a href="#" target="blank">
            <img className="nav-chat" src="chat-teal.png" alt="chatango logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
