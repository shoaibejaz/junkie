import React, { Component } from "react";
import "./forgotPassword.css";
import history from "../../../Router/history";
import { resetPasswordAction } from "../../Actions/ResetPasswordActions/ResetPasswordAction";
import ResetPasswordClass from "../../BusinessLogics/ActionLogics/ResetPasswordlogics/ResetPasswordClass";
import { connect } from "react-redux";

class FrgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _Code: "",
      _Email: "",
      loading: false,
      _NewPassowrd: null,
      _ConfirmPassword: null,
      formValidity: false,
      errors: {
        _NewPassowrd: "",
        _ConfirmPassword: ""
      }
    };
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loading === false);
          this.props.resetPasswordAction(
            new ResetPasswordClass(
              this.state._Code,
              this.state._NewPassowrd,
              this.state._ConfirmPassword,
              this.state._Email
            ),
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
      case "_NewPassowrd":
        errors._NewPassowrd =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        State._NewPassowrd = value;
        break;
      case "_ConfirmPassword":
        errors._ConfirmPassword =
          State._NewPassowrd !== value ? "Passwords are not matched!" : "";
        State._ConfirmPassword = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };

  OnClick = () => {
    if (this.state._NewPassowrd === this.state._ConfirmPassword) {
      this.props.resetPasswordAction(
        new ResetPasswordClass(this.state._ConfirmPassword)
      );
    } else {
    }
  };
  componentDidMount() {
    if (this.props.codeList._code) {
      this.setState({ _Code: this.props.codeList._code });
    }

    if (this.props.codeList._email) {
      this.setState({ _Email: this.props.codeList._email });
    }
  }
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
                    <p>You can reset your password here.</p>
                    <h2 class="text-center" style={{ color: "#bf3a2c" }}>
                      {this.props.passowrdList}
                    </h2>
                    <form noValidate>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            // id="forgetAnswer"
                            name="_NewPassowrd"
                            onChange={this.handleChange}
                            placeholder="New Password"
                            class="form-control"
                            type="password"
                            disabled={loading}
                            noValidate
                          />
                        </div>
                        <div class="input-group">
                          {errors._NewPassowrd.length > 0 && (
                            <span style={{ fontSize: "11px", color: "red" }}>
                              {errors._NewPassowrd}
                            </span>
                          )}
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            // id="forgetAnswer"
                            name="_ConfirmPassword"
                            onChange={this.handleChange}
                            placeholder="Confirm Password"
                            class="form-control"
                            type="password"
                            disabled={loading}
                            noValidate
                          />
                        </div>
                        <div class="input-group">
                          {errors._ConfirmPassword.length > 0 && (
                            <span style={{ fontSize: "11px", color: "red" }}>
                              {errors._ConfirmPassword}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* <div class="form-group"> */}
                      <button
                        onClick={this.handleButtonClick}
                        class="btn btn-block"
                        disabled={loading}
                      >
                        {loading && <i class="spinner-border" role="status" />}
                        {!loading && <span>Reset Password</span>}
                      </button>
                      {/* </div> */}
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
  passowrdList: state.ResetPasswordReducer.resetPasswordList,
  codeList: state.ResetPasswordReducer.sendCodeList
});

export default connect(
  mapStateToProps,
  { resetPasswordAction }
)(FrgotPassword);
