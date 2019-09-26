import React, { Component } from "react";
import "./loader.css";

class Loader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <div class="frame">
          <div class="center">
            <div class="dot-1"></div>
            <div class="dot-2"></div>
            <div class="dot-3"></div>
          </div>
        </div> */}
        {/* <div class="loader text-center">
          <span class="spanLoader"></span>
        </div> */}
        <div id="containerLoader">
          <div id="hourra">
            <div class="cheers"></div>
            <div class="cheers"></div>
            <div class="cheers"></div>
            <div class="cheers"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;
