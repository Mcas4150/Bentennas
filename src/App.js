import React, { Component } from 'react';
import './App.css';
import Mixcloud from "./Mixcloud";
import Header from './header/header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Mixcloud/>
      </div>
    );
  }
}

export default App;
