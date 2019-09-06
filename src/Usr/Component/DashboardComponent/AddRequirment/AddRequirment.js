import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./RegisterForm.css";
import $ from "jquery";

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
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      image: [],
      File: [],
      Duration: "",
      UserID: getUserID() ? getUserID() : "",
      PerMinuteCost: 5,
      TurnAroundTime: "",
      NoOfSpeakers: 2,
      TimeStamp: "",
      TotalCost: 100,
      Status: "Status"
    };
  }
  state = {};
  componentDidMount = () => {
    var fileInput = document.getElementById("fileInput");
    var sp = document.getElementById("sp");
    fileInput.onchange = function() {
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function() {
        var aud = new Audio(reader.result);
        aud.onloadedmetadata = function() {
          sp.innerHTML = aud.duration;
          context.setState({ Duration: aud.duration });
        };
      };
      reader.readAsDataURL(file);
    };
    $(document).ready(function() {
      $(".count").prop("disabled", true);
      $(document).on("click", ".plus", function() {
        $(".count").val(parseInt($(".count").val()) + 1);
      });
      $(document).on("click", ".minus", function() {
        $(".count").val(parseInt($(".count").val()) - 1);
        if ($(".count").val() == 0) {
          $(".count").val(1);
        }
      });
    });
  };
  handleSubmit = () => {
    this.props.uploadFileAction(
      new AfterLoginUploadFileClass(this.state.UserID, this.state.Duration),
      this.state.File
    );
  };
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <div class="container" style={{ marginTop: "40px" }}>
          <h2 class="fs-title">Upload Photo or vedio File(s)</h2>
          {/* <h3 class="fs-subtitle">Tell us something more about you</h3> */}
          <div class="box">
            <input
              type="file"
              name="file-7[]"
              id="fileInput"
              onChange={e => this.setState({ File: e.target.files })}
              // onChange={e => this.setState({ File: e.target.files })}
              class="inputfile inputfile-6"
              data-multiple-caption="{count} files selected"
              multiple
            />
            <span style={{ display: "none" }} id="sp"></span>
            <h5 style={{ display: "none" }}>
              Duration: {this.state.Duration ? this.handleSubmit() : ""}
            </h5>
            <label for="file-7">
              <span />
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
              style={{ width: "100%" }}
            >
              <span class="skill-name">
                <strong>ASD.jpg</strong>
              </span>
            </div>
          </div>
          <br />
          {/* Table */}
          <table class="table table-bordered table-sm">
            <thead class="thead-dark">
              <tr>
                <th>File Name</th>
                <th>File Size</th>
                <th>File Length (in Minutes)</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tr>
              <td>ASD.mp4</td>
              <td>3000kb</td>
              <td>0:40</td>
              <td>$29</td>
            </tr>
            <tr>
              <td class="table-secondary " colspan="4">
                <b>Sub Total</b>
              </td>
            </tr>
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
                    style={{ width: "30" }}
                  >
                    <option>12 hour</option>
                    <option>24 hour</option>
                    <option>2 days</option>
                    <option>3 days</option>
                  </select>
                </div>
              </td>
              {/*<td>0:40</td>
									<td>$29</td> */}
            </tr>
            <tr>
              <td>Number of Speaker</td>
              <td>
                <td class="qty mt-5">
                  <span class="minus bg-dark">-</span>
                  <input
                    style={{ height: "30px" }}
                    type="number"
                    class="count input"
                    name="qty"
                    value="1"
                    onChange={e => {
                      this.setState({ NoOfSpeakers: e.target.value });
                    }}
                  />
                  <span class="plus bg-dark">+</span>
                </td>
              </td>
            </tr>
            <tr>
              <td>Time Stamp</td>
              <td colspan="3">
                <div class="form-group">
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={e => this.setState({ TimeStamp: e.target.value })}
                    style={{ width: "130px" }}
                  >
                    <option>12</option>
                    <option>24</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </td>
            </tr>
          </table>
          <button
            type="button"
            onClick={() => {
              this.props.makeOrderAction(
                new OrderClass(
                  this.state.UserID,
                  this.state.PerMinuteCost,
                  this.state.TurnAroundTime,
                  this.state.NoOfSpeakers,
                  this.state.TimeStamp,
                  this.state.TotalCost,
                  this.state.Status
                ),
                this.state.File
              );
            }}
            class="btn btn-warning btn-filter"
          >
            Submit Order
          </button>
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  fileList: state.MakeOrderReducer.uploadFileList
});

export default connect(
  mapStateToProps,
  { makeOrderAction, uploadFileAction }
)(AddRequirements);
