import React, { Component } from "react";
import ForgetPasswordPgae from "../Component/LoginComponent/ForgotPassword";
import { connect } from "react-redux";
import history from "../../Router/history";

class ForgetPassword extends Component {
  state = {};
  componentWillMount() {
    this.props.codeList[0] === "Not Found" || this.props.codeList === undefined
      ? history.push("/Error")
      : console.log("Forget Password Page");
  }
  render() {
    return (
      <React.Fragment>
        <ForgetPasswordPgae />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  codeList: state.ResetPasswordReducer.sendCodeList
});

export default connect(
  mapStateToProps,
  null
)(ForgetPassword);
