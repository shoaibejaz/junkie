import React, { Component } from "react";
import { orderCheckAction } from "../../Actions/OrderActions/OrderCheck";
import { connect } from "react-redux";

class Aboutus extends Component {
  componentDidMount() {
    this.props.orderCheckAction();
  }
  render() {
    return (
      <React.Fragment>
        <div
          class="aboutus-section"
          style={{ marginTop: "30px", marginBottom: "10%" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="aboutus">
                  <center>
                    <label
                      class="aboutus-title"
                      style={{ marginBottom: "5%", fontSize: "50px" }}
                    >
                      About Us
                    </label>
                  </center>
                  <p class="aboutus-text">
                    We are highly experienced team of transcribers that satisfy
                    customers’ needs. We convert the simplest or difficult
                    speech (even live or recorded) files into a electronic text
                    document You name it, we will go the extra mile.
                  </p>
                  <p class="aboutus-text">
                    Transcripts are100% manually produced with short turn-around
                    time based on your needs{" "}
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="aboutus-banner">
                  <img
                    src={require("../../../image//5d4444de6fc94.png")}
                    height="400"
                    width="500"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default connect(
  null,
  { orderCheckAction }
)(Aboutus);
