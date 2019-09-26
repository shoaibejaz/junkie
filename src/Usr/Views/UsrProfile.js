import React, { Component } from "react";

import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import Profile from "../Component/DashboardComponent/Profile/Profile";
import Loader from "../Component/Loader/Loader";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import { displayUserProfileAction } from "../Actions/DashBoardActions/UserProfileAction";
import SendUserIDClass from "../BusinessLogics/ActionLogics/UserIdLogics/SendUserIDClass";
import history from "../../Router/history";
import { connect } from "react-redux";

class UsrProfile extends Component {
  state = {};

  componentDidMount() {
    getUserID() ? console.log("User Profile") : history.push("/Login");
    this.props.displayUserProfileAction(new SendUserIDClass(getUserID()));
  }
  render() {
    console.log(this.props.profileList);
    return (
      <React.Fragment>
        <NavBar />
        {this.props.profileList.email ? (
          <Profile profileList={this.props.profileList} />
        ) : (
          <Loader />
        )}
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
)(UsrProfile);
