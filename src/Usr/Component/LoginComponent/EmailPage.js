import React, { Component } from "react";
import "./forgotPassword.css";

import history from "../../../Router/history";
import { sendEmailAction } from "../../Actions/ResetPasswordActions/SendEmailAction";
import SendEmailClass from "../../BusinessLogics/ActionLogics/ResetPasswordlogics/SendEmailClass";
import { connect } from "react-redux";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class EmailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _Email: false,
      formValidity: false,
      loading: false,
      errors: {
        _Email: ""
      }
    };
  }
  handleEmailClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loading === false);
          this.props.sendEmailAction(
            new SendEmailClass(this.state._Email),
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
      case "_Email":
        errors._Email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        State._Email = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
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
                        width="20%"
                        src="https://usa.afsglobal.org/SSO/SelfPasswordRecovery/images/send_reset_password.svg?v=3"
                        alt="car-key"
                        border="0"
                      />
                    </div>
                    <h2 class="text-center">Forgot Password?</h2>
                    <p>
                      Provide us your email we will send the instruction to
                      reset password. Its only for your account security from an
                      unauthorized user.
                    </p>
                    <h2 class="text-center" style={{ color: "#bf3a2c" }}>
                      {this.props.emailList === "Invalid Data Entry"
                        ? this.props.emailList
                        : ""}
                    </h2>
                    <form noValidate>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            // id="forgetAnswer"
                            name="_Email"
                            onChange={this.handleChange}
                            placeholder="Email"
                            class="form-control"
                            type="email"
                            disabled={loading}
                            noValidate
                          />
                        </div>
                        <div class="input-group">
                          {errors._Email.length > 0 && (
                            <span style={{ fontSize: "11px", color: "red" }}>
                              {errors._Email}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* <div class="form-group"> */}
                      <button
                        onClick={this.handleEmailClick}
                        class="btn btn-block"
                        disabled={loading}
                      >
                        {loading && <i class="spinner-border" role="status" />}
                        {!loading && <span>Continue</span>}
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
  emailList: state.ResetPasswordReducer.sendEmailList
});

export default connect(
  mapStateToProps,
  { sendEmailAction }
)(EmailPage);
