import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import SignUp from "../Component/SignUp/signUp";
import Footer from "../Component/MainPageComponent/Footer/footer";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";

class SignUpForm extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/SignUp");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <center>
          <SignUp />
        </center>
        <Footer />
      </React.Fragment>
    );
  }
}
export default SignUpForm;
