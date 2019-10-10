import React, { Component } from "react";

import CompletedModal from "./modalCompleted";
import InProcessModal from "./modalInProcess";
import SpinnerLoader from "../../../Usr/Component/Loader/SpinnerLoader";

import { displayCompletedOrdersAction } from "../../Actions/TranscriptorsActions/DisplayCompletedOrders";
import { displayInProgressOrders } from "../../Actions/TranscriptorsActions/DisplayInProgressOrders";
import { DisplayTranscriptorsAction } from "../../Actions/TranscriptorsActions/DisplaytranscriptorsAction";
import SendTranscriptorIDClass from "../../BusinessLogics/ActionLogics/TranscriptorsClassses/TranscriptorID";
import { connect } from "react-redux";
import Loader from "../../../Usr/Component/Loader/Loader";

import "./modal.css";

class TranscriptorsOrderInfoTable extends Component {
  state = {
    loading: false,
    CLoading: false,
    ILoading: false
  };
  componentDidMount() {
    if (!this.state.loading) {
      this.setState(
        {
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loading === false);
          this.props.DisplayTranscriptorsAction(this);
        }
      );
    }
  }
  getCLoadingVlaue = () => {
    return this.state.CLoading;
  };
  getILoadingValue = () => {
    return this.state.ILoading;
  };
  render() {
    console.log(this.props.transcriptorsList);
    return (
      <React.Fragment>
        <div class="" style={{ width: "80%", margin: "auto" }}>
          <div class="row">
            <div class="col-lg-12 col-md-8 col-sm-12">
              <div class="card-content">
                <div style={{ overflowX: "auto" }}>
                  <h1 style={{ textAlign: "center", padding: "3% 0% 3% 0%" }}>
                    Transcripter's Order Detail
                  </h1>
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th>Transcriptor Name</th>
                        <th>Email</th>
                        <th>Completed Projects</th>
                        <th>Projects in Process</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.loading === false ? (
                        this.props.tListLenght > 0 ? (
                          this.props.transcriptorsList.map(ls => (
                            <tr>
                              <td style={{ padding: "30px" }}>{ls.username}</td>
                              <td style={{ padding: "30px" }}>{ls.email}</td>
                              <td style={{ padding: "0px" }}>
                                <button
                                  class="btn"
                                  data-toggle="modal"
                                  data-target="#myModalCompleted"
                                  onClick={() => {
                                    this.props.displayCompletedOrdersAction(
                                      new SendTranscriptorIDClass(ls.id),
                                      this
                                    );
                                  }}
                                >
                                  Completed
                                </button>
                              </td>
                              <td style={{ padding: "0px" }}>
                                <button
                                  class="btn"
                                  data-toggle="modal"
                                  data-target="#myModalInProcess"
                                  onClick={() => {
                                    this.props.displayInProgressOrders(
                                      new SendTranscriptorIDClass(ls.id)
                                    );
                                  }}
                                >
                                  In Process
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4">
                              <h2>
                                No transcriptor is added into the system still
                              </h2>
                            </td>
                          </tr>
                        )
                      ) : (
                        <div class="container">
                          <div style={{ marginLeft: "175%" }}>
                            <SpinnerLoader />
                          </div>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
                <CompletedModal
                  completedOrderList={this.props.completedOrderList}
                  cOrderLength={this.props.cOrderLength}
                  getCLoadingVlaue={this.getCLoadingVlaue}
                />
                <InProcessModal
                  inProgressOrdersList={this.props.inProgressOrdersList}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  completedOrderList: state.TranscriptorsReducer.displayCompletedOrdersList,
  cOrderLength: state.TranscriptorsReducer.completeOrderLength,
  inProgressOrdersList: state.TranscriptorsReducer.displayInProgressOrdersList,
  transcriptorsList: state.TranscriptorsReducer.displayTranscriptorsList,
  tListLenght: state.TranscriptorsReducer.transcriptorsListLength
});

export default connect(
  mapStateToProps,
  {
    displayCompletedOrdersAction,
    displayInProgressOrders,
    DisplayTranscriptorsAction
  }
)(TranscriptorsOrderInfoTable);
