import React, { Component } from "react";
import ErrorPage from "../Component/LoginComponent/ErrorPage";

class ErrorView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ErrorPage P="The page you are looking for is only temporarily available when you get a mail of change password." />
      </React.Fragment>
    );
  }
}

export default ErrorView;
