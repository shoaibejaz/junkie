import React, { Component } from "react";

import { DisplayTranscriptorsAction } from "../Actions/TranscriptorsActions/DisplaytranscriptorsAction";
import { connect } from "react-redux";

import SASideNav from "../Components/SuperAdminSideNav/SideNav";
import SAAddTranscriptorsForm from "../Components/AddTranscriptorsProfile/addTranscriptorsForm";
import SATranscriptorsProfileTable from "../Components/AddTranscriptorsProfile/transcriptorsProfileTable";
import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";

class SAAddTranscriptorsProfile extends Component {
  state = {};
  componentDidMount() {
    this.props.DisplayTranscriptorsAction();
    getSuperAdminID()
      ? console.log("Add Transcriptors Profile page")
      : history.push("/SALogin");
  }
  render() {
    // console.log(this.props.TranscriptorsList);
    return (
      <React.Fragment>
        <SASideNav />
        <SAAddTranscriptorsForm />
        <SATranscriptorsProfileTable TList={this.props.TranscriptorsList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  TranscriptorsList: state.TranscriptorsReducer.displayTranscriptorsList
});

export default connect(
  mapStateToProps,
  { DisplayTranscriptorsAction }
)(SAAddTranscriptorsProfile);
