import React, { Component } from "react";

import TranscriptorLogin from "../Components/LoginForm/Login";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import history from "../../Router/history";

class TDashboard extends Component {
  state = {};
  componentDidMount() {
    getTranscriptorID() ? history.push("/TDashboard")  :  history.push("/TLogin");
  }
  render() {
    console.log(getTranscriptorID());
    return (
      <React.Fragment>
        <TranscriptorLogin />
      </React.Fragment>
    );
  }
}

export default TDashboard;
