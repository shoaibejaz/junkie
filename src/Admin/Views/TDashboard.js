import React, { Component } from "react";

import SideNav from "../Components/AdminSideNav/SideNav";
import PostedWork from "../Components/PostedWork/PostedWork";

import { displayAllOrdersAction } from "../Actions/OrdersActions/DisplayAllOrder";
import { connect } from "react-redux";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import history from "../../Router/history";
class TDashboard extends Component {
  state = {};
  componentDidMount() {
    this.props.displayAllOrdersAction();
    getTranscriptorID() ? console.log("Dashoard") : history.push("/TLogin");
  }
  render() {
    // console.log(this.props.ordersPoolList)

    return (
      <React.Fragment>
        <SideNav />
        <PostedWork oList={this.props.ordersPoolList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ordersPoolList: state.OrdersReducer.displayAllOrdersPoolList
});

export default connect(
  mapStateToProps,
  { displayAllOrdersAction }
)(TDashboard);
