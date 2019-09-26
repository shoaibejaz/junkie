import React, { Component } from "react";

import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import Cancel from "../Component/DashboardComponent/AddRequirment/Cancel";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class PaymentCancel extends Component {
  state = {};
  //   componentDidMount() {
  //     getUserID() ? console.log("User Profile") : history.push("/Login");
  //   }
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <Cancel />
      </React.Fragment>
    );
  }
}

export default PaymentCancel;
