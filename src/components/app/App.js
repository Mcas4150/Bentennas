import React, { Component } from 'react';
import './App.css';
import '../../globalstyle.css';
import Shows from "../shows/shows";
import Header from '../header/header';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <Shows/>
      </div>
    );
  }
}

export default App;
