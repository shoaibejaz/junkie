import React, { Component } from "react";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
import { connect } from "react-redux";

import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import AllOrders from "../Component/DashboardComponent/Order/Order";
class FAQPage extends Component {
  state = {};
  componentDidMount() {
    // getUserID()?console.log("Dashboard"):
    getUserID() ? history.push("/Dashboard") : history.push("/Login");
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AllOrders />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null
)(FAQPage);
