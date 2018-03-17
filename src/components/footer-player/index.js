import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../shows/shows.css';


class FooterPlayer extends Component {
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }


  render() {
    return (
        <div className="mixcloud-player">
        <ReactPlayer  url='https://www.mixcloud.com/NTSRadio/nosedrip-9th-january-2017/' width='100%'
          height='60px' controls="true"/>
        </div>
    );
  }

}


export default FooterPlayer;
