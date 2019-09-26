import React, { Component } from "react";

import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import Calculator from "../Component/Calculator/claculator";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class DashboradCalculatorComponent extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/CalculatorPanel") : history.push("/Login");
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default DashboradCalculatorComponent;
