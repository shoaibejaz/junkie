import React, { Component } from "react";

import SideNav from "../Components/AdminSideNav/SideNav";
import PostedWork from "../Components/PostedWork/PostedWork";
import Notification from "../Components/Notification/Notification";
import Loader from "../../Usr/Component/Loader/Loader";

import { displayAllOrdersAction } from "../Actions/OrdersActions/DisplayAllOrder";
import { connect } from "react-redux";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import { displayAcceptedOrderAction } from "../Actions/OrdersActions/AcceptedOrderAction";
import SendTranscriptorIDClass from "../BusinessLogics/ActionLogics/OrderLogics/SendTranscriptorID";
import history from "../../Router/history";
class TDashboard extends Component {
  state = {};
  componentDidMount() {
    this.props.displayAllOrdersAction();
    getTranscriptorID() ? console.log("Dashoard") : history.push("/TLogin");
    this.props.displayAcceptedOrderAction(
      new SendTranscriptorIDClass(getTranscriptorID())
    );
  }
  render() {
    console.log(this.props.ordersPoolList);

    return (
      <React.Fragment>
        <SideNav />
        {/* <Notification /> */}
        {/* {this.props.orderListLength > 0 ? ( */}
        <PostedWork
          oList={this.props.ordersPoolList}
          AOrder={this.props.acceptedOrders}
          orderListLength={this.props.orderListLength}
        />
        {/* ) : (
          <Loader />
        )} */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ordersPoolList: state.OrdersReducer.displayAllOrdersPoolList,
  orderListLength: state.OrdersReducer.allOrdersLength,
  acceptedOrders: state.OrdersReducer.displayAcceptedOrderList
});

export default connect(
  mapStateToProps,
  { displayAllOrdersAction, displayAcceptedOrderAction }
)(TDashboard);
