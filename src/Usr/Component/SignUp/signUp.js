import React, { Component } from "react";
// import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./signUp.css";

import { connect } from "react-redux";
import { SignUpAction } from "../../Actions/AuthActions/SignUpAction";
import SignUpClass from "../../BusinessLogics/ActionLogics/AuthLogics/SignUpClass";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      _FName: null,
      _LName: null,
      _Email: null,
      _Password: null,
      formValidity: false,
      errors: {
        _FName: "",
        _LName: "",
        _Email: "",
        _Password: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "_FName":
        errors._FName =
          value.length < 3 ? "First Name must be 3 characters long!" : "";
        State._FName = value;
        break;
      case "_LName":
        errors._LName =
          value.length < 3 ? "Last Name must be 3 characters long!" : "";
        State._LName = value;
        break;
      case "_Email":
        errors._Email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        State._Email = value;
        break;
      case "_Password":
        errors._Password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        State._Password = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div class="col-md-4 col-md-offset-4" id="login">
          <section id="inner-wrapper" class="login">
            <article>
              <form noValidate>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      name="_FName"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="First Name"
                      noValidate
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="input-group">
                    {errors._FName.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._FName}
                      </span>
                    )}
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      noValidate
                      name="_LName"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Last Name"
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="input-group">
                    {errors._LName.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._LName}
                      </span>
                    )}
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="email"
                      noValidate
                      name="_Email"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Email Address"
                      disabled={this.state.loading}
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
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="password"
                      noValidate
                      name="_Password"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Password"
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="input-group">
                    {errors._Password.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._Password}
                      </span>
                    )}
                  </div>
                </div>
                {this.props.signUpMessage === "User Registered Successfully" ? (
                  <span style={{ fontSize: "11px", color: "#00ff00" }}>
                    {this.props.signUpMessage}
                  </span>
                ) : (
                  <span style={{ fontSize: "11px", color: "red" }}>
                    {this.props.signUpMessage}
                  </span>
                )}
                <button
                  onClick={() => {
                    if (!this.state.loading) {
                      this.setState(
                        {
                          loading: true
                        },
                        () => {
                          this.timer = setTimeout(() => {},
                          this.state.loading === false);
                          this.props.SignUpAction(
                            new SignUpClass(
                              this.state._FName,
                              this.state._LName,
                              this.state._Email,
                              this.state._Password
                            ),
                            this
                          );
                        }
                      );
                    }
                  }}
                  class="btn btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <i class="spinner-border" role="status" />
                  )}
                  {!this.state.loading && <span>SignUp</span>}
                </button>
              </form>
            </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  signUpMessage: state.SignUpReducer.signUpList
});

export default connect(
  mapStateToProps,
  { SignUpAction }
)(SignUp);
