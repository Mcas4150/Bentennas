import React, { Component } from 'react';
import "./videos.css";
import "../shows/shows.css";
import '../../globalstyle.css';



const VideosList = ({ videos }) =>
   <div className="video-grid">
          {videos.map(function(video) {
            return (
              <div className="show">
                <div className="image" id="image">
                  <a href="" >
                      <img src={video.snippet.thumbnails.high.url}/>
                  </a>
                </div>
                  <div className="showname">
                  {video.snippet.title}
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
      title: "",
      thumbnail: '',
      description: '',
      url: '',
      videos: [],
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
          <VideosList videos={this.state.videos}/>
      </div>
    );
  }
}

export default Videos;
