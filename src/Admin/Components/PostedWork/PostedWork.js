import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import { transcriptorAcceptedOrderAction } from "../../Actions/OrdersActions/AcceptedOrderAction";
import AcceptOrderClass from "../../BusinessLogics/ActionLogics/OrderLogics/AcceptOrderLogics";
import { getTranscriptorID } from "../../../LocalStorage/TranscriptorIDLocalStorage";
import { connect } from "react-redux";
import Upload from "../Upload";
import "./postedWork.css";

class PostedWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderID: "",
      TranscriptorID: getTranscriptorID() ? getTranscriptorID() : "",
      successComponent: false,
      warningComponent: false
    };
  }
  handleSuccessVisibility = () => {
    this.setState({ successComponent: true });
  };
  handleWarningVisibility = () => {
    this.setState({ warningComponent: true });
  };
  OnClick = () => {
    this.props.transcriptorAcceptedOrderAction(
      new AcceptOrderClass(this.state.TranscriptorID, this.state.OrderID)
    );
  };
  render() {
    return (
      <React.Fragment>
        <div id="w">
          {this.state.successComponent === true ? (
            <div class="notify successbox">
              <div class="row">
                <div class="col-lg-6" style={{ float: "left" }}>
                  <h1>Success!</h1>
                </div>
                <div class="col-lg-6" style={{ float: "right" }}>
                  <img
                    onClick={() => {
                      this.setState({ successComponent: false });
                    }}
                    style={{ float: "right", width: "40px", cursor: "pointer" }}
                    src={require("../../../image/cancelSuccess.png")}
                  />
                </div>
              </div>
              {/* <span class="alerticon"></span> */}
              <div class="col-lg-12">
                <p style={{ marginLeft: "-16px" }}>
                  Dear transcriptor you have successfully selected a project to
                  transcript.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.warningComponent === true ? (
            <div class="notify errorbox">
              <div class="row">
                <div class="col-lg-6" style={{ float: "left" }}>
                  <h1>Warning!</h1>
                </div>
                <div class="col-lg-6" style={{ float: "right" }}>
                  <img
                    onClick={() => {
                      this.setState({ warningComponent: false });
                    }}
                    style={{ float: "right", width: "40px", cursor: "pointer" }}
                    src={require("../../../image/cancelWarning.png")}
                  />
                </div>
              </div>
              {/* <span class="alerticon"></span> */}
              <div class="col-lg-12">
                <p style={{ marginLeft: "-16px" }}>
                  Dear transcriptor you have already selected a project to
                  transcript. First you have to complete that project, deliver
                  your project and then select the next project.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div class="container">
          {this.props.orderListLength > 0 ? (
            <h1>Posted Work</h1>
          ) : (
            <h1>No Posted Work</h1>
          )}
          {/* <img src={BaseURL + this.props.oList.filepath} /> */}
          <div class="row">
            {this.props.oList
              ? this.props.oList.map(ls => (
                  <div class="col-lg-6">
                    <div class="card-content" style={{ marginBottom: "50px" }}>
                      <div class="card-img">
                        <video
                          // class="video-fluid z-depth-1"
                          // style={{ width: "auto", height: "250px" }}
                          autoplay
                          loop
                          controls
                          style={{ height: "300px" }}
                          // muted
                        >
                          <source
                            // style={{ width: "476px", height: "250px" }}
                            src={ls.filepath}
                            type="video/mp4"
                          />
                        </video>
                        <span>
                          <h4>
                            Turnaround Time:
                            {ls.taroundtime === "24"
                              ? ls.taroundtime + " hours"
                              : ""}
                            {ls.taroundtime === "2"
                              ? ls.taroundtime + " days"
                              : ""}
                            {ls.taroundtime === "3"
                              ? ls.taroundtime + " days"
                              : ""}
                            {ls.taroundtime === "1"
                              ? ls.taroundtime + " week"
                              : ""}
                          </h4>
                        </span>
                      </div>
                      <div class="card-desc">
                        <div class="row">
                          {/* <div class="col-lg-6">
                            <h6>
                              Language: <span>English</span>
                            </h6>
                          </div> */}
                          <div class="col-lg-6">
                            <h6>
                              Price: <span>${ls.totlcost}</span>
                            </h6>
                          </div>
                          <div class="col-lg-6">
                            <h6>
                              No of speakers: <span>{ls.noofspeaker}</span>
                            </h6>
                          </div>
                          {/* <div class="col-lg-6">
                            <h6>
                              Verbatim: <span>$60</span>
                            </h6>
                          </div> */}
                        </div>

                        <a
                          href="#"
                          onClick={() => {
                            this.props.transcriptorAcceptedOrderAction(
                              new AcceptOrderClass(
                                getTranscriptorID(),
                                ls.orderid
                              ),
                              this
                            );
                          }}
                          class="btn-card"
                        >
                          Select
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
            <div />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  acceptList: state.OrdersReducer.transcriptorAcceptedOrderList,
  acceptMessage: state.OrdersReducer.acceptOrderList
});

export default connect(
  mapStateToProps,
  { transcriptorAcceptedOrderAction }
)(PostedWork);
