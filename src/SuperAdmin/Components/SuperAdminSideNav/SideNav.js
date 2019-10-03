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
              {/* <b>
                {" "}
                TRANSCRIPTION <span style={{ color: "#4eafd7" }}>JUNKIE</span>
              </b> */}
              <img width="94px" src={require("../../../image/Logo1.png")} />
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
                    {/* <i class="fas fa-file-signature"></i> */}
                    {/* <i class="fas fa-camera"></i>
                    Dashboard
                    <i
                      class="fas fa-file-signature shortmenu animate"
                      style={{ width: 22 }}
                    /> */}
                    <img
                      width="15px"
                      style={{ marginRight: "12px", marginLeft: "0px" }}
                      src={require("../../../image/file-signature-solid.svg")}
                    />
                    Contact us info
                    <img
                      width="15px"
                      class="shortmenu animate"
                      src={require("../../../image/file-signature-solid.svg")}
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
                    <img
                      width="15px"
                      style={{ marginRight: "12px", marginLeft: "-2px" }}
                      src={require("../../../image/follow.png")}
                    />
                    Add Transcriptor
                    <img
                      width="15px"
                      style={{ margin: "0px", padding: "0px" }}
                      class="shortmenu animate"
                      src={require("../../../image/follow.png")}
                    />
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ml-md-auto d-md-flex">
                {/* <li class="nav-item">
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
                </li> */}
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
