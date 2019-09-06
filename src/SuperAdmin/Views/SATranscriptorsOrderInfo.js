import React, { Component } from "react";

import SASideNav from "../Components/SuperAdminSideNav/SideNav";
import SATranscriptorsOrderInfoTable from "../Components/TranscriptorsOrderInfo/transcriptorsOrderInfo";
import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";
import { DisplayTranscriptorsAction } from "../Actions/TranscriptorsActions/DisplaytranscriptorsAction";
import { connect } from "react-redux";

class SAAddTranscriptorsProfile extends Component {
  state = {};
  componentDidMount() {
    this.props.DisplayTranscriptorsAction();
    getSuperAdminID()
      ? console.log("Transcriptor Order Info Page")
      : history.push("/SALogin");
  }
  render() {
    // console.log("Views");
    // console.log(this.props.transcriptorsList);
    return (
      <React.Fragment>
        <SASideNav />
        <SATranscriptorsOrderInfoTable TList={this.props.transcriptorsList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  transcriptorsList: state.TranscriptorsReducer.displayTranscriptorsList
});

export default connect(
  mapStateToProps,
  { DisplayTranscriptorsAction }
)(SAAddTranscriptorsProfile);
