import React, { Component } from "react";

import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import Profile from "../Component/DashboardComponent/Profile/Profile";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class UsrProfile extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? console.log("User Profile") : history.push("/Login");
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Profile />
      </React.Fragment>
    );
  }
}

export default UsrProfile;
