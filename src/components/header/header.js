import React, { Component } from 'react';
import './header.css';

class Header extends Component {



   render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header-top">
            <a href="/" id="logo" className="ir"></a>
            <nav>
              <a class="nav-item nts-link nts-app" href="/events">EVENTS</a>
              <a class="nav-item nts-link nts-app" href="/videos">VIDEOS</a>
              <a class="nav-item nts-link nts-app" href="/editorial">EDITORIAL</a>
              <a class="nav-item nts-link" href="https://ntslive.tictail.com/" target="_blank">SHOP</a>
              <a class="nav-item nts-link nts-app" href="/about">ABOUT</a>
            </nav>
          </div>
        </div>
       {/* <div id="live-header">
        </div>*/}
      </div>

   );
  }
}



export default Header;
