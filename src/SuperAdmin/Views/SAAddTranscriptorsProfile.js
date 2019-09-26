import React, { Component } from "react";

import SASideNav from "../Components/SuperAdminSideNav/SideNav";
import SAAddTranscriptorsForm from "../Components/AddTranscriptorsProfile/addTranscriptorsForm";
import SATranscriptorsProfileTable from "../Components/AddTranscriptorsProfile/transcriptorsProfileTable";
import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";

class SAAddTranscriptorsProfile extends Component {
  state = {};
  componentDidMount() {
    getSuperAdminID()
      ? console.log("Add Transcriptors Profile page")
      : history.push("/SALogin");
  }
  render() {
    return (
      <React.Fragment>
        <SASideNav />
        <SAAddTranscriptorsForm />
        <SATranscriptorsProfileTable />
      </React.Fragment>
    );
  }
}

export default SAAddTranscriptorsProfile;
