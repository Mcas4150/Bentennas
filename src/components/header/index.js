import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../globalstyle.css';

class Header extends Component {



   render() {
    return (
      <div className="header">
        <div className="header-container wrap">
        {/*Mobile Only*/}
          <div className="mobile">
            <Link className="nav-item btn-outer" to={"/mixes"}>MENU</Link>
          </div>
        {/*Desktopy*/}
          <div className="desktop">
            <Link className="nav-item btn-outer " to={"/mixes"}>MIXES</Link>
            <Link className="nav-item btn-outer" to={"/videos"}>VIDEOS</Link>
            <Link className="nav-item btn-outer" to={"/editorial"}>EDITORIAL</Link>
            <Link className="nav-item btn-outer" to={"https://ntslive.tictail.com/"} target="_blank">SHOP</Link>
            <Link className="nav-item btn-outer" to={"/about"}>ABOUT</Link>
          </div>
        </div>
      </div>

   );
  }
}



export default Header;
