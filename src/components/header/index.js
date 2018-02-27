import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../globalstyle.css';




  function menuTransition () {
     let el = document.querySelector("div.menu-btn");
        let link = document.querySelector('div.hide');

        if (el) {
          el.className = "menu-btn-full";
          link.className = "visible";
        } else {
          el = document.querySelector("div.menu-btn-full");
          el.className = "menu-btn";
          link = document.querySelector('div.visible');
          link.className = "hide";
        }

        return el, link;
    };





class Header extends Component {





   render() {
    return (
      <div className="header">
        <div className="header-container wrap">
        {/*Mobile Only*/}
          <div className="mobile">
            <div className="nav-item btn-outer menu-btn" onClick={menuTransition}>MENU</div>
              <div className="hide">
                <div id="fullscreen-menu"></div>
              </div>
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
