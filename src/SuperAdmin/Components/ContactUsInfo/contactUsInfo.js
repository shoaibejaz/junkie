import React, { Component } from "react";
import SpinnerLoader from "../../../Usr/Component/Loader/SpinnerLoader";
import "./contactUsInfo.css";
import { connect } from "react-redux";
import { DisplayContactUsInfoAction } from "../../Actions/ContactUsinfoActions/DisplayContactUsInfoAction";

class ContactUsInfo extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    if (!this.state.loading) {
      this.setState(
        {
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.loading === false);
          this.props.DisplayContactUsInfoAction(this);
        }
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "80%", margin: "auto" }}>
          <h1>Contact Us Information</h1>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-content">
                <div style={{ overflowX: "auto" }}>
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
                      {this.state.loading === false ? (
                        this.props.contactListLength > 0 ? (
                          this.props.ContactInfoList.map(ls => (
                            <tr>
                              <td scope="row">{ls.fname}</td>
                              <td>{ls.lname}</td>
                              <td>{ls.email}</td>
                              <td>{ls.description}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4">
                              <h2>
                                No contact us information is available now
                              </h2>
                            </td>
                          </tr>
                        )
                      ) : (
                        <div class="container">
                          <div style={{ marginLeft: "175%" }}>
                            <SpinnerLoader />
                          </div>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ContactInfoList: state.DisplayContactUsInfoReducer.displayContactUsInfoList,
  contactListLength: state.DisplayContactUsInfoReducer.contactUsListLength
});

export default connect(
  mapStateToProps,
  { DisplayContactUsInfoAction }
)(ContactUsInfo);
