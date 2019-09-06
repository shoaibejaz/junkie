import React, { Component } from "react";

import { ContactInfoAction } from "../../Actions/ContactUsInfoActions/ContactUsInfoAction";
import ContactInfoClass from "../../BusinessLogics/ActionLogics/ContactUSLogics/ContactUsClass";
import ReactNotification from "react-notifications-component";
import { connect } from "react-redux";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    this.state = {
      _Fname: "",
      _Lname: "",
      _Email: "",
      _Description: ""
    };
  }
  addNotification() {
    // console.log(value);
    this.notificationDOMRef.current.addNotification({
      title: "We are now in conatc",
      message: "Contact Information collected successfully",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 3000 },
      dismissable: { click: true }
    });
  }

  render() {
    return (
      <React.Fragment>
        <ReactNotification ref={this.notificationDOMRef} />
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
                    />
                  </div>
                  <div class="contact-buttons pull-left">
                    <input
                      style={{ width: "200px" }}
                      type="submit"
                      onClick={() => {
                        this.props.ContactInfoAction(
                          new ContactInfoClass(
                            this.state._Fname,
                            this.state._Lname,
                            this.state._Email,
                            this.state._Description
                          ),
                          this
                        );
                      }}
                      name="submit"
                      value="Send"
                    />
                    <span>&emsp;</span>
                    <input
                      style={{ width: "200px" }}
                      type="reset"
                      value="Reset"
                    />
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { ContactInfoAction }
)(ContactUs);
