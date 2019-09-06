import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import Body from "../Component/MainPageComponent/TopPicture/TopPicture";
import Process from "../Component/MainPageComponent/Process/Process";
import Secure from "../Component/MainPageComponent/SecureAndConfidential/Secure";
import FileFormate from "../Component/MainPageComponent/FileFormate/FileFormate";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class LandingPage extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <FileFormate />
        <Process />
        <Secure />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LandingPage;
