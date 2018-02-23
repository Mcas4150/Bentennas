import React, { Component } from 'react';
import './App.css';


class Paginate extends Component {
    constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const limit = e.target.value;
    this.props.onChange(limit);
  }


  render(){
    return (


          <select onChange={this.handleChange}>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>




    );
  }
}

export default Paginate;
