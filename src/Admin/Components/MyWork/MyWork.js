import React, { Component } from "react";
import { connect } from "react-redux";
import Upload from "../Upload";
import "./myWork.css";

class CompletedWork extends Component {
  state = {
    url: "http",
    flag: true
  };

  // componentWillMount() {
  //   console.log("componentWillMount");
  //   console.log(this.props.AOrder);
  // }
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.state.url);
  }
  render() {
    // console.log(this.props.AOrder._filePath);
    // const filePath = JSON.stringify(this.props.AOrder._filePath);
    if (this.props.AOrder._filePath === undefined) {
      console.log("UNDEFINED");
    } else {
      if (this.state.flag) {
        console.log("ASSIGNING");
        this.setState({ flag: false }, () => {
          console.log(this.props.AOrder);
          this.setState({ url: this.props.AOrder._filePath }, () => {
            console.log("URL");
            console.log(this.props.AOrder._filePath);
            console.log(this.state.url);
            console.log("URL1");
          });
        });
      }
    }
    return (
      <React.Fragment>
        {/* <SideNav /> */}
        <div class="container">
          <h1>My Work</h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-content">
                <div class="card-img">
                  {/* <video autoplay loop controls>
                    <source
                      src={this.props.AOrder._filePath}
                      type="video/mp4"
                    />
                  </video> */}
                  <video
                    // class="video-fluid z-depth-1"
                    // style={{ width: "auto", height: "250px" }}
                    autoplay
                    loop
                    controls
                    // muted
                  >
                    {this.state.url === "http" ? (
                      false
                    ) : (
                      <source
                        // style={{ width: "476px", height: "250px" }}
                        src={this.state.url}
                        type="video/mp4"
                      />
                    )}
                  </video>
                  {/* <span>
                    <a href="#" class="btn-card">
                      Select
                    </a>
                  </span> */}
                </div>
                <div class="card-desc">
                  <div class="row">
                    <div class="col-lg-6">
                      <h6>
                        Turn Around Time:{" "}
                        <span>{this.props.AOrder._trurnAroundTime} hr</span>
                      </h6>
                    </div>
                    <div class="col-lg-6">
                      <h6>
                        Price: <span>${this.props.AOrder._totalCost}</span>
                      </h6>
                    </div>
                    <div class="col-lg-6">
                      <h6>
                        No of speakers:{" "}
                        <span>{this.props.AOrder._noOfSpeaker}</span>
                      </h6>
                    </div>
                    <div class="col-lg-6">
                      <h6>
                        Time Stamp: <span>{this.props.AOrder._timeStamp}</span>
                      </h6>
                    </div>
                  </div>
                  {/* <h6>
                    Language: <span>English</span>
                  </h6>
                  <h6>
                    No of speakers : <span>3</span>
                  </h6>
                  <h6>
                    Verbatim : <span>$60</span>
                  </h6> */}
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas
                    totam
                  </p> */}
                  {/* <div>
                    <a href="#" class="btn-card">
                      Select
                    </a>
                  </div> */}
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
