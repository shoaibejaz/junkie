import React, { Component } from "react";

import Loader from "../../Usr/Component/Loader/Loader";
import CountDown from "../Components/MyWork/CountDown";
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
  state = {
    loading: false
  };

  componentDidMount() {
    getTranscriptorID() ? console.log("MyWork") : history.push("/TLogin");
    if (!this.state.loading) {
      this.setState(
        {
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loading === false);
          this.props.displayAcceptedOrderAction(
            new SendTranscriptorIDClass(getTranscriptorID()),
            this
          );
        }
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <SideNav />
        {/* {this.props.acceptedOrders._orderId ? ( */}
        {// this.state.loading === false ? (
        this.props.acceptedOrders ? (
          <div>
            <div style={{ padding: "7% 10% 0% 10%" }}>
              {/* <h1>Start Transcription</h1> */}
              <div class="row">
                <div class="col-lg-12">
                  <CountDown acceptedOrders={this.props.acceptedOrders} />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <MyWork AOrder={this.props.acceptedOrders} />
                </div>
                <div class="col-lg-8">
                  <Editor />
                </div>
              </div>
            </div>
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
        )
        // ) : (
        //   <Loader></Loader>
        // )
        }
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  acceptedOrders: state.OrdersReducer.displayAcceptedOrderList,
  acceptOrderMessage: state.OrdersReducer.acceptedOrderMessage
});

export default connect(
  mapStateToProps,
  { displayAcceptedOrderAction }
)(TMyWork);
