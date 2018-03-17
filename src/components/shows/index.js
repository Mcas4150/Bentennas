import React, { Component } from 'react';
import FooterPlayer from "../footer-player/index";
import Paginate  from "../../Paginate";
import './shows.css';
import '../app/App.css';
import '../../globalstyle.css';
// import './caroImage';
import ReactPlayer from 'react-player';
import algoliasearch from 'algoliasearch';
import {InstantSearch} from 'react-instantsearch/dom';
import LoadingIndicator from '../loading-indicator/loading-indicator';

var Carousel = require('nuka-carousel');


var client = algoliasearch('X619PX3QEA', '9bc8fb9aa766d6599095a9d1611572dc');
var index = client.initIndex('shows');





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
                  <div className="showname" ref={show.url} onClick={() => this.changeTrack(show.url)}>
                  {show.name}
                  {/*{show.name.split(" - ")}
                  {show.tags.map(function(tag){
                    return (
                      <div className='tagbox'>
                        <div className="tag">{tag.name}</div>
                      </div>
                      );
                  })}*/}
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
      showURL: "https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/",
      playerURL: 'https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/',
      iframe: 'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/NTSRadio/play-it-as-it-lathes-w-zach-cowie-23rd-february-2018/&mini=1&embed_uuid=2b6ffc54-26d3-46fe-a17f-246587139b40&replace=0&hide_cover=1&light=1&embed_type=widget_standard&hide_tracklist=1'
    };
    this.changeTrack = this.changeTrack.bind(this);
    this.setLimit = this.setLimit.bind(this);
  }

  setLimit = (newLimit) => {
    this.setState({ limit: newLimit});
  };

  changeTrack (url){
      let newUrl = url;
      this.setState({ showURL: newUrl});
  };



   componentDidMount() {
    this.setState({ isLoading: true});
    const url = `https://api.mixcloud.com/NTSRadio/cloudcasts/?limit=${this.state.limit}`;
    const showsindex = fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        name: data.name,
        shows: data.data,
        isLoading: false,
       }))
      .catch(e => console.log('error', e));
// index.addObjects(showsindex);
  }


  mixins: [Carousel.ControllerMixin]


 render() {
    const {isLoading} = this.state;
    if (isLoading){
      return  (
       <div className="middle">
          <LoadingIndicator/>
      </div>
      );
    }
    return (
      <div className="total">
        <div className="middle">
          <div className="caro-pad">
            <Carousel wrapAround="true" autoplay="false">
              <img src="https://i.imgur.com/yww3bTL.png"/>
              <img src="https://i.imgur.com/9iMnhp9.jpg"/>
              <img src="https://i.imgur.com/9n9UFI4.jpg"/>
              <img src="https://i.imgur.com/iVswLte.jpg"/>
              <img src="https://i.imgur.com/bCheMw3.jpg"/>
            </Carousel>
          </div>
          {/*<Paginate limit={this.state.limit} onChange={this.setLimit}/>*/}


          {/*<ShowsList shows={this.state.shows}/>*/}
           <div className="grid">
            {this.state.shows.map(function(show) {
              return (
                <div key={show.name} className="show">
                  <div className="image">
                    <a href={show.url} >
                        <img src={show.pictures.large}/>
                    </a>
                  </div>
                    <div className="showname" ref={show.url} onClick={() => this.changeTrack(show.url)}>
                   {/*<div className="showname" ref={showlink} onClick={ this.changeTrack.bind(this, show.url )}>*/}

                       {show.name}
                    {/*{show.name.split(" - ")}
                    {show.tags.map(function(tag){
                      return (
                        <div className='tagbox'>
                          <div className="tag">{tag.name}</div>
                        </div>
                        );
                    })}*/}
                    </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mixcloud-player">
          <ReactPlayer  url={this.state.showURL} width='100%'
            height='60px' controls="true"/>
        </div>
      </div>
    );
  }
}


export default Mixcloud;
