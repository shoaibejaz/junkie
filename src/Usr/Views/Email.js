import React, { Component } from "react";
import EmailPage from "../Component/LoginComponent/EmailPage";
import { connect } from "react-redux";

class EmailView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <EmailPage />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  emailList: state.ResetPasswordReducer.sendEmailList
});

export default connect(
  mapStateToProps,
  null
)(EmailView);
