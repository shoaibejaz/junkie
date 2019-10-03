import React from "react";
import "./Profile.css";

import { connect } from "react-redux";
import { getUserID } from "../../../../LocalStorage/UserIDLocalStorage";

const styles = theme => ({});

class SimpleModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-md-6 img">
              <img
                src={require("../../../../image/profile.jpg")}
                alt=""
                class="img-rounded img-responsive"
                style={{ width: "120px" }}
              />
            </div>
            <div class="col-md-6 details">
              <blockquote>
                <h5>
                  {this.props.profileList ? this.props.profileList.fname : ""}
                  &nbsp;
                  {this.props.profileList ? this.props.profileList.lname : ""}
                </h5>
              </blockquote>
              <p>
                {this.props.profileList ? this.props.profileList.email : ""}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimpleModal;
