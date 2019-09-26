import React, { Component } from "react";
import "./notification.css";
import { Link } from "react-router-dom";

class PaymentCancelPage extends Component {
  state = {
    warningComponent: false
  };
  handleWarningVisibility = () => {
    this.setState({ warningComponent: true });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ paddingTop: "5%" }}>
          <div class="notify errorbox">
            <div class="row">
              <div class="col-lg-12" style={{ float: "left" }}>
                <h1>Warning!</h1>
              </div>
              {/* <div class="col-lg-6" style={{ float: "right" }}>
                <img
                  onClick={() => {
                    this.setState({ warningComponent: false });
                  }}
                  style={{ float: "right", width: "40px", cursor: "pointer" }}
                  src={require("../../../../image/cancelWarning.png")}
                />
              </div> */}
            </div>
            {/* <span class="alerticon"></span> */}
            <div class="col-lg-12">
              <p style={{ marginLeft: "-16px" }}>
                Dear user your order is not placed due to some error in payment.
                Please{" "}
                <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                  {" "}
                  continue
                </Link>{" "}
                to go to your dashboard.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentCancelPage;
