import React, { Component } from "react";
import { changeTranscriptorStatusAction } from "../../Actions/TranscriptorsActions/ChangeTranscriptorStatus";
import SendTranscriptorIDClass from "../../BusinessLogics/ActionLogics/TranscriptorsClassses/TranscriptorID";
import { connect } from "react-redux";
import { resetTranscriptorPasswordAction } from "../../Actions/TranscriptorsActions/ResetTranscriptorPassword";
import NewPasswordClass from "../../BusinessLogics/ActionLogics/TranscriptorsClassses/NewPasswordClass";

const validateForm = (errors, ...rest) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  console.log(valid);
  return valid;
};

class TranscriptorsTable extends Component {
  state = {
    TID: "",
    _Password: null,
    formValidity: "",
    errors: {
      _Password: ""
    }
  };
  toggleButton = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let State = this.state;

    switch (name) {
      case "_Password":
        errors._Password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        State._Password = value;
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
    this.setState({ State, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      this.setState({ formValidity: true });
      console.log(this.state.formValidity);
    } else {
      this.setState({ formValidity: false });
      console.log(this.state.formValidity);
    }
  };

  render() {
    const { errors } = this.state;
    // console.log(this.props.TList);
    return (
      <React.Fragment>
        <div style={{ marginTop: "-150px" }} class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    {/* <th scope="col">Serial</th> */}
                    <th scope="col" style={{ textAlign: "center" }}>
                      User Name
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Email
                    </th>
                    {/* <th scope="col">Password</th> */}
                    <th colSpan="2" style={{ textAlign: "center" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.TList
                    ? this.props.TList.map(ls => (
                        <tr>
                          <td>{ls.username}</td>
                          <td>{ls.email}</td>
                          <td>
                            {ls.status === true ? (
                              <button
                                style={{
                                  borderRadius: "5px",
                                  marginTop: "28px",
                                  padding: "5%",
                                  backgroundColor: "#28a745",
                                  borderColor: "#28a745",
                                  color: "#ffffff"
                                }}
                                onClick={() => {
                                  this.props.changeTranscriptorStatusAction(
                                    new SendTranscriptorIDClass(ls.id)
                                  );
                                }}
                              >
                                Active
                              </button>
                            ) : (
                              <button
                                style={{
                                  borderRadius: "5px",
                                  marginTop: "28px",
                                  padding: "5%",
                                  backgroundColor: "#dc3545",
                                  borderColor: "#dc3545",
                                  color: "#ffffff"
                                }}
                                onClick={() => {
                                  this.props.changeTranscriptorStatusAction(
                                    new SendTranscriptorIDClass(ls.id)
                                  );
                                }}
                              >
                                Deactive
                              </button>
                            )}
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-lg"
                              data-toggle="modal"
                              data-target="#myModal"
                              style={{ borderRadius: "5px", width: "170px" }}
                              onClick={() => this.setState({ TID: ls.id })}
                            >
                              Reset Password
                            </button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
              <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Reset Your Password</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            type="password"
                            noValidate
                            name="_Password"
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div class="input-group">
                          {errors._Password.length > 0 && (
                            <span style={{ fontSize: "11px", color: "red" }}>
                              {errors._Password}
                            </span>
                          )}
                        </div>
                      </div>
                      {this.props.changePasswordMessage ? (
                        <span
                          style={{
                            textAlign: "center",
                            color: "#1dbf73",
                            marginLeft: "100px"
                          }}
                        >
                          {this.props.changePasswordMessage}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        onClick={() => {
                          this.props.resetTranscriptorPasswordAction(
                            new NewPasswordClass(
                              this.state.TID,
                              this.state._Password
                            )
                          );
                        }}
                        class="btn btn-block"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
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
  changePasswordMessage:
    state.TranscriptorsReducer.chnageTranscriptorPasswordMessage
});

export default connect(
  mapStateToProps,
  { changeTranscriptorStatusAction, resetTranscriptorPasswordAction }
)(TranscriptorsTable);
