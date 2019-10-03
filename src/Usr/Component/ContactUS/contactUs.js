import React, { Component } from "react";

import { ContactInfoAction } from "../../Actions/ContactUsInfoActions/ContactUsInfoAction";
import ContactInfoClass from "../../BusinessLogics/ActionLogics/ContactUSLogics/ContactUsClass";
import { connect } from "react-redux";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _Fname: "",
      _Lname: "",
      _Email: "",
      _Description: "",
      loading: false,
      success: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <section id="contact" style={{ marginTop: "10%", marginBottom: "10%" }}>
          <div class="container-fluid">
            <div class="row slideanim">
              <div class="col-md-6 col-sm-6 contact-left">
                <div class="left-box">
                  <address class="contact">
                    <span class="span-contact">Call:</span>
                    <br />
                    +091 1234 5678
                    <br />
                    <span class="span-contact">Email:</span>
                    <br />
                    northstreet@gmail.com
                    <br />
                    <span class="span-contact">Visit:</span>
                    <br />
                    22, Northstreet Road
                    <br />
                    Melbourne, Victoria
                    <br />
                    Australia
                  </address>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 contact-right">
                <form
                  novalidate
                  action="mailto:anttnew@gmmmail.com"
                  name="frm"
                  method="post"
                >
                  <div class="form-group has-feedback">
                    <label class="sr-only">First name:</label>
                    <input
                      type="text"
                      name="_Fname"
                      onChange={e => this.setState({ _Fname: e.target.value })}
                      class="form-control"
                      placeholder="First name"
                      required
                      value={this.state._Fname}
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="form-group has-feedback">
                    <label class="sr-only">Last name:</label>
                    <input
                      type="text"
                      name="_Lname"
                      onChange={e => this.setState({ _Lname: e.target.value })}
                      class="form-control"
                      placeholder="Last name"
                      required
                      value={this.state._Lname}
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="form-group has-feedback">
                    <label class="sr-only">Email:</label>
                    <input
                      type="email"
                      name="_Email"
                      onChange={e => this.setState({ _Email: e.target.value })}
                      class="form-control"
                      placeholder="Email"
                      required
                      value={this.state._Email}
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="form-group">
                    <label class="sr-only" name="comment" for="comment">
                      Comment:
                    </label>
                    <textarea
                      class="form-control"
                      rows="5"
                      name="_Description"
                      onChange={e =>
                        this.setState({ _Description: e.target.value })
                      }
                      id="comment"
                      placeholder="Description"
                      value={this.state._Description}
                      disabled={this.state.loading}
                    />
                  </div>
                  <div class="form-group">
                    {this.props.contactUsMsg === "Your Request Received" ? (
                      <span style={{ fontSize: "12px", color: "#00ff00" }}>
                        Dear user you have successfully made a contact with us
                      </span>
                    ) : (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {this.props.contactUsMsg}
                      </span>
                    )}
                  </div>
                  <div class="contact-buttons pull-left">
                    <button
                      style={{ width: "200px" }}
                      onClick={() => {
                        if (!this.state.loading) {
                          this.setState(
                            {
                              loading: true
                            },
                            () => {
                              this.timer = setTimeout(() => {},
                              this.state.loading === false);
                              this.props.ContactInfoAction(
                                new ContactInfoClass(
                                  this.state._Fname,
                                  this.state._Lname,
                                  this.state._Email,
                                  this.state._Description
                                ),
                                this
                              );
                            }
                          );
                        }
                      }}
                      value="Send"
                      class="btn"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <i class="spinner-border" role="status" />
                      )}
                      {!this.state.loading && <span>Submit</span>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contactUsMsg: state.ContactUsReducer.contactUsMessage
});

export default connect(
  mapStateToProps,
  { ContactInfoAction }
)(ContactUs);
