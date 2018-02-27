import React, { Component } from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Shows from '../shows/index';
import Videos from '../videos/index';
import About from '../about/index';
import '../../globalstyle.css';



class Main extends Component {
  render() {
    return (
      <main className="main wrap">

          <Switch>
            <Route exact path="/" component={Shows}/>
            <Route path="/mixes" component={Shows}/>
            <Route path="/video" component={Videos}/>
            <Route path="/about" component={About}/>
          </Switch>
      </main>
    );
  }
}


export default Main;