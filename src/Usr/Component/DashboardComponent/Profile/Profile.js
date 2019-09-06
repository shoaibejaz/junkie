import React from "react";
import "./Profile.css";

import { displayUserProfileAction } from "../../../Actions/DashBoardActions/UserProfileAction";
import SendUserIDClass from "../../../BusinessLogics/ActionLogics/UserIdLogics/SendUserIDClass";
import { connect } from "react-redux";
import { getUserID } from "../../../../LocalStorage/UserIDLocalStorage";

const styles = theme => ({});

class SimpleModal extends React.Component {
  componentDidMount() {
    this.props.displayUserProfileAction(new SendUserIDClass(getUserID()));
  }
  render() {
    const { classes } = this.props;

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
                {/* <small>
                  <cite title="Source Title">
                    Chicago, United States of America{" "}
                    <i class="icon-map-marker" />
                  </cite>
                </small> */}
              </blockquote>
              <p>
                {this.props.profileList ? this.props.profileList.email : ""}
                {/* <br />
                www.bootsnipp.com <br />
                June 18, 1990 */}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profileList: state.UserDashboardReducer.displayUserProfileList
});

export default connect(
  mapStateToProps,
  { displayUserProfileAction }
)(SimpleModal);
