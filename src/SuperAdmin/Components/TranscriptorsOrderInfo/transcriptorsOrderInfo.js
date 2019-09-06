import React, { Component } from "react";

import CompletedModal from "./modalCompleted";
import InProcessModal from "./modalInProcess";

import { displayCompletedOrdersAction } from "../../Actions/TranscriptorsActions/DisplayCompletedOrders";
import { displayInProgressOrders } from "../../Actions/TranscriptorsActions/DisplayInProgressOrders";
import SendTranscriptorIDClass from "../../BusinessLogics/ActionLogics/TranscriptorsClassses/TranscriptorID";
import { connect } from "react-redux";

import "./modal.css";

class TranscriptorsOrderInfoTable extends Component {
  state = {};
  render() {
    
    // console.log(this.props.TList);
    return (
      <React.Fragment>
        <div class="" style={{ width: "80%", margin: "auto" }}>
          <div class="row">
            <div class="col-lg-12 col-md-8 col-sm-12">
              <div class="card-content">
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
                    {this.props.TList
                      ? this.props.TList.map(ls => (
                          <tr>
                            <td>{ls.username}</td>
                            <td>{ls.email}</td>
                            <td>
                              <button
                                type="button"
                                class="btn"
                                data-toggle="modal"
                                data-target="#myModalCompleted"
                                onClick={() => {
                                  this.props.displayCompletedOrdersAction(
                                    new SendTranscriptorIDClass(ls.id)
                                  );
                                }}
                              >
                                Completed
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
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
                      : ""}
                  </tbody>
                </table>
                <CompletedModal CList={this.props.completedOrderList} />
                <InProcessModal IList={this.props.inProgressOrdersList} />
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
  inProgressOrdersList: state.TranscriptorsReducer.displayInProgressOrdersList
});

export default connect(
  mapStateToProps,
  { displayCompletedOrdersAction, displayInProgressOrders }
)(TranscriptorsOrderInfoTable);
