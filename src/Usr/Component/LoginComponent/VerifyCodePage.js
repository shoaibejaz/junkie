import React, { Component } from "react";
import "./forgotPassword.css";
import history from "../../../Router/history";
import { sendCodeAction } from "../../Actions/ResetPasswordActions/SendCodeAction";
import SendCodeClass from "../../BusinessLogics/ActionLogics/ResetPasswordlogics/SendCodeClass";
import { connect } from "react-redux";

const validateForm = (errors, ...rest) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  console.log(valid);
  return valid;
};

class VerifyCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _VerifyCode: "123",
      formValidity: false,
      loading: false,
      success: false,
      errors: {
        _VerifyCode: ""
      }
    };
  }
  handleCodeClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              // loading: false
              success: true
            });
            if (
              this.state.success == true &&
              this.props.codeList._code === this.state._VerifyCode
            ) {
              history.push("/ForgetPassword");
            } else {
              history.push("/VerifyCode");
            }
          }, this.state.loading === false);
          this.props.sendCodeAction(
            new SendCodeClass(this.state._VerifyCode),
            this.state._VerifyCode,
            this
          );
        }
      );
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "_VerifyCode":
        errors._VerifyCode =
          value.length < 6 ? "Code must be 6 characters long!" : "";
        State._VerifyCode = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      this.setState({ formValidity: true });
    } else {
      this.setState({ formValidity: false });
    }
  };
  render() {
    const { errors } = this.state;
    const { loading } = this.state;
    return (
      <React.Fragment>
        <div class="container forget-password">
          <div class="row">
            <div class="col-md-12 ">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="text-center">
                    <div class="col-lg-12">
                      <img
                        class="imgForget"
                        src="https://usa.afsglobal.org/SSO/SelfPasswordRecovery/images/send_reset_password.svg?v=3"
                        alt="car-key"
                        border="0"
                      />
                    </div>
                    <h2 class="text-center">Forgot Password?</h2>
                    <p>
                      Provide us the verification code which we send on your
                      email.
                    </p>

                    <h2 class="text-center" style={{ color: "#bf3a2c" }}>
                      {this.props.codeList === "Failed! Code is not correct"
                        ? this.props.codeList
                        : ""}
                    </h2>
                    <form onSubmit={this.handleSubmit} noValidate>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            // id="forgetAnswer"
                            name="_VerifyCode"
                            onChange={this.handleChange}
                            placeholder="Verify code"
                            class="form-control"
                            maxLength="6"
                            type="text"
                            disabled={loading}
                            noValidate
                          />
                        </div>
                        <div class="input-group">
                          {errors._VerifyCode.length > 0 && (
                            <span style={{ fontSize: "11px", color: "red" }}>
                              {errors._VerifyCode}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={this.handleCodeClick}
                        class="btn btn-block"
                        disabled={loading}
                      >
                        {loading && <i class="spinner-border" role="status" />}
                        {!loading && <span>Continue</span>}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  codeList: state.ResetPasswordReducer.sendCodeList
});

export default connect(
  mapStateToProps,
  { sendCodeAction }
)(VerifyCode);
