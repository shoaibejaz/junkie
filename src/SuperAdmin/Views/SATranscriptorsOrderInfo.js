import React, { Component } from "react";

import SASideNav from "../Components/SuperAdminSideNav/SideNav";
import SATranscriptorsOrderInfoTable from "../Components/TranscriptorsOrderInfo/transcriptorsOrderInfo";
import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";

class SAAddTranscriptorsProfile extends Component {
  state = {};
  componentDidMount() {
    getSuperAdminID()
      ? console.log("Transcriptor Order Info Page")
      : history.push("/SALogin");
  }
  render() {
    return (
      <React.Fragment>
        <SASideNav />
        <SATranscriptorsOrderInfoTable />
      </React.Fragment>
    );
  }
}

export default SAAddTranscriptorsProfile;
