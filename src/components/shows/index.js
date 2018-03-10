import React, { Component } from 'react';
import FooterPlayer from "../footer-player/index";
import Paginate  from "../../Paginate";
import './shows.css';
import '../app/App.css';
import '../../globalstyle.css';


var Carousel = require('nuka-carousel');


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


  mixins: [Carousel.ControllerMixin]


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
        <div className="caro-pad">
          <Carousel wrapAround="true" autoplay="false">
            <img src="https://media.ntslive.co.uk/resize/1600x1600/f2af85b9-c94f-40fd-827c-5ba7ad40e8c1_1519689600.png"/>
            <img src="https://media.ntslive.co.uk/resize/1600x1600/b2398efe-8c8d-47b8-af32-cdf6e9496b5c_1520294400.jpeg"/>
            <img src="https://media.ntslive.co.uk/resize/1600x1600/f6fbe947-44e2-430c-9e49-6b4c1ab0282d_1519257600.jpeg"/>
            <img src="https://media.ntslive.co.uk/resize/1600x1600/66985bd8-d880-477d-b840-cf7ef19dde80_1520467200.jpeg"/>
            <img src="https://media.ntslive.co.uk/resize/1600x1600/368ac02b-3863-4e28-b770-168478e6b46c_1520553600.jpeg"/>
          </Carousel>
        </div>
        {/*<Paginate limit={this.state.limit} onChange={this.setLimit}/>*/}
        <ShowsList shows={this.state.shows}/>
      </div>
    );
  }
}


export default Mixcloud;
