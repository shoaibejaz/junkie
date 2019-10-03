import React, { Component } from "react";

import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import Success from "../Component/DashboardComponent/AddRequirment/Success";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
import { deleteOrder } from "../../LocalStorage/OrderLocalStorage";
class PaymentSuccess extends Component {
  state = {};
  componentDidMount() {
    this.props.match
      ? console.log("Payment Success Page")
      : history.push("/Error");
  }
  render() {
    return (
      <React.Fragment>
        {this.props.match ? deleteOrder("OrderData") : ""}
        <Success match={this.props.match} />
      </React.Fragment>
    );
  }
}

export default PaymentSuccess;
