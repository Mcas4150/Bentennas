import React, { Component } from 'react';
import FooterPlayer from "./FooterPlayer";
import Paginate  from "./Paginate";
import './shows.css';
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
      limit: 100,
      playerURL: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
      iframe: 'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/&mini=1&embed_uuid=2b6ffc54-26d3-46fe-a17f-246587139b40&replace=0&hide_cover=1&light=1&embed_type=widget_standard&hide_tracklist=1'
    };
    this.changeTrack = this.changeTrack.bind(this);
    this.setLimit = this.setLimit.bind(this);
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  setLimit = (newLimit) => {
    this.setState({ limit: newLimit});
  }

  changeTrack = (nowPlaying) => {
    this.setState({ playerURL: nowPlaying});
  }

   componentDidMount() {
    const url = `https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=${this.state.limit}`;
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
      <div className="middle">
        <Paginate limit={this.state.limit} onChange={this.setLimit}/>


        <div className="result">
          {this.state.shows.map(function(show) {
            return (
              <div  className="show">
                <a href={show.url} >
                  <img src={show.pictures.large}/>
                </a>
                <br/>
                  <div className="showname" >
                  {show.name}
                  </div>
              </div>
            );
          })}

          <FooterPlayer iframe={this.state.iframe}/>
        </div>
      </div>
    );
  }

}


export default Mixcloud;
