import React, { Component } from "react";

class Completed extends Component {
  state = {};
  render() {
    console.log(this.props.IList);
    return (
      <React.Fragment>
        <div class="modal fade" id="myModalInProcess">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">In Process</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="card-content">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.IList ? (
                        this.props.IList.map(ls => (
                          <tr>
                            <th scope="row">{ls._orderId}</th>
                            <td>{ls._startDate}</td>
                            <td>{ls._endDate}</td>
                            <td>{ls._price}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4">
                            <h2>No order is in process</h2>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Completed;
