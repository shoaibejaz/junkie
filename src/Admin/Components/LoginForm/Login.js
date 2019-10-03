import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";

import { transcriptorLoginAction } from "../../Actions/AuthActions/LoginAction";
import TranscriptorLoginClass from "../../BusinessLogics/ActionLogics/AuthLogics/TranscriptorLoginClass";
import { connect } from "react-redux";

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
          this.timer = setTimeout(() => {
            this.setState({
              // loading: false,
              success: true
            });
          }, this.state.loading);
          this.props.transcriptorLoginAction(
            new TranscriptorLoginClass(this.state._Email, this.state._Password),
            this
          );
        }
      );
    }
  };

  render() {
    const { loading, success } = this.state;
    return (
      <React.Fragment>
        <div class="wrapperSA fadeInDown">
          <div id="formContent">
            <div class="fadeInSA first">
              <img
                src={require("../../../image/Logo.png")}
                style={{ width: "200px" }}
                id="icon"
                alt="User Icon"
              />
              {/* <h1>Aditya News</h1> */}
            </div>
            <form>
              <input
                type="email"
                id="login"
                onChange={e => this.setState({ _Email: e.target.value })}
                class="fadeInSA second  textSA"
                name="login"
                placeholder="Email"
                disabled={loading}
              />
              <div class="form-group has-error">
                <input
                  type="password"
                  id=".inputError"
                  onChange={e => this.setState({ _Password: e.target.value })}
                  class="fadeInSA third textSA"
                  name="login"
                  placeholder="Password"
                  disabled={loading}
                />
              </div>
              {this.props.errorMessage ? (
                <span style={{ color: "#ff0000", textAlign: "left" }}>
                  {this.props.errorMessage}
                </span>
              ) : (
                ""
              )}
              <div class="form-check">
                <button
                  class="btn btn-lg"
                  onClick={this.OnClick}
                  style={{ borderRadius: "5px", width: "170px" }}
                  disabled={loading}
                >
                  {loading && <i class="spinner-border" role="status" />}
                  {!loading && <span>Login</span>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errorStatus: state.TranscriptorLoginReducer.error,
  errorMessage: state.TranscriptorLoginReducer.loginError
});

export default connect(
  mapStateToProps,
  { transcriptorLoginAction }
)(LogIn);
