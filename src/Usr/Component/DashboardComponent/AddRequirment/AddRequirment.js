import React, { Component } from "react";
import "./RegisterForm.css";
import $ from "jquery";
import ReactHtmlParser from "react-html-parser";

import {
  getOrder,
  deleteOrder
} from "../../../../LocalStorage/OrderLocalStorage";

import { getUserID } from "../../../../LocalStorage/UserIDLocalStorage";
import { makeOrderAction } from "../../../Actions/OrderActions/OrderAction";
import { uploadFileAction } from "../../../Actions/OrderActions/UploadFileAction";
import AfterLoginUploadFileClass from "../../../BusinessLogics/ActionLogics/OrderLogics/AfterLoginUploadFileClass";
import OrderClass from "../../../BusinessLogics/ActionLogics/OrderLogics/OrderClass";
import { connect } from "react-redux";

let context = null;
class AddRequirements extends Component {
  constructor(props) {
    super(props);
    context = this;
    this.state = {
      image: [],
      File: [],
      Duration: getOrder()._fileDuration ? getOrder()._fileDuration : "",
      UserID: getUserID() ? getUserID() : "",
      TurnAroundTime: getOrder()._turnAroundTime
        ? getOrder()._turnAroundTime
        : 24,
      _NumberOFPersons: getOrder()._noOfSpeakers ? getOrder()._noOfSpeakers : 1,
      _TimeStamp: 12,
      FilePath: getOrder()._filePath ? getOrder()._filePath : "",
      FileName: getOrder()._fileName ? getOrder()._fileName : "",
      FileSize: getOrder()._fileSize ? getOrder()._fileSize : "",
      TotalCost: getOrder()._totalCost ? getOrder()._totalCost : "",
      SecondDuration: getOrder()._secondsDuration
        ? getOrder()._secondsDuration
        : "",
      loadingFile: false,
      loadingOrder: false,
      checked_T: false,
      checked_V: false,
      checked_TStatus: getOrder()._timeStamp ? getOrder()._timeStamp : false,
      checked_VStatus: getOrder()._verbitam ? getOrder()._verbitam : false
    };
    this.handleCheckTimeStamping = this.handleCheckTimeStamping.bind(this);
    this.handleCheckVerbatim = this.handleCheckVerbatim.bind(this);
  }
  handleCheckTimeStamping(e) {
    this.setState({
      checked_T: e.target.checked
    });
    this.setState({
      checked_TStatus: !this.state.checked_TStatus
    });
    // const TimeStampingCost = this.state.timeStampingCost;
    // const TotalCost = this.state.totalCost;
    // if (this.state.checked_TStatus === true) {
    //   this.setState({
    //     totalCost: +TotalCost + +TimeStampingCost
    //   });
    // } else if (this.state.checked_TStatus === false) {
    //   this.setState({
    //     totalCost: +TotalCost - +TimeStampingCost
    //   });
    // }
  }
  handleCheckVerbatim(e) {
    this.setState({
      checked_V: e.target.checked
    });
    this.setState({
      checked_VStatus: !this.state.checked_VStatus
    });
    // const VerbitamCost = this.state.verbitamCost;
    // const TotalCost = this.state.totalCost;
    // if (this.state.checked_VStatus === true) {
    //   this.setState({
    //     totalCost: +TotalCost + +VerbitamCost
    //   });
    // } else if (this.state.checked_VStatus === false) {
    //   this.setState({
    //     totalCost: +TotalCost - +VerbitamCost
    //   });
    // }
  }
  componentDidMount = () => {
    var fileInput = document.getElementById("fileInput");
    fileInput.onchange = function() {
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function() {
        var aud = new Audio(reader.result);
        aud.onloadedmetadata = function() {
          context.setState({ Duration: aud.duration });
          if (context.state.Duration) {
            context.handleFileUpload();
          }
        };
      };
      reader.readAsDataURL(file);
    };
  };
  handleFileUpload = () => {
    if (!this.state.loadingFile) {
      this.setState(
        {
          loadingFile: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loadingFile === false);
          this.props.uploadFileAction(
            new AfterLoginUploadFileClass(
              this.state.UserID,
              this.state.Duration
            ),
            this.state.File,
            this
          );
        }
      );
    }
  };
  handleOrderClick = () => {
    if (!this.state.loadingOrder) {
      this.setState(
        {
          loadingOrder: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loadingOrder === false);
          this.props.makeOrderAction(
            new OrderClass(
              this.state.UserID,
              this.props.fileList._fileUrl,
              this.props.fileList._fileName,
              this.state.TurnAroundTime,
              this.state._NumberOFPersons,
              this.state.checked_TStatus,
              this.state.checked_VStatus,
              this.props.fileList._totalCost,
              this.props.fileList._duration,
              this.props.fileList._secondsDuration
            ),
            this
          );
        }
      );
    }
  };
  handleLoginOrderClick = () => {
    if (!this.state.loadingOrder) {
      this.setState(
        {
          loadingOrder: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loadingOrder === false);
          this.props.makeOrderAction(
            new OrderClass(
              this.state.UserID,
              this.state.FilePath,
              this.state.FileName,
              this.state.TurnAroundTime,
              this.state._NumberOFPersons,
              this.state.checked_TStatus,
              this.state.checked_VStatus,
              this.state.TotalCost,
              this.state.Duration,
              this.state.SecondDuration
            ),
            this
          );
        }
      );
    }
  };
  decrement = () => {
    if (this.state._NumberOFPersons > 1) {
      this.setState({ _NumberOFPersons: (this.state._NumberOFPersons -= 1) });
    } else {
      this.setState({ _NumberOFPersons: 1 });
    }
  };
  increment = () => {
    this.setState({ _NumberOFPersons: (this.state._NumberOFPersons += 1) });
  };
  render() {
    const { loadingFile, loadingOrder } = this.state;
    const html = this.props.orderPaymentbutton;
    const Order = getOrder();
    return (
      <div
        class="container"
        style={{
          marginTop: "40px",
          textAlign: "center",
          border: "1px solid #d0d0d0",
          borderRadius: "3px",
          WebkitBoxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          padding: "0% 2% 0% 2%"
        }}
      >
        <h2 class="fs-title">Upload Audio or vedio File</h2>
        <div class="box">
          <input
            type="file"
            accept=".mp3,.mp4,.mp2,.aiff,.aif,.amr,.avi,.caf,.dss,.dvd,.dvf,.m4a,.mov,.msv,.qt,.wav,.arf,.wma,.wmv"
            id="fileInput"
            name="selectedFile"
            disabled={loadingFile || Order ? Order._filePath : ""}
            onChange={e => {
              this.setState({ File: e.target.files });
            }}
            style={{ display: "none" }}
            class="inputfile inputfile-6"
            data-multiple-caption="{count} files selected"
            multiple
          />
          <label
            style={{ cursor: "pointer" }}
            disabled={loadingFile}
            for="fileInput"
          >
            <span />
            <strong>
              {loadingFile && <i class="spinner-border" role="status" />}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="17"
                viewBox="0 0 20 17"
              >
                <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
              </svg>{" "}
              {loadingFile && <span>File is uploading</span>}
              {!loadingFile && <span>Upload File</span>} &hellip;
            </strong>
          </label>
        </div>
        {/* Table */}
        <table class="table table-bordered table-sm">
          <thead class="thead-dark">
            <tr>
              <th>File Name</th>
              <th>File Size</th>
              <th>File Length</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tr>
            <td>
              {Order._fileName ? (
                <img
                  width="20px"
                  onClick={() => {
                    deleteOrder("OrderData");
                    window.location.reload();
                  }}
                  style={{ cursor: "pointer" }}
                  src={require("../../../../image/cancelWarning.png")}
                />
              ) : (
                ""
              )}
              {Order._fileName
                ? Order._fileName
                : this.props.fileList._response === "got"
                ? this.props.fileList._fileName
                : "example.mp4"}
            </td>
            <td>
              {Order._fileSize
                ? Order._fileSize
                : this.props.fileList._response === "got"
                ? this.props.fileList._fileSize
                : "0 B"}
            </td>
            <td>
              {Order._fileDuration
                ? Order._fileDuration
                : this.props.fileList._response === "got"
                ? this.props.fileList._duration
                : "00:00:00"}
            </td>
            <td>
              $
              {Order._totalCost
                ? Order._totalCost
                : this.props.fileList._response === "got"
                ? this.props.fileList._totalCost
                : "0"}
            </td>
          </tr>
          {Order._filePath ? (
            <React.Fragment>
              <tr>
                <td>Turn Around Time</td>
                <td colspan="3">
                  <div class="form-group" style={{ width: "130px" }}>
                    <select
                      class="form-control"
                      onChange={e =>
                        this.setState({ TurnAroundTime: e.target.value })
                      }
                      id="sel1"
                      value={this.state.TurnAroundTime}
                      style={{ width: "30" }}
                    >
                      <option value={24}>24 hour</option>
                      <option value={2}>2 days</option>
                      <option value={3}>3 days</option>
                      <option value={1}>1 week</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Number of Speaker</td>
                <td class="qty mt-5" colSpan="3">
                  <span class="minus bg-dark" onClick={this.decrement}>
                    -
                  </span>
                  <input
                    style={{ height: "30px" }}
                    type="number"
                    class="count input"
                    name="qty"
                    value="1"
                    value={this.state._NumberOFPersons}
                    onChange={e => {
                      this.setState({ _NumberOFPersons: e.target.value });
                    }}
                  />
                  <span class="plus bg-dark" onClick={this.increment}>
                    +
                  </span>
                </td>
              </tr>
              <tr>
                <td>Time Stamp</td>
                <td colSpan="3">
                  <input
                    id="checkbox_id_T"
                    type="checkbox"
                    checked={this.state.checked_TStatus}
                    onChange={this.handleCheckTimeStamping}
                  />
                  <label htmlFor="checkbox_id_T">$0.15/mint</label>
                </td>
              </tr>
              <tr>
                <td>Verbitam</td>
                <td colSpan="3">
                  <input
                    id="checkbox_id_V"
                    type="checkbox"
                    checked={this.state.checked_VStatus}
                    onChange={this.handleCheckVerbatim}
                  />
                  <label htmlFor="checkbox_id_V">$0.15/mint</label>
                </td>
              </tr>
              {/* <tr>
                <td class="table-secondary " colspan="4">
                  <b>Sub Total</b>
                </td>
              </tr> */}
            </React.Fragment>
          ) : this.props.fileList._response === "got" ? (
            <React.Fragment>
              <tr>
                <td>Turn Around Time</td>
                <td colspan="3">
                  <div class="form-group" style={{ width: "130px" }}>
                    <select
                      class="form-control"
                      onChange={e =>
                        this.setState({ TurnAroundTime: e.target.value })
                      }
                      id="sel1"
                      value={this.state.TurnAroundTime}
                      style={{ width: "30" }}
                    >
                      <option value={24}>24 hour</option>
                      <option value={2}>2 days</option>
                      <option value={3}>3 days</option>
                      <option value={1}>1 week</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Number of Speaker</td>
                <td class="qty mt-5" colSpan="3">
                  <span class="minus bg-dark" onClick={this.decrement}>
                    -
                  </span>
                  <input
                    style={{ height: "30px" }}
                    type="number"
                    class="count input"
                    name="qty"
                    value="1"
                    value={this.state._NumberOFPersons}
                    onChange={e => {
                      this.setState({ _NumberOFPersons: e.target.value });
                    }}
                  />
                  <span class="plus bg-dark" onClick={this.increment}>
                    +
                  </span>
                </td>
              </tr>
              <tr>
                <td>Time Stamp</td>
                <td colSpan="3">
                  <input
                    id="checkbox_id_T"
                    type="checkbox"
                    checked={this.state.checked_TStatus}
                    onChange={this.handleCheckTimeStamping}
                  />
                  <label htmlFor="checkbox_id_T">$0.15/mint</label>
                </td>
              </tr>
              <tr>
                <td>Verbitam</td>
                <td colSpan="3">
                  <input
                    id="checkbox_id_V"
                    type="checkbox"
                    checked={this.state.checked_VStatus}
                    onChange={this.handleCheckVerbatim}
                  />
                  <label htmlFor="checkbox_id_V">$0.15/mint</label>
                </td>
              </tr>
              {/* <tr>
                <td class="table-secondary " colspan="4">
                  <b>Sub Total</b>
                </td>
              </tr> */}
            </React.Fragment>
          ) : (
            ""
          )}
        </table>
        {Order._filePath ? (
          html ? (
            ReactHtmlParser(html)
          ) : (
            <button
              disabled={loadingOrder}
              onClick={this.handleLoginOrderClick}
              class="btn"
            >
              {loadingOrder && <i class="spinner-border" role="status" />}
              {!loadingOrder && <span>Submit Order</span>}
            </button>
          )
        ) : this.props.fileList._response === "got" ? (
          html ? (
            ReactHtmlParser(html)
          ) : (
            <button
              disabled={loadingOrder}
              onClick={this.handleOrderClick}
              class="btn"
            >
              {loadingOrder && <i class="spinner-border" role="status" />}
              {!loadingOrder && <span>Submit Order</span>}
            </button>
          )
        ) : (
          ""
        )}
        &nbsp;
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fileList: state.MakeOrderReducer.uploadFileList,
  orderPaymentbutton: state.MakeOrderReducer.makeOrderList
});

export default connect(
  mapStateToProps,
  { makeOrderAction, uploadFileAction }
)(AddRequirements);
