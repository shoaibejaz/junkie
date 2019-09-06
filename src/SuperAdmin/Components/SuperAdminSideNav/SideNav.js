import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logOutSuperAdmin } from "../../../LocalStorage/SuperAdminLocalStorage";

import "./Side.css";
import "./Search.css";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="wrapper" class="animate">
          <nav
            class="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-dark"
            style={{ backgroundColor: "#ffffff" }}
          >
            <Link class="navbar-brand" to="/SADashboard">
              <b>
                {" "}
                TRANSCRIPTION <span style={{ color: "#4eafd7" }}>JUNKIE</span>
              </b>
            </Link>
            <image
              style={{ width: "100px" }}
              src={require("../../../image/Logo.png")}
            />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav animate side-nav">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    style={{ textAlign: "left", fontSize: 13 }}
                    href="/SADashboard"
                    title="Posted Work"
                  >
                    <i class="fa fa-cube" style={{ width: 22 }} /> Dashboard{" "}
                    <i
                      class="fa fa-cube shortmenu animate"
                      style={{ width: 22 }}
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    style={{ textAlign: "left", fontSize: 13 }}
                    href="/SAContactUsInfo"
                    title="Work in process"
                  >
                    {/* <i class="fas fa-cart-plus" style={{ width: 22 }} /> */}
                    <i class="fas fa-id-card" />
                    <i class="fa fa-stream" style={{ width: 22 }} /> Contact Us
                    Info
                    <i
                      class="fa fa-stream shortmenu animate"
                      style={{ width: 22 }}
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    style={{ textAlign: "left", fontSize: 13 }}
                    href="/SAAddTranscriptorsProfile"
                    // title="Completed"
                  >
                    {/* <i class="fas fa-comment" style={{ width: 22 }} /> */}
                    {/* <i class="far fa-plus-square"></i> */}
                    {/* <i class="fas fa-plus-circle"></i> */}
                    <i class="fas fa-user-plus" style={{ width: 22 }} /> Add
                    Transcriptors{" "}
                    <i
                      class="fas fa-user-plus shortmenu animate"
                      style={{ width: 22 }}
                    />
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ml-md-auto d-md-flex">
                <li class="nav-item">
                  <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                      <div class="searchbar">
                        <input
                          class="search_input"
                          type="text"
                          placeholder="Search..."
                          style={{ height: 40, marginRight: 10 }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li class="nav-item" style={{ padding: "8px 0px 0px 0px" }}>
                  <a class="nav-link" href="#">
                    <i class="fa fa-user" style={{ width: 15 }} />
                    <span
                      style={{
                        margin: "0px 0px 0px 0px",
                        fontSize: "14px"
                      }}
                    >
                      {" "}
                      Profile
                    </span>
                  </a>
                </li> */}
                <li class="nav-item" style={{ padding: "8px 0px 0px 0px" }}>
                  <a class="nav-link" href="#">
                    {/* <i class="fas fa-sign-out-alt" /> */}
                    <i class="fa fa-sign-out-alt" style={{ width: 15 }} />
                    <span
                      style={{ fontSize: "14px" }}
                      onClick={() => {
                        logOutSuperAdmin("SuperAdminLoginData");
                      }}
                    >
                      {" "}
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
