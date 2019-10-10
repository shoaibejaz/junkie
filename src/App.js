import React, { Component } from "react";

import Router from "./Router/router";
import Loader from "./Usr/Component/Loader/Loader";
import AudioPlayer from "./Admin/Components/AudioPlayer/AudioPlayer";

class TranscriptionJunkie extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
export default TranscriptionJunkie;
