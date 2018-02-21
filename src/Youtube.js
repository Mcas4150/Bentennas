import React, { Component } from 'react';


class Youtube extends Component{
constructor(props) {
    super(props);
    this.state = {
      term: '',
      name: '',
      city: '',
      image: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }



   handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://api.mixcloud.com/${this.state.term}/`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        name: data.name,
        city: data.city,
        image: data.pictures.medium
       }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
        Search Mixcloud
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search User</button>
        </form>
        <div className="result">
          <img src={this.state.image} height="200" alt={this.state.term} />
          {this.state.name}
          {this.state.city}
        </div>
      </div>
    );
  }

}


export default Youtube;
