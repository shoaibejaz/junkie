import React, { Component } from "react";

import Header from "../Component/MainPageComponent/Header/header";
import Footer from "../Component/MainPageComponent/Footer/footer";
import ContactUs from "../Component/ContactUS/contactUs";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";
class ContactPage extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/ContactUs");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <ContactUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactPage;
