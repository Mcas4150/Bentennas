import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import '../../globalstyle.css';





const Social = () =>
  <div className="social">
   {/* <a href="">
      <img id="facebook" class="social-logo" src="https://www.facebook.com/ntsradiolive/"/>
    </a>
    <a href="https://twitter.com/NTSlive">
      <img id="twitter" src=""/>
    </a>
    <a href="">
      <img id="instagram" src=""/>
    </a>*/}
    <a href="https://www.youtube.com/user/NTSLIVEUK">
      <img id="youtube" src="http://moziru.com/images/youtube-clipart-png-black-11.png"/>
    </a>
  </div>


const Search = () =>
  <div className="search">
    <input type="text">
    </input>
  </div>


const Chat = () =>
  <div className="chat">
    <img id="chatbox" src="https://d30y9cdsu7xlg0.cloudfront.net/png/465588-200.png"/>
  </div>


  function menuTransition () {
     let el = document.querySelector("div.hidden");
     let search = document.querySelector('div.search');
     let border = document.querySelector("div.btn-outer");
        if (el) {
          el.className = "visible";
          search.className = "search-hidden";
          border.className = "nav-item btn-outer-top menu-btn";
        } else {
          search = document.querySelector('div.search-hidden');
          search.className = "search";
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
            <div className="right-header">
              <Search/>
              </div>
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
            <div className="right-header">
              <Search/>
              <Social/>
              <Chat/>
            </div>
          </div>
        {/*Mobile*/}
        </div>
      </div>

   );
  }
}



export default Header;
