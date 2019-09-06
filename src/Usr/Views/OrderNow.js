import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import RegisterForm from "../Component/OrderNowComponent/RegisterForm/RegisterForm";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class OrderNow extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/OrderNow");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ height: "600px", marginBottom: "10%" }}>
          <RegisterForm />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default OrderNow;
