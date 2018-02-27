import React, { Component } from 'react';
import './App.css';
import '../../globalstyle.css';
import Main from "../main/index";
import Header from '../header/index';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
