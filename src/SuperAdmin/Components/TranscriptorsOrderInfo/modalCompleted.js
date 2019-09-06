import React, { Component } from "react";

class Completed extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="modal fade" id="myModalCompleted">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Completed</h4>
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
                      {this.props.CList ? (
                        this.props.CList.map(ls => (
                          <tr>
                            <td>{ls._orderId}</td>
                            <td>{ls._orederStartDate}</td>
                            <td>{ls._orderEndDate}</td>
                            <td>${ls._totlCost}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4">
                            <h2>No order is completed yet</h2>
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
