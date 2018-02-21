import React, { Component } from 'react';

class Youtube extends Component{
constructor(props) {
    super(props);
    this.state = {
      term: '',
      name: '',
      playCount: null,
      image: '',
      listenerCount: null,
      url: '',
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
    const url = `https://api.mixcloud.com/NTSRadio/${this.state.term}/`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        name: data.name,
        image: data.pictures.large,
        playCount: data.play_count,
        listenerCount: data.listener_count,
        url: data.url,
        tags : data.tags,
        genre: data.tags[1].name,


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
          <img src={this.state.image} height="200" alt={this.state.term} />
          <br/>
          Name: {this.state.name}
          <br/>
          Plays:{this.state.playCount}
          <br/>
          Listeners: {this.state.listenerCount}
          <br/>

       {/*   tags: {this.state.tags.map(function(listValue){
            return <li>{listValue}</li>;
          })}*/}

         Tags: {this.state.tags.map(function(tag) {
          return (
            <div  className="job">
              <a href={tag.url}>
                {tag.name}
                <br/>
              </a>
            </div>
          );
        })}
        </div>
      </div>
    );
  }

}


export default Youtube;
