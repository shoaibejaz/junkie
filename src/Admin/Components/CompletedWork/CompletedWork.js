import React, { Component } from "react";
import "./completedWork.css";

class CompletedWork extends Component {
  state = {};
  render() {
    // console.log(this.props.CList);
    return (
      <React.Fragment>
        {/* <SideNav /> */}
        <div class="container">
          <h1>Completed Work</h1>
          <div class="row">
            <div class="col-lg-12">
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
                          <th scope="row">{ls._orderId}</th>
                          <td>{ls._orederStartDate}</td>
                          <td>{ls._orderEndDate}</td>
                          <td>${ls._totlCost}</td>
                        </tr>
                      ))
                    ) : (
                      <h2>No order is completed yet</h2>
                    )}
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

export default CompletedWork;
