import React, { Component } from 'react';


class Mixcloud extends Component{
constructor(props) {
    super(props);
    this.state = {
      term: '',
      html: "",
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }



   handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://www.mixcloud.com/oembed/?url=https%3A%2F%2Fwww.mixcloud.com%2FNTSRADIO%2F${this.state.term}%2F&format=json`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        embed: data.html,
       }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        <div className="Title">
        Search Widget
        </div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search User</button>
        </form>
        <div className="result">
          {this.state.html}
        </div>
      </div>
    );
  }

}


export default Mixcloud;
