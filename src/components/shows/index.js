import React, { Component } from 'react';
import FooterPlayer from "../footer-player/index";
import Paginate  from "../../Paginate";
import './shows.css';
import '../app/App.css';
import '../../globalstyle.css';


const ShowsList = ({ shows }) =>
   <div className="grid">
          {shows.map(function(show) {
            return (
              <div className="show">
                <div className="image">
                  <a href={show.url} >
                      <img src={show.pictures.large}/>
                  </a>
                </div>
                  <div className="showname" key={show.url} onClick={() => this.changeTrack(show.url)}>
                  {show.name}
                  </div>
              </div>
            );
          })}
        </div>



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
      isLoading: false,
      playerURL: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
      iframe: 'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/NTSRadio/play-it-as-it-lathes-w-zach-cowie-23rd-february-2018/&mini=1&embed_uuid=2b6ffc54-26d3-46fe-a17f-246587139b40&replace=0&hide_cover=1&light=1&embed_type=widget_standard&hide_tracklist=1'
    };
    this.changeTrack = this.changeTrack.bind(this);
    this.setLimit = this.setLimit.bind(this);
  }

  setLimit = (newLimit) => {
    this.setState({ limit: newLimit});
  };

  changeTrack = (url) => {
      const newUrl = url;
      this.setState({ iframe: 'https://www.mixcloud.com/widget/iframe/?feed='.concat(newUrl, '&mini=1&embed_uuid=2b6ffc54-26d3-46fe-a17f-246587139b40&replace=0&hide_cover=1&light=1&embed_type=widget_standard&hide_tracklist=1')});
  };



   componentDidMount() {
    this.setState({ isLoading: true});
    const url = `https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=${this.state.limit}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        name: data.name,
        shows: data.data,
        isLoading: false,
       }))
      .catch(e => console.log('error', e));
  }





 render() {
    const {isLoading} = this.state;
    if (isLoading){
      return  (
       <div className="middle">
          <p className="loading">Loading...</p>
      </div>
      );
    }
    return (
      <div className="middle">
        {/*<Paginate limit={this.state.limit} onChange={this.setLimit}/>*/}
        <ShowsList shows={this.state.shows}/>
      </div>
    );
  }
}


export default Mixcloud;
