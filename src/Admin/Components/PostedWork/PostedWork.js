import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
// import SideNav from "../AdminSideNav/SideNav";

import { transcriptorAcceptedOrderAction } from "../../Actions/OrdersActions/AcceptedOrderAction";
import AcceptOrderClass from "../../BusinessLogics/ActionLogics/OrderLogics/AcceptOrderLogics";
import { getTranscriptorID } from "../../../LocalStorage/TranscriptorIDLocalStorage";
import { connect } from "react-redux";
// import { getVideoDurationInSeconds } from "get-video-duration";
// import { BaseURL } from "../../Actions/BaseURL";
import Upload from "../Upload";
import "./postedWork.css";

// const { getVideoDurationInSeconds } = require("get-video-duration");
// getVideoDurationInSeconds("http://myvideourl.com/filename.mp4").then(
//   duration => {
//     console.log(duration);
//   }
// );

class PostedWork extends Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.state = {
      OrderID: "",
      TranscriptorID: getTranscriptorID() ? getTranscriptorID() : ""
    };
  }
  addNotification(Data) {
    // console.log(value);
    this.notificationDOMRef.current.addNotification({
      title: Data,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 3000 },
      dismissable: { click: true }
    });
  }
  OnClick = () => {
    this.props.transcriptorAcceptedOrderAction(
      new AcceptOrderClass(this.state.TranscriptorID, this.state.OrderID)
    );
  };
  render() {
    // console.log(this.props.oList);
    return (
      <React.Fragment>
        {/* <SideNav /> */}
        <ReactNotification ref={this.notificationDOMRef} />
        <div class="container">
          {this.props.oList ? <h1>Posted Work</h1> : <h1>No Posted Work</h1>}
          {/* <img src={BaseURL + this.props.oList.filepath} /> */}
          <div class="row">
            {this.props.oList
              ? this.props.oList.map(ls => (
                  <div class="col-lg-6">
                    <div class="card-content" style={{ marginBottom: "50px" }}>
                      <div class="card-img">
                        {/* <img src="https://placeimg.com/380/230/nature" alt="" /> */}
                        {console.log(ls.filepath)}
                        <video
                          // class="video-fluid z-depth-1"
                          // style={{ width: "auto", height: "250px" }}
                          autoplay
                          loop
                          controls
                          // muted
                        >
                          <source
                            // style={{ width: "476px", height: "250px" }}
                            src={ls.filepath}
                            type="video/mp4"
                          />
                        </video>
                        <span>
                          <h4>Turnaround Time: {ls.taroundtime} hr</h4>
                        </span>
                      </div>
                      <div class="card-desc">
                        <div class="row">
                          <div class="col-lg-6">
                            <h6>
                              Language: <span>English</span>
                            </h6>
                          </div>
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
                          <div class="col-lg-6">
                            <h6>
                              Verbatim: <span>$60</span>
                            </h6>
                          </div>
                        </div>
                        {this.props.acceptMessage._response ===
                        "Order Accepted" ? (
                          ""
                        ) : (
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
                        )}
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
