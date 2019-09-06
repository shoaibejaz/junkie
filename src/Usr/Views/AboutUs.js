import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import About from "../Component/AboutUs/about";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class AboutUs extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/About");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
