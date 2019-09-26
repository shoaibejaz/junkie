import React, { Component } from "react";
import "./Secure.css";

class Secure extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div class="owl-carousel owl-theme">
            <div class="item">
              <img
                src={require("../../../../image/philipp-katzenberger-1313574-unsplash.jpg")}
                alt="images not found"
              />
              <div class="cover">
                <div class="container">
                  <div class="header-content">
                    <div class="line" />

                    <h1>Secure and Confidential</h1>
                    <h4>
                      Our website uses the industry’s best security (encryption)
                      to keep your content secure. All employees sign a
                      non-disclosure agreement (NDA) that protects your
                      information privacy.{" "}
                    </h4>
                    <button
                      class="col btn btn-lg btn-dark-blue"
                      style={{ width: "200px", alignItems: "center" }}
                    >
                      <b>Learn More</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
export default Secure;
