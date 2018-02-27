import React, { Component } from 'react';
import FooterPlayer from "../footer-player/FooterPlayer";
import Paginate  from "../../Paginate";
import './shows.css';
import '../app/App.css';

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
      limit: 40,
      playerURL: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
      iframe: 'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/&mini=1&embed_uuid=2b6ffc54-26d3-46fe-a17f-246587139b40&replace=0&hide_cover=1&light=1&embed_type=widget_standard&hide_tracklist=1'
    };
    // this.changeTrack = this.changeTrack.bind(this);
    this.setLimit = this.setLimit.bind(this);
  }

  setLimit = (newLimit) => {
    this.setState({ limit: newLimit});
  };

//   changeTrack = (newURL) => {
//       this.setState({ playerURL: newUrl });
//
//       //   this.setState({ iframe: 'https://www.mixcloud.com/widget/iframe/?feed=' + {newUrl} + '&mini=1&embed_uuid=2b6ffc54-26d3-46fe-a17f-246587139b40&replace=0&hide_cover=1&light=1&embed_type=widget_standard&hide_tracklist=1'});
// }



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


 render() {
    return (
      <div className="middle">
        <Paginate limit={this.state.limit} onChange={this.setLimit}/>
        <div className="result">
          {this.state.shows.map(function(show) {
            return (
              <div className="show">
                <a href={show.url} >
                    <img src={show.pictures.large} />
                </a>

                  {/*<img src={show.pictures.large} value={show.url} onClick={this.changeTrack}/>*/}
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
