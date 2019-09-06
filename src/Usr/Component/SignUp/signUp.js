import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "./signUp.css";

import { connect } from "react-redux";
import { SignUpAction } from "../../Actions/AuthActions/SignUpAction";
import SignUpClass from "../../BusinessLogics/ActionLogics/AuthLogics/SignUpClass";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors, ...rest) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  console.log(valid);

  // Object.values(rest).forEach(val => {
  //   val === null && (valid = false);
  // });

  return valid;
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.state = {
      _FName: null,
      _LName: null,
      _Email: null,
      _Password: null,
      formValidity: false,
      // _ConfirmPassword: null,
      errors: {
        _FName: "",
        _LName: "",
        _Email: "",
        _Password: ""
        // _ConfirmPassword: ""
      }
    };
  }

  addNotification(value) {
    // console.log(value);
    if (value === "User Registered Successfully") {
      this.notificationDOMRef.current.addNotification({
        title: "SignUp",
        message: "SignUp Successfully",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        dismissable: { click: true }
      });
    } else if (value === "Invalid Entries") {
      this.notificationDOMRef.current.addNotification({
        title: "SignUp",
        message: "Empty fields are not allowed",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        dismissable: { click: true }
      });
    } else if (value === "Email Already Exist") {
      this.notificationDOMRef.current.addNotification({
        title: "SignUp",
        message: "This email already exists in our system.",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        dismissable: { click: true }
      });
    } else if (value === "Invalid data of fields") {
      this.notificationDOMRef.current.addNotification({
        title: "SignUp",
        message: "Please check your data fields",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 3000 },
        dismissable: { click: true }
      });
    }
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

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      this.setState({ formValidity: true });
      console.log(this.state.formValidity);
    } else {
      this.setState({ formValidity: false });
      console.log(this.state.formValidity);
    }
    // this.setState({ formValidity: false });
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div class="col-md-4 col-md-offset-4" id="login">
          <section id="inner-wrapper" class="login">
            <article>
              <form onSubmit={this.handleSubmit} noValidate>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      name="_FName"
                      // onChange={e => this.setState({ _FName: e.target.value })}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="First Name"
                      noValidate
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
                {/* <div class="form-group">
                  <div class="input-group">
                    <input
                      type="password"
                      required
                      onChange={e =>
                        this.setState({ _ConfirmPassword: e.target.value })
                      }
                      class="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div> */}
                <ReactNotification ref={this.notificationDOMRef} />
                <input
                  type="submit"
                  name="SignUp"
                  onClick={() => {
                    this.props.SignUpAction(
                      new SignUpClass(
                        this.state._FName,
                        this.state._LName,
                        this.state._Email,
                        this.state._Password
                      ),
                      this
                    );
                  }}
                  class="btn btn-success btn-block"
                />
              </form>
            </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  signUpList: state.SignUpReducer.signUpList
});

export default connect(
  mapStateToProps,
  { SignUpAction }
)(SignUp);
