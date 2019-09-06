import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import Testmonials from "../Component/Testimonals/testimonial";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class TestmonialsPage extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/Testmonials");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ height: "600px", marginBottom: "10%" }}>
          <Testmonials />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default TestmonialsPage;
