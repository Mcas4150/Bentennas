import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-solid-svg-icons";

// library.add(faInstagram, faFacebook);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
