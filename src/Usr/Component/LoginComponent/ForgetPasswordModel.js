import React, { Component } from "react";

class ForgetPassword extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container">
          <button
            type="button"
            class="btn btn-lg"
            data-toggle="modal"
            data-target="#myModal"
            style={{ borderRadius: "5px", width: "170px" }}
          >
            {this.props.buttonName}
          </button>
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">{this.props.modelHeader}</h4>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label class="float-left" for={this.props.inputType}>
                      {this.props.inputName}:
                    </label>
                    <input
                      type={this.props.inputType}
                      class="form-control"
                      id={this.props.inputName}
                      name={this.props.inputName}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgetPassword;
