import React, { Component } from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./QuoteContainer.css";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "s"
    };

    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentWillMount() {
    fetch(
      "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ quote: data.content }, function() {
          // let currentQuote = this.quote[0].content;
          // let parsedForInvertedCommas = currentQuote.replace(/&#039;/g, "'");
          // let parsedForAmpersands = parsedForInvertedCommas.replace(
          //   /&amp;/g,
          //   "&"
          // );
          // return parsedForAmpersands;
        })
      );
  }

  fetchQuote() {
    fetch(
      "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ quote: data.content }, function() {
          // let currentQuote = this.quote[0].content;
          // let parsedForInvertedCommas = currentQuote.replace(/&#039;/g, "'");
          // let parsedForAmpersands = parsedForInvertedCommas.replace(
          //   /&amp;/g,
          //   "&"
          // );
          // return parsedForAmpersands;
        })
      );
  }

  // showNameParser(show) {
  //   let currentShowName = show.name;
  //   let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
  //   let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
  //   return parsedForAmpersands;
  // }

  // showTimeParser(show) {
  //   let startTime = show.start_timestamp;
  //   let endTime = show.end_timestamp;
  //   let parsedStart = startTime
  //     .split(" ")
  //     .splice(1)
  //     .join()
  //     .slice(0, -3);
  //   let parsedEnd = endTime
  //     .split(" ")
  //     .splice(1)
  //     .join()
  //     .slice(0, -3);
  //   return (
  //     <td className="show-time">
  //       {parsedStart} - {parsedEnd}
  //     </td>
  //   );
  // }

  render() {
    return (
      <div className="quote-header-body-container">
        <h1 className="quote-header">quote</h1>
        <div className="quote-container">
          <div className="quote-subcontainer">
            <div className="quote">{this.state.quote}</div>
          </div>
          <button onClick={this.fetchQuote()} />
        </div>
      </div>
    );
  }
}

export default QuoteContainer;
