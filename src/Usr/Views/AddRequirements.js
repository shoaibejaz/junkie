import React, { Component } from "react";
import NavBar from "../Component/DashboardComponent/NavBar/NavBar";
import AddRequirements from "../Component/DashboardComponent/AddRequirment/AddRequirment";
import { getUserID } from "../../LocalStorage/UserIDLocalStorage";
import history from "../../Router/history";

class AddRequirementsView extends Component {
  state = {};
  componentDidMount() {
    getUserID() ? history.push("/AddRequirment") : history.push("/Login");
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AddRequirements />
      </React.Fragment>
    );
  }
}

export default AddRequirementsView;
