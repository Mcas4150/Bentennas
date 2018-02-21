import React, { Component } from 'react';
import './App.css';

class Mixcloud extends Component{
constructor(props) {
    super(props);
    this.state = {
      term: '',
      name: '',
      playCount: null,
      image: '',
      listenerCount: null,
      url: '',
      shows: [],
      tags: [],
      genre: '',
      list: '',
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }



   handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://api.mixcloud.com/${this.state.term}/cloudcasts/?limit=40`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        name: data.name,
        shows: data.data,
       }))
      .catch(e => console.log('error', e));
  }


// list =  this.setObject.keys(tags).forEach(function(key) {
//   console.log('Key : ' + key + ', Value : ' + tags[key])
// })


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


       {/*   tags: {this.state.tags.map(function(listValue){
            return <li>{listValue}</li>;
          })}*/}

        {this.state.shows.map(function(show) {
          return (
            <div  className="show">


              <a href={show.url}>
              <img src={show.pictures.large}/>
              <br/>
                {show.name}

              </a>
           {/*   {show.user.name}*/}
            </div>
          );
        })}
        </div>
      </div>
    );
  }

}


export default Mixcloud;
