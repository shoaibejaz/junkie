import React, { Component } from "react";
import $ from "jquery";
import filesize from "filesize";

let context = null;
class Calculator extends Component {
  constructor(props) {
    super(props);
    context = this;
    this.state = {
      perMinuteCost: 0.79,
      timeStampingPerMinuteCost: 0.15,
      verbitamPerMinuteCost: 0.15,
      initialCost: 0.0,
      timeStampingCost: 0.0,
      verbitamCost: 0.0,
      totalCost: 0.0,
      fileName: "",
      fileSize: "",
      fileSeconds: "",
      fileDuration: "",
      checked_T: false,
      checked_V: false,
      checked_TStatus: true,
      checked_VStatus: true
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
    const TimeStampingCost = this.state.timeStampingCost;
    const TotalCost = this.state.totalCost;
    if (this.state.checked_TStatus === true) {
      this.setState({
        totalCost: +TotalCost + +TimeStampingCost
      });
    } else if (this.state.checked_TStatus === false) {
      this.setState({
        totalCost: +TotalCost - +TimeStampingCost
      });
    }
  }
  handleCheckVerbatim(e) {
    this.setState({
      checked_V: e.target.checked
    });
    this.setState({
      checked_VStatus: !this.state.checked_VStatus
    });
    const VerbitamCost = this.state.verbitamCost;
    const TotalCost = this.state.totalCost;
    if (this.state.checked_VStatus === true) {
      this.setState({
        totalCost: +TotalCost + +VerbitamCost
      });
    } else if (this.state.checked_VStatus === false) {
      this.setState({
        totalCost: +TotalCost - +VerbitamCost
      });
    }
  }
  componentDidMount = () => {
    function getExt(filename) {
      var ext = filename.split(".").pop();
      if (ext == filename) return "";
      return ext;
    }
    var fileInput = document.getElementById("fileInput");
    fileInput.onchange = function() {
      var file = fileInput.files[0];
      var filename = fileInput.files[0].name;
      var ext = getExt(filename);
      console.log(ext);
      var reader = new FileReader();
      reader.onload = function() {
        var aud = new Audio(reader.result);
        aud.onloadedmetadata = function() {
          // Duration calculation
          var Dur = aud.duration;
          var hours = Math.floor(Dur / 3600);
          var minutes = Math.floor((Dur / 60) % 60);
          var seconds = Math.floor(Dur % 60);
          var Duration = hours + ":" + minutes + ":" + seconds;
          context.setState({ fileDuration: Duration });
          // initial cost calculation
          var perSecondCost = context.state.perMinuteCost / 60;
          var cost = perSecondCost * Dur;
          var Cost = cost.toFixed(2);
          context.setState({ initialCost: Cost });
          context.setState({ totalCost: Cost });
          // Time stamp cost
          var tPerSecondCost = context.state.timeStampingPerMinuteCost / 60;
          var tCost = tPerSecondCost * Dur;
          console.log(Dur);
          var TCost = tCost.toFixed(2);
          context.setState({ timeStampingCost: TCost });
          // Verbitam cost
          var vPerSecondCost = context.state.verbitamPerMinuteCost / 60;
          var vCost = vPerSecondCost * Dur;
          var VCost = vCost.toFixed(2);
          context.setState({ verbitamCost: VCost });
        };
      };
      reader.readAsDataURL(file);
    };
  };
  onChange = e => {
    switch (e.target.name) {
      case "selectedFile":
        if (e.target.files.length > 0) {
          this.setState({ fileName: e.target.files[0].name });
          this.setState({ fileSize: e.target.files[0].size });
        }
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="checkbox"
          disabled={false}
          Id="Selected"
          onClick={() => this.setState({ status: !this.state.status })}
        />
        <div class="row">
          <div class="col-md-12 col-md-offset-3">
            <form id="msform">
              <fieldset>
                <h2 class="fs-title">Upload Audio or vedio File</h2>
                <div class="box">
                  <input
                    type="file"
                    accept=".mp3,.mp4,.mp2,.aiff,.aif,.amr,.avi,.caf,.dss,.dvd,.dvf,.m4a,.mov,.msv,.qt,.wav,.arf,.wma,.wmv"
                    id="fileInput"
                    name="selectedFile"
                    onChange={e => {
                      this.onChange(e);
                      this.setState({ initialCost: 0.0 });
                      this.setState({ timeStampingCost: 0.0 });
                      this.setState({ verbitamCost: 0.0 });
                      this.setState({ totalCost: 0.0 });
                      this.setState({ fileSeconds: "" });
                      this.setState({ fileDuration: "" });
                      this.setState({ checked_T: false });
                      this.setState({ checked_V: false });
                      this.setState({ checked_TStatus: true });
                      this.setState({ checked_VStatus: true });
                    }}
                    style={{ display: "none" }}
                    class="inputfile inputfile-6"
                    data-multiple-caption="{count} files selected"
                    multiple
                  />
                  <label for="fileInput">
                    <span />{" "}
                    <strong style={{ cursor: "pointer" }}>
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
                <br />
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
                      {this.state.fileName
                        ? this.state.fileName
                        : "example.mp4"}
                    </td>
                    <td>{filesize(this.state.fileSize)}</td>
                    <td>
                      {this.state.fileDuration
                        ? this.state.fileDuration
                        : "00:00:00"}
                    </td>
                    <td>${this.state.initialCost}</td>
                  </tr>
                  <tr>
                    <th class="thead-dark">Time stamping</th>
                    <td colSpan="2">
                      <input
                        id="checkbox_id_T"
                        type="checkbox"
                        checked={this.state.checked_T}
                        onChange={this.handleCheckTimeStamping}
                      />
                      <label style={{ zIndex: 1 }} htmlFor="checkbox_id_T">
                        $0.15/mint
                      </label>
                    </td>
                    <td>
                      $
                      {this.state.checked_T === false
                        ? "0"
                        : this.state.timeStampingCost}
                    </td>
                  </tr>
                  <tr>
                    <th class="thead-dark">Verbatim</th>

                    <td colSpan="2">
                      <input
                        id="checkbox_id_V"
                        type="checkbox"
                        checked={this.state.checked_V}
                        onChange={this.handleCheckVerbatim}
                      />
                      <label htmlFor="checkbox_id_V">$0.15/mint</label>
                    </td>
                    <td>
                      $
                      {this.state.checked_V === false
                        ? "0"
                        : this.state.verbitamCost}
                    </td>
                  </tr>
                  <tr>
                    <td class="table-secondary" colSpan="3">
                      <b>Sub Total</b>
                    </td>
                    <td class="table-secondary">
                      <b>
                        ${this.state.totalCost ? this.state.totalCost : "0"}
                      </b>
                    </td>
                  </tr>
                </table>
              </fieldset>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;
