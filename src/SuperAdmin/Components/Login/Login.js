import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { superAdminLoginAction } from "../../Actions/AuthActions/LoginAction";
import SuperAdminLoginClass from "../../BusinessLogics/ActionLogics/Authlogics/LoginClass";
import { connect } from "react-redux";
// import { getSuperAdminID } from "../../../LocalStorage/SuperAdminLocalStorage";

class LogIn extends Component {
  state = {
    _Email: "",
    _Password: "",
    loading: false,
    success: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  OnClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loading === false);
          this.props.superAdminLoginAction(
            new SuperAdminLoginClass(this.state._Email, this.state._Password),
            this
          );
        }
      );
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        <div class="wrapperSA fadeInDown">
          <div id="formContent">
            <div class="fadeInSA first">
              <img
                src={require("../../../image/Logo.png")}
                style={{ width: "50%" }}
                id="icon"
                alt="User Icon"
              />
              {/* <h1>Aditya News</h1> */}
            </div>
            <form>
              <center>
                <input
                  type="email"
                  style={{ alignSelf: "center" }}
                  id="login"
                  class="fadeInSA second textSA"
                  onChange={e => this.setState({ _Email: e.target.value })}
                  name="login"
                  disabled={loading}
                  placeholder="username"
                />
              </center>
              <input
                type="password"
                id="password"
                class="fadeInSA third textSA"
                onChange={e => this.setState({ _Password: e.target.value })}
                name="login"
                disabled={loading}
                placeholder="password"
              />
              <div class="form-group">
                {this.props.error ? (
                  <span style={{ color: "#ff0000", textAlign: "left" }}>
                    {this.props.error}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div class="form-check">
                <button
                  type="button"
                  class="btn btn-lg"
                  onClick={this.OnClick}
                  style={{ borderRadius: "5px", width: "170px" }}
                  disabled={loading}
                >
                  {loading && <i class="spinner-border" role="status" />}
                  {loading && <span>Logging in</span>}
                  {!loading && <span>Login</span>}
                </button>
              </div>
            </form>
            {/* <div id="formFooter">
              <a class="underlineHover" href="#">
                Go to the Site
              </a>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.SuperAdminLoginReducer.loginError
});

export default connect(
  mapStateToProps,
  { superAdminLoginAction }
)(LogIn);
