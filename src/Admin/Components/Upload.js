import React, { Component } from "react";
// import NavBar from "../NavBar/NavBar";
import "./upload.css";
import $ from "jquery";
import { uploadDeliveryAction } from "../Actions/OrdersActions/UploadDelivery";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import SendDeliveryClass from "../BusinessLogics/ActionLogics/OrderLogics/SendDeliveryClass";
import { connect } from "react-redux";
class RegisterForm extends Component {
  state = {
    // OrderID: this.props.AOrder ? this.props.AOrder._orderId : "",
    TranscriptorID: getTranscriptorID() ? getTranscriptorID() : "",
    File: []
  };

  render() {
    console.log(this.props.deliveryMessage);
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <div class="container" style={{ marginTop: "40px" }}>
          {/* <h3 class="fs-subtitle">Tell us something more about you</h3> */}
          <div class="box">
            <input
              type="file"
              name="file-7[]"
              id="file-7"
              onChange={e => this.setState({ File: e.target.files })}
              class="inputfile inputfile-6"
              data-multiple-caption="{count} files selected"
              multiple
            />
            <label for="file-7">
              <span />{" "}
              <strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>{" "}
                Choose a file &hellip;
              </strong>
            </label>
          </div>
          {/* //ProgressBar */}
          <div class="progress">
            <div
              class="progress-bar  active"
              role="progressbar"
              aria-valuenow="455"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            >
              <span class="skill-name">
                <strong>ASD.jpg</strong>
              </span>
            </div>
          </div>
          <br />
          {/* Table */}
          {this.props.deliveryMessage === "Order is delivered" ? (
            <button
              disabled
              class="btn-card"
              style={{ backgroundColor: "#f2f2f2", color: "#292a2c" }}
            >
              Delivered
            </button>
          ) : (
            <button
              href="#"
              onClick={() => {
                this.props.uploadDeliveryAction(
                  new SendDeliveryClass(
                    this.props.AOrder._orderId,
                    this.state.TranscriptorID
                  ),
                  this.state.File
                );
              }}
              class="btn-card"
            >
              Deliver Now
            </button>
          )}
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  deliveryMessage: state.OrdersReducer.uploadDeliveryMessage
});

export default connect(
  mapStateToProps,
  { uploadDeliveryAction }
)(RegisterForm);
