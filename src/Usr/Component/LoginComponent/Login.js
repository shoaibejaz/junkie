import React, { Component } from "react";
import "./Login.css";
import { LoginAction } from "../../Actions/AuthActions/LoginAction";
import { orderLogin } from "../../Actions/OrderActionsBeforeLogin/OrderLogin";
import OrderLoginClass from "../../BusinessLogics/ActionLogics/OrderLogicsBeforeLogin/OrderLoginClass";
import LoginClass from "../../BusinessLogics/ActionLogics/AuthLogics/LoginClass";
import { connect } from "react-redux";
import { getUserID } from "../../../LocalStorage/UserIDLocalStorage";
import history from "../../../Router/history";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _Email: "",
      _Password: "",
      loading: false,
      success: false
    };
  }

  componentDidMount() {
    getUserID() ? history.push("/Dashboard") : history.push("/Login");
  }

  OnClickLogin = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            // this.setState({
            //   loading: false,
            //   success: true
            // });
          }, this.state.loading === false);
          this.props.LoginAction(
            new LoginClass(this.state._Email, this.state._Password),
            this
          );
        }
      );
    }
  };

  // OnClickOrderLogin = () => {
  //   if (!this.state.loading) {
  //     this.setState(
  //       {
  //         success: false,
  //         loading: true
  //       },
  //       () => {
  //         this.timer = setTimeout(() => {
  //           // this.setState({
  //           //   loading: false,
  //           //   success: true
  //           // });
  //         }, this.state.loading === false);
  //         this.props.orderLogin(
  //           new OrderLoginClass(
  //             this.state._Email,
  //             this.state._Password,
  //             this.props.orderIndentifierValue.orderIdentifier
  //           ),
  //           this
  //         );
  //       }
  //     );
  //   }
  // };

  render() {
    const { loading, success } = this.state;
    console.log(getUserID() ? getUserID() : "");
    // console.log(this.props.orderIndentifierValue);
    return (
      <React.Fragment>
        <section class="login-block">
          <div class="container cont">
            <div class="row">
              <div class="col-md-4 login-sec">
                <h2 class="text-center">Login Now as a Buyer</h2>
                <center>
                  {/* {this.props.errorStatus === true ? (
                    <span style={{ color: "#ff0000", textAlign: "left" }}>
                      Invalid Email or Password
                    </span>
                  ) : (
                    ""
                  )} */}
                </center>
                <form class="login-form">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-uppercase">
                      {this.props.error === "Invalid Email" ? (
                        <span style={{ color: "#ff0000" }}>Invalid Email</span>
                      ) : (
                        <span>Email</span>
                      )}
                    </label>
                    {this.props.error === "Invalid Email" ? (
                      <input
                        style={{ color: "black" }}
                        type="email"
                        class="form-control is-invalid"
                        placeholder=""
                        onChange={e =>
                          this.setState({ _Email: e.target.value })
                        }
                        disabled={loading}
                      />
                    ) : (
                      <input
                        style={{ color: "black" }}
                        type="email"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ _Email: e.target.value })
                        }
                        disabled={loading}
                      />
                    )}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1" class="text-uppercase">
                      {this.props.error === "Invalid Password" ? (
                        <span style={{ color: "#ff0000" }}>
                          Invalid Password
                        </span>
                      ) : (
                        <span>Password</span>
                      )}
                    </label>
                    {this.props.error === "Invalid Password" ? (
                      <input
                        style={{ color: "black" }}
                        type="password"
                        class="form-control is-invalid"
                        placeholder=""
                        onChange={e =>
                          this.setState({ _Password: e.target.value })
                        }
                        disabled={loading}
                      />
                    ) : (
                      <input
                        style={{ color: "black" }}
                        type="password"
                        class="form-control"
                        placeholder=""
                        onChange={e =>
                          this.setState({ _Password: e.target.value })
                        }
                        disabled={loading}
                      />
                    )}
                    <a
                      href="/Email"
                      style={{ textDecoration: "none", float: "right" }}
                    >
                      <span>forgot password?</span>
                    </a>
                  </div>
                  <div class="form-check">
                    <button
                      type="button"
                      class="btn btn-lg"
                      onClick={
                        // this.props.orderIndentifierValue
                        // ? this.OnClickOrderLogin
                        this.OnClickLogin
                      }
                      style={{
                        borderRadius: "5px",
                        width: "170px",
                        marginTop: "60px"
                      }}
                      disabled={loading}
                    >
                      {loading && <i class="spinner-border" role="status" />}
                      {loading && <span>Logging in</span>}
                      {!loading && <span>Login</span>}
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-md-8 banner-sec">
                <div class="carousel-item active" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // errorStatus: state.UserLoginReducer.error,
  error: state.UserLoginReducer.loginError,
  orderIndentifierValue: state.MakeOrderReducerBeforeLogin.makeOrderList
});

export default connect(
  mapStateToProps,
  { LoginAction, orderLogin }
)(LoginComponent);
