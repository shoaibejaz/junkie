import React, { Component } from "react";

import ContactUsInfo from "../Components/ContactUsInfo/contactUsInfo";
import SASideNav from "../Components/SuperAdminSideNav/SideNav";
import Loader from "../../Usr/Component/Loader/Loader";

import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";

class SAContactUsInfo extends Component {
  state = {};
  componentDidMount() {
    getSuperAdminID()
      ? console.log("Contact Us Info Page")
      : history.push("/SALogin");
  }
  render() {
    console.log(this.props.ContactInfoList);
    return (
      <React.Fragment>
        <SASideNav />
        <ContactUsInfo />
      </React.Fragment>
    );
  }
}

export default SAContactUsInfo;
