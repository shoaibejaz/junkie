import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import FAQComponent from "../Component/FAQs/faq";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class FAQPage extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/FAQ");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <FAQComponent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default FAQPage;
