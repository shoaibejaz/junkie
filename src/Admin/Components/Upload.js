import React, { Component } from "react";
import "./upload.css";
import $ from "jquery";
import { uploadDeliveryAction } from "../Actions/OrdersActions/UploadDelivery";
import { getTranscriptorID } from "../../LocalStorage/TranscriptorIDLocalStorage";
import SendDeliveryClass from "../BusinessLogics/ActionLogics/OrderLogics/SendDeliveryClass";
import { connect } from "react-redux";
class RegisterForm extends Component {
  state = {
    TranscriptorID: getTranscriptorID() ? getTranscriptorID() : "",
    File: [],
    loading: false,
    success: false
  };

  render() {
    return (
      <React.Fragment>
        <div class="container" style={{ marginTop: "40px" }}>
          <div class="box">
            <input
              type="file"
              name="file-7[]"
              id="file-7"
              accept=".doc,.docx"
              onChange={e => this.setState({ File: e.target.files })}
              class="inputfile inputfile-6"
              data-multiple-caption="{count} files selected"
              multiple
            />
          </div>
          <br />
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
              disabled={this.state.loading}
              onClick={() => {
                if (!this.state.loading) {
                  this.setState(
                    {
                      success: false,
                      loading: true
                    },
                    () => {
                      this.timer = setTimeout(() => {
                        this.setState({
                          success: true
                        });
                      }, this.state.loading === false);
                      this.props.uploadDeliveryAction(
                        new SendDeliveryClass(
                          this.props.AOrder._orderId,
                          this.state.TranscriptorID
                        ),
                        this.state.File,
                        this
                      );
                    }
                  );
                }
              }}
              class="btn-card"
            >
              {this.state.loading && <i class="spinner-border" role="status" />}
              {this.state.loading && <span>Delivering</span>}
              {!this.state.loading && <span>Deliver now</span>}
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
