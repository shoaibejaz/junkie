import React, { Component } from "react";

import SALogin from "../Components/Login/Login";
import { getSuperAdminID } from "../../LocalStorage/SuperAdminLocalStorage";
import history from "../../Router/history";

class SuperAdminLogin extends Component {
  state = {};
  componentDidMount() {
    getSuperAdminID() ? history.push("/SADashboard") : history.push("/SALogin");
  }
  render() {
    return (
      <React.Fragment>
        <SALogin />
      </React.Fragment>
    );
  }
}

export default SuperAdminLogin;
