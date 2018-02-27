import React, { Component } from 'react';
import './header.css';
import '../../globalstyle.css';

class Header extends Component {



   render() {
    return (
      <div className="header">
        <div className="header-container wrap">
             <a className="nav-item btn-outer" href="/events">MIXES
             </a>
              <a className="nav-item btn-outer" href="/videos">
              VIDEOS</a>
              <a className="nav-item btn-outer" href="/editorial">EDITORIAL</a>
              <a className="nav-item btn-outer" href="https://ntslive.tictail.com/" target="_blank">SHOP</a>
              <a className="nav-item btn-outer" href="/about">ABOUT</a>

          {/*<div className="header-top">
            <a href="/" id="logo" className="ir"></a>
            <nav>
              <a class="nav-item nts-link nts-app" href="/events">EVENTS</a>
              <a class="nav-item nts-link nts-app" href="/videos">VIDEOS</a>
              <a class="nav-item nts-link nts-app" href="/editorial">EDITORIAL</a>
              <a class="nav-item nts-link" href="https://ntslive.tictail.com/" target="_blank">SHOP</a>
              <a class="nav-item nts-link nts-app" href="/about">ABOUT</a>
            </nav>
          </div>*/}
        </div>
       {/* <div id="live-header">
        </div>*/}
      </div>

   );
  }
}



export default Header;
