import React, { Component } from "react";

import history from "../../../Router/history";
import { sendEmailAction } from "../../Actions/ResetPasswordActions/SendEmailAction";
import { sendCodeAction } from "../../Actions/ResetPasswordActions/SendCodeAction";
import SendEmailClass from "../../BusinessLogics/ActionLogics/ResetPasswordlogics/SendEmailClass";
import SendCodeClass from "../../BusinessLogics/ActionLogics/ResetPasswordlogics/SendCodeClass";
import { connect } from "react-redux";

class ForgetPassword extends Component {
  state = {
    _Email: "@gmail.com",
    _Code: "123",
    loading: false,
    success: false
  };
  handleCodeButtonClick = () => {
    this.props.history.push("/ForgetPassword");
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
            if (this.state.success == true) {
           
              this.props.codeList[0]._email === this.state._Email &&
              this.props.codeList[0]._code === this.state._Code
                ? history.push("/ForgetPassword")
                : history.push("/Login");
            }
          }, 4000);
          this.props.sendCodeAction(new SendCodeClass(this.state._Code));
        }
      );
    }
  };
  // handleButtonClick = () => {
  //   if (!this.state.loading) {
  //     this.setState(
  //       {
  //         success: false,
  //         loading: true
  //       },
  //       () => {
  //         // if (
  //         this.timer = setTimeout(() => {
  //           this.setState({
  //             loading: false,
  //             success: true
  //           });
  //           if (this.state.success == true) {
  //             this.props.codeList == this.state._Email
  //               ? history.push("/ResetPassword")
  //               : history.push("/Login");
  //           }
  //           // else {
  //           //   history.push("/Login");
  //           // }
  //         }, 4000);
  //         this.props.verifyCodeAction(
  //           new SendCodeClass(this.state._VerifyCode)
  //         );

  //         // ) {
  //         // this.setState({ Href: "/ResetPassword" });
  //         // history.push("/ResetPassword");
  //         // }
  //       }
  //     );
  //   }
  // };
  render() {
    console.log(this.props.codeList);
    const { loading } = this.state;
    return (
      <React.Fragment>
        <div class="container">
          <button
            type="button"
            class="btn btn-lg"
            data-toggle="modal"
            data-target="#myModal"
            style={{ borderRadius: "5px", width: "170px" }}
          >
            Reset Password
          </button>
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Reset your password</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label class="float-left" for="email">
                      Email:
                    </label>
                    <input
                      type="email"
                      onChange={e => this.setState({ _Email: e.target.value })}
                      class="form-control"
                      id="email"
                      name="email"
                    />
                    <span
                      id="helpResetPasswordEmail"
                      class="form-text small text-muted"
                    >
                      Password reset instructions will be sent to this email
                      address.
                    </span>
                    <button
                      onClick={() => {
                        this.props.sendEmailAction(
                          new SendEmailClass(this.state._Email)
                        );
                      }}
                      type="button"
                      class="btn btn-block"
                    >
                      Continue
                    </button>
                  </div>
                  <div>
                    <div class="form-group">
                      <label class="float-left" for="code">
                        Code:
                      </label>
                      <input
                        type="text"
                        onChange={e => this.setState({ _Code: e.target.value })}
                        class="form-control"
                        id="code"
                        name="code"
                        disabled={loading}
                      />
                      <span
                        id="helpResetPasswordEmail"
                        class="form-text small text-muted"
                      >
                        Provide us passcode which is send to your given Email.
                      </span>
                      <button
                        onClick={this.handleCodeButtonClick}
                        type="button"
                        class="btn btn-block"
                        disabled={loading}
                      >
                        {loading && <i class="spinner-border" role="status" />}
                        {loading && <span>Submitted</span>}
                        {!loading && <span>Submit code</span>}
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div class="modal-footer">
                  <button type="button" class="btn btn-primary btn-block">
                    Submit
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  emailList: state.ResetPasswordReducer.sendEmailList,
  codeList: state.ResetPasswordReducer.sendCodeList
});

export default connect(
  mapStateToProps,
  { sendEmailAction, sendCodeAction }
)(ForgetPassword);
