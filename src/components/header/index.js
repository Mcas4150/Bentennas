import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import '../../globalstyle.css';




  function menuTransition () {
     let el = document.querySelector("div.hidden");
     let border = document.querySelector("div.btn-outer");
        if (el) {
          el.className = "visible";
          border.className = "nav-item btn-outer-top menu-btn";
        } else {
          el = document.querySelector("div.visible");
          el.className = "hidden";
          border = document.querySelector("div.btn-outer-top");
          border.className = "nav-item btn-outer menu-btn";
        }
        return el;
    };





class Header extends Component {





   render() {
    return (
      <div className="header">
        <div className="header-container wrap">
        {/*Mobile Only*/}
          <div className="mobile">
            <div className="nav-item btn-outer menu-btn" onClick={menuTransition}>MENU</div>
              <div className="hidden">
                <div className="fullscreen-menu">
                  <Link className="item" to={"/mixes"}>MIXES</Link>
                  <Link className="item" to={"/videos"}>VIDEOS</Link>
                  <Link className="item" to={"/events"}>EVENTS</Link>
                  <Link className="item" to={"https://ntslive.tictail.com/"} target="_blank">SHOP</Link>
                  <Link className="item" to={"/about"}>ABOUT</Link>
                  <div className="footer-overlay font1">
                    <div className="left-social">
                    </div>
                    <div className="copyright">
                      <a>© 2018 Mike Cassidy</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        {/*Mobile*/}
        {/*Desktopy*/}
          <div className="desktop">
            <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/mixes"}>MIXES</NavLink>
            <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/videos"}>VIDEOS</NavLink>
            <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/events"}>EVENTS</NavLink>
            <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"https://ntslive.tictail.com/"} target="_blank">SHOP</NavLink>
            <NavLink className="nav-item btn-outer" activeClassName="btn-outer-top" to={"/about"}>ABOUT</NavLink>
          </div>
        {/*Mobile*/}
        </div>
      </div>

   );
  }
}



export default Header;
