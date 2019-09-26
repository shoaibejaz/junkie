import React, { Component } from "react";
import "./notification.css";

class Notifications extends Component {
  state = {
    successComponent: false,
    warningComponent: false
  };
  handleSuccessVisibility = () => {
    this.setState({ successComponent: true });
  };
  handleWarningVisibility = () => {
    this.setState({ warningComponent: true });
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
                  transcript. First you complete that project deliver your
                  project and then select the next project.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Notifications;
