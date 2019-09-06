import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logOutUser } from "../../../../LocalStorage/UserIDLocalStorage";
import { connect } from "react-redux";

class Header extends Component {
  state = {};

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
          <h4>
            <span style={{ color: "#ffffff" }}>TRANSCRIPTION</span>
            <i>
              {" "}
              <span style={{ color: "#4eafd7" }}> JUNKIE</span>
            </i>
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/AddRequirment" refresh="true">
              Order Now
            </Nav.Link>
          </Nav>
          <Nav style={{ marginRight: "20px" }}>
            <NavDropdown title="Lal Parsat Sharma" id="collasible-nav-dropdown">
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

export default connect(
  null,
  null
)(Header);
