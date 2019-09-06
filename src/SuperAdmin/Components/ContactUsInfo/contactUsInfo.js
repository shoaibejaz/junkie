import React, { Component } from "react";
// import SideNav from "../AdminSideNav/SideNav";
import "./contactUsInfo.css";

class ContactUsInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "80%", margin: "auto" }}>
          <h1>Contact Us Information</h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-content">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.CList
                      ? this.props.CList.map(ls => (
                          <tr>
                            <td scope="row">{ls.fname}</td>
                            <td>{ls.lname}</td>
                            <td>{ls.email}</td>
                            <td>{ls.description}</td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUsInfo;
