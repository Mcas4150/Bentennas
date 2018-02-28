import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "./videos.css";
import "../shows/shows.css";
import '../../globalstyle.css';



const VideoContainer = (props) =>
  <div className="video-container">
     <div className="description">
      {props.title}
      {props.description}

    </div>
    <div className="video-player">
      <ReactPlayer url={props.videoUrl}  width='100%'
          height='100%' playing controls="true"/>
    {/*  <div className="video-controls">
      </div>*/}

    </div>

  </div>



const VideosList = (props) =>
   <div className="video-grid">
          {props.videos.map(function(video) {
            return (
              <div className="show">
                <div className="video-image">
                  <a href="" key={video.id.videoID} >
                      <img src={video.snippet.thumbnails.high.url}/>
                  </a>
                </div>
                  <div className="showname">
                  {video.snippet.title}
                  {video.snippet.publishedAt})
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
      videoID:'',
      title: "Sun Ra and his Arkestra",
      thumbnail: '',
      description: 'Space is the Place',
      date: "",
      url: '',
      videos: [],
      videoURL: "https://www.youtube.com/watch?v=sl3VFDf1JhA",
      limit: 40,
    };
  }



   componentDidMount() {
    const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCmqKuYoZCI7D6FQzDv5nKNw&maxResults=25&key=AIzaSyBQ8FSEJZuoR2AFyoXJ1EyFCspH89Ckxws`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        term: '',
        videos: data.items,
       }))
      .catch(e => console.log('error', e));
  }





  render() {
    return (
      <div className="middle">
          <VideoContainer videoUrl={this.state.videoURL} description={this.state.description} title={this.state.title}/>
{/*          <VideoContainer/>*/}
          <VideosList videos={this.state.videos}/>
      </div>
    );
  }
}

export default Videos;
