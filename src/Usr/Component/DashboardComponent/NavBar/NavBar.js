import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logOutUser } from "../../../../LocalStorage/UserIDLocalStorage";
import { connect } from "react-redux";
import { displayUserProfileAction } from "../../../Actions/DashBoardActions/UserProfileAction";
import SendUserIDClass from "../../../BusinessLogics/ActionLogics/UserIdLogics/SendUserIDClass";
import { getUserID } from "../../../../LocalStorage/UserIDLocalStorage";

class Header extends Component {
  state = {
    // userName: this.props.profileList ? this.props.profileList.fname : ""
  };
  componentDidMount() {
    this.props.displayUserProfileAction(new SendUserIDClass(getUserID()));
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="dark"
        variant="dark"
        class="navbar-default"
        style={{ backgroundColor: "#313e47" }}
      >
        <Navbar.Brand href="/Dashboard" refresh="true">
          {/* <h4>
            <span style={{ color: "#ffffff" }}>TRANSCRIPTION</span>{" "}
            <span style={{ color: "#4eafd7" }}> JUNKIE</span>
          </h4> */}
          <img width="80px" src={require("../../../../image/Logo1.png")} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/CalculatorPanel" refresh="true">
              Calculator
            </Nav.Link>
            <Nav.Link href="/AddRequirment" refresh="true">
              Order Now
            </Nav.Link>
          </Nav>
          <Nav style={{ marginRight: "20px" }}>
            <NavDropdown
              title={
                this.props.profileList.email
                  ? this.props.profileList.fname
                  : "User Name"
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/UsrProfile" refresh="true">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  logOutUser("UserLoginData");
                }}
                refresh="true"
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  profileList: state.UserDashboardReducer.displayUserProfileList
});

export default connect(
  mapStateToProps,
  { displayUserProfileAction }
)(Header);
