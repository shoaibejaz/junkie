import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import Calculator from "../Component/Calculator/claculator";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class CalculatorView extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/Calculator");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Calculator />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CalculatorView;
