import React, { Component } from "react";
import { connect } from "react-redux";
import Upload from "../Upload";
import "./myWork.css";

class CompletedWork extends Component {
  state = {
    url: "http",
    flag: true
  };
  render() {
    if (
      this.props.AOrder._filePath === undefined ||
      this.props.AOrder._filePath === null
    ) {
      // console.log("File Path is not defined");
    } else {
      if (this.state.flag) {
        // console.log("We have a file path");
        if (this.props.AOrder._filePath) {
          this.setState({ url: this.props.AOrder._filePath }, () => {
            this.setState({ flag: false });
            // console.log("URL");
            // console.log(this.props.AOrder._filePath);
            // console.log(this.state.url);
            // console.log("URL1");
          });
        }
      }
    }
    return (
      <React.Fragment>
        <div>
          <div class="card-content">
            <div class="card-img">
              <video autoplay loop controls style={{ height: "300px" }}>
                {this.state.url === "http" ? (
                  false
                ) : (
                  <source src={this.state.url} type="video/mp4" />
                )}
              </video>
            </div>
            <div class="card-desc">
              <div class="row">
                <div class="col-lg-12">
                  <h6>
                    Turn Around Time:&nbsp;&nbsp;
                    <span>
                      {this.props.AOrder._trurnAroundTime === "24"
                        ? this.props.AOrder._trurnAroundTime + " hours"
                        : ""}
                      {this.props.AOrder._trurnAroundTime === "2"
                        ? this.props.AOrder._trurnAroundTime + " days"
                        : ""}
                      {this.props.AOrder._trurnAroundTime === "3"
                        ? this.props.AOrder._trurnAroundTime + " days"
                        : ""}
                      {this.props.AOrder._trurnAroundTime === "1"
                        ? this.props.AOrder._trurnAroundTime + " week"
                        : ""}
                    </span>
                  </h6>
                </div>
                <div class="col-lg-12">
                  <h6>
                    Price:&nbsp;&nbsp;
                    <span>${this.props.AOrder._totalCost}</span>
                  </h6>
                </div>
                <div class="col-lg-12">
                  <h6>
                    No of speakers:&nbsp;&nbsp;
                    <span>{this.props.AOrder._noOfSpeaker}</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  acceptedOrders: state.OrdersReducer.displayAcceptedOrderList
});

export default connect(
  mapStateToProps,
  null
)(CompletedWork);
// export default CompletedWork;
