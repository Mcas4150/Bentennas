import React, { Component } from 'react';
import './App.css';
import Youtube from "./Youtube";
import Mixcloud from "./Mixcloud";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      img6: '',
      img7: '',
      img8: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term:'',
        img: data.data[0].images.fixed_height.url,
        img2: data.data[1].images.fixed_height.url,
        img3: data.data[2].images.fixed_height.url,
        img4: data.data[3].images.fixed_height.url,
        img5: data.data[4].images.fixed_height.url,
        img6: data.data[5].images.fixed_height.url,
        img7: data.data[6].images.fixed_height.url,
        img8: data.data[7].images.fixed_height.url
       }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        {/*<div className="Title">
        Welcome to Memeland
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Generate Memes</button>
        </form>
        <img src={this.state.img} height="200" alt={this.state.term} />
        <img src={this.state.img2} height="200"  />
        <img src={this.state.img3} height="200"  />
        <img src={this.state.img4} height="200"  />
        <img src={this.state.img5} height="200"  />
        <img src={this.state.img6} height="200"  />
        <img src={this.state.img7} height="200"  />
        <img src={this.state.img8} height="200"  />*/}
      {/*  <Youtube/>*/}
        <Mixcloud/>
      </div>
    );
  }
}

export default App;
