import React, { Component } from "react";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
import Login from "../Component/LoginComponent/Login";
import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";

class LoginView extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/Login");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Login />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LoginView;
