import React, { Component } from "react";

import SideNav from "../Components/AdminSideNav/SideNav";
import MyWork from "../Components/MyWork/MyWork";
import Upload from "../Components/Upload";
import Editor from "../Components/MyWork/Editor";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import { displayAcceptedOrderAction } from "../Actions/OrdersActions/AcceptedOrderAction";
import SendTranscriptorIDClass from "../BusinessLogics/ActionLogics/OrderLogics/SendTranscriptorID";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../Router/history";

class TMyWork extends Component {
  state = {};

  componentDidMount() {
    getTranscriptorID() ? console.log("MyWork") : history.push("/TLogin");
    this.props.displayAcceptedOrderAction(
      new SendTranscriptorIDClass(getTranscriptorID())
    );
  }
  render() {
   
    return (
      <React.Fragment>
        <SideNav />
        {this.props.acceptedOrders ? (
          <div>
            <MyWork AOrder={this.props.acceptedOrders} />
            <Editor />
            <div class="container">
              <h1>Upload Your Delivery</h1>
              <div class="row">
                <div class="col-lg-12">
                  <div class="card-content">
                    <div class="card-desc">
                      <Upload AOrder={this.props.acceptedOrders} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="container">
            <h1>You have no order to transcript</h1>
            <div class="row">
              <div class="col-lg-12">
                <Link to="/TDashboard">
                  <button style={{ textAlign: "center" }} class="btn-card">
                    Select Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  acceptedOrders: state.OrdersReducer.displayAcceptedOrderList
});

export default connect(
  mapStateToProps,
  { displayAcceptedOrderAction }
)(TMyWork);
