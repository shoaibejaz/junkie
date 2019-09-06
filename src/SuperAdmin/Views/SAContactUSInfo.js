import React, { Component } from "react";

import ContactUsInfo from "../Components/ContactUsInfo/contactUsInfo";
import SASideNav from "../Components/SuperAdminSideNav/SideNav";

import { DisplayContactUsInfoAction } from "../Actions/ContactUsinfoActions/DisplayContactUsInfoAction";
import { connect } from "react-redux";
import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";

class SAContactUsInfo extends Component {
  state = {};
  componentDidMount() {
    this.props.DisplayContactUsInfoAction();
    getSuperAdminID()
      ? console.log("Contact Us Info Page")
      : history.push("/SALogin");
  }
  render() {
    console.log(this.props.ContactInfoList);
    return (
      <React.Fragment>
        <SASideNav />
        <ContactUsInfo CList={this.props.ContactInfoList} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ContactInfoList: state.DisplayContactUsInfoReducer.displayContactUsInfoList
});

export default connect(
  mapStateToProps,
  { DisplayContactUsInfoAction }
)(SAContactUsInfo);
