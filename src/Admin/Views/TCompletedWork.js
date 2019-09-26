import React, { Component } from "react";
import SideNav from "../Components/AdminSideNav/SideNav";
import CompletedWork from "../Components/CompletedWork/CompletedWork";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import history from "../../Router/history";

// import { transcriptorCompleteOrderAction } from "../Actions/OrdersActions/CompletedOrderAction";
// import SendTranscriptorIDClass from "../BusinessLogics/ActionLogics/OrderLogics/SendTranscriptorID";
import { connect } from "react-redux";

class TCompletedWork extends Component {
  state = {};
  componentDidMount() {
    getTranscriptorID()
      ? console.log("Completed Work")
      : history.push("/TLogin");
  }
  render() {
    return (
      <React.Fragment>
        <SideNav />
        <CompletedWork />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // completedOrdersList: state.OrdersReducer.transcriptorCompleteOrderList,
  // completedOrdersListlenght: state.OrdersReducer.completedOrderlenght
});

export default connect(
  mapStateToProps,
  null
)(TCompletedWork);
