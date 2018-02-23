import React, { Component } from 'react';
import './shows.css';


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
          <iframe id="mixcloud-content" width="100%" height="60" frameborder="0" src={this.props.iframe}>
          </iframe>
        </div>
    );
  }

}


export default FooterPlayer;
