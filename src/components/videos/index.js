import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "./videos.css";
import "../shows/shows.css";
import '../../globalstyle.css';
import LoadingIndicator from '../loading-indicator/loading-indicator';




const VideoContainer = (props) =>
  <div className="video-container">

    <div className="video-player">
      <ReactPlayer url={"https://www.youtube.com/watch?v=" + props.playerID} width='100%'
          height='100%' playing controls="true"/>
    {/*  <div className="video-controls">
      </div>*/}

    </div>
    <div className="description">
      {props.title}
      {props.description}

    </div>
  </div>



const VideosList = (props) =>
   <div className="video-grid">
          {props.videos.map(function(video) {
            return (
              <div className="show">
                <div className="video-image">
                  <a href="/" >
                      <img src={video.snippet.thumbnails.high.url}/>
                  </a>
                </div>
                  <div className="showname" key={video.id.videoId} onClick={() => this.props.action}>
                  {video.snippet.title}
                  {video.snippet.publishedAt}
                  <br/>
                  {video.id.videoId}
                    {/*<p>{video.snippet.description}</p>*/}

                  </div>
              </div>
            );
          })}
        </div>



class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      playerID:'sl3VFDf1JhA',
      title: "Sun Ra and his Arkestra",
      thumbnail: '',
      description: 'Space is the Place',
      date: "",
      url: '',
      videos: [],
      limit: 40,
      isLoading: false,
    };
    this.videoHandler = this.videoHandler.bind(this);
  }


   componentDidMount() {
    this.setState({ isLoading: true});
    const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCmqKuYoZCI7D6FQzDv5nKNw&maxResults=25&key=AIzaSyBQ8FSEJZuoR2AFyoXJ1EyFCspH89Ckxws`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        videos: data.items,
        isLoading: false,
       }))
      .catch(e => console.log('error', e));
  }


  videoHandler(videoID){
    this.setState({
      playerID: videoID
    });
  }



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
      <div className="middle">
          <VideoContainer playerID={this.state.playerID} description={this.state.description} title={this.state.title}/>
             <VideosList videos={this.state.videos} action={this.videoHandler}/>




      </div>
    );
  }
}

export default Videos;
