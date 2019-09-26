import React, { Component } from "react";
import history from "../../Router/history";
import VerifyCodePage from "../Component/LoginComponent/VerifyCodePage";
import { connect } from "react-redux";

class VerifyCodeView extends Component {
  state = {};
  componentWillMount() {
    this.props.emailList
      ? console.log("Verify Code Page")
      : history.push("/Error");
  }
  render() {
    console.log(this.props.codeList);
    return (
      <React.Fragment>
        <VerifyCodePage />
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
)(VerifyCodeView);
