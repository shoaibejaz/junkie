import React, { Component } from "react";
import "./Order.css";
import $ from "jquery";
import SpinnerLoader from "../../Loader/SpinnerLoader";
import { getUserID } from "../../../../LocalStorage/UserIDLocalStorage";
import { displayAllOrdersAction } from "../../../Actions/DashBoardActions/DisplayAllOrdersAction";
import { displayRequestedOrdersAction } from "../../../Actions/DashBoardActions/DisplayRequestedOrdersAction";
import { displayConfirmedOrdersAction } from "../../../Actions/DashBoardActions/DisplayConfirmedOrdersAction";
import { displayDeliveredOrdersAction } from "../../../Actions/DashBoardActions/DisplayDeliveredOrdersAction";
import SendUserIDClass from "../../../BusinessLogics/ActionLogics/UserIdLogics/SendUserIDClass";
import { connect } from "react-redux";

class Services extends Component {
  state = {
    rLoading: false,
    cLoading: false,
    dLoading: false
  };
  componentDidMount() {
    if (!this.state.rLoading) {
      this.setState(
        {
          rLoading: true
        },
        () => {
          this.timer = setTimeout(() => {}, this.state.rLoading === false);
          this.props.displayRequestedOrdersAction(
            new SendUserIDClass(getUserID()),
            this
          );
        }
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: "4%" }}>
          <h1>Manage Orders</h1>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                onClick={() => {
                  if (!this.state.rLoading) {
                    this.setState(
                      {
                        rLoading: true
                      },
                      () => {
                        this.timer = setTimeout(() => {},
                        this.state.rLoading === false);
                        this.props.displayRequestedOrdersAction(
                          new SendUserIDClass(getUserID()),
                          this
                        );
                      }
                    );
                  }
                }}
                aria-controls="home"
                aria-selected="true"
              >
                Requested
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                onClick={() => {
                  if (!this.state.cLoading) {
                    this.setState(
                      {
                        cLoading: true
                      },
                      () => {
                        this.timer = setTimeout(() => {},
                        this.state.cLoading === false);
                        this.props.displayConfirmedOrdersAction(
                          new SendUserIDClass(getUserID()),
                          this
                        );
                      }
                    );
                  }
                }}
                aria-controls="profile"
                aria-selected="false"
              >
                Confirmed
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                onClick={() => {
                  if (!this.state.dLoading) {
                    this.setState(
                      {
                        dLoading: true
                      },
                      () => {
                        this.timer = setTimeout(() => {},
                        this.state.dLoading === false);
                        this.props.displayDeliveredOrdersAction(
                          new SendUserIDClass(getUserID()),
                          this
                        );
                      }
                    );
                  }
                }}
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Delivered
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div style={{ overflowX: "auto" }}>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">File Name</th>
                      <th scope="col">Turnaround Time</th>
                      <th scope="col">Total Cost</th>
                      <th scope="col">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rLoading === false ? (
                      this.props.rLength > 0 ? (
                        this.props.requestedOrders.map(ls => (
                          <tr>
                            <th scope="row">{ls.orderid}</th>
                            <td>
                              <a
                                style={{ textDecoration: "none" }}
                                href={ls.filepath}
                                target={ls.filepath}
                              >
                                {ls.filename}
                              </a>
                            </td>
                            <td>
                              {ls.taroundtime === "24"
                                ? ls.taroundtime + " hours"
                                : ""}
                              {ls.taroundtime === "2"
                                ? ls.taroundtime + " days"
                                : ""}
                              {ls.taroundtime === "3"
                                ? ls.taroundtime + " days"
                                : ""}
                              {ls.taroundtime === "1"
                                ? ls.taroundtime + " week"
                                : ""}
                            </td>
                            <td>${ls.totlcost}</td>
                            <td>
                              {ls.paypalstatus == "1" ? "Payed" : "Unpayed"}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">
                            <h2>No new order is requested yet</h2>
                          </td>
                        </tr>
                      )
                    ) : (
                      <div class="container">
                        <div style={{ marginLeft: "350%" }}>
                          <SpinnerLoader />
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div style={{ overflowX: "auto" }}>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">File Name</th>
                      <th scope="col">Turnaround Time</th>
                      <th scope="col">Total Cost</th>
                      <th scope="col">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.cLoading === false ? (
                      this.props.cLength > 0 ? (
                        this.props.confirmedOrders.map(ls => (
                          <tr>
                            <th scope="row">{ls.orderid}</th>
                            <td>
                              <a
                                style={{ textDecoration: "none" }}
                                href={ls.filepath}
                                target={ls.filepath}
                              >
                                {ls.filename}
                              </a>
                            </td>
                            <td>
                              {ls.taroundtime === "24"
                                ? ls.taroundtime + " hours"
                                : ""}
                              {ls.taroundtime === "2"
                                ? ls.taroundtime + " days"
                                : ""}
                              {ls.taroundtime === "3"
                                ? ls.taroundtime + " days"
                                : ""}
                              {ls.taroundtime === "1"
                                ? ls.taroundtime + " week"
                                : ""}
                            </td>
                            <td>${ls.totlcost}</td>
                            <td>
                              {ls.paypalstatus == "1" ? "Payed" : "Unpayed"}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">
                            <h2>No order is confirmed yet</h2>
                          </td>
                        </tr>
                      )
                    ) : (
                      <div class="container">
                        <div style={{ marginLeft: "350%" }}>
                          <SpinnerLoader />
                        </div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div style={{ overflowX: "auto" }}>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">File Name</th>
                      <th scope="col">Turnaround Time</th>
                      <th scope="col">Total Cost</th>
                      <th scope="col">Delivery File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dLoading === false ? (
                      this.props.dLength > 0 ? (
                        this.props.deliveredOrders.map(ls => (
                          <tr>
                            <th scope="row">{ls.orderid}</th>
                            <td>
                              <a
                                style={{ textDecoration: "none" }}
                                href={ls.filepath}
                                target={ls.filepath}
                              >
                                {ls.filename}
                              </a>
                            </td>
                            <td>
                              {ls.taroundtime === "24"
                                ? ls.taroundtime + " hours"
                                : ""}
                              {ls.taroundtime === "2"
                                ? ls.taroundtime + " days"
                                : ""}
                              {ls.taroundtime === "3"
                                ? ls.taroundtime + " days"
                                : ""}
                              {ls.taroundtime === "1"
                                ? ls.taroundtime + " week"
                                : ""}
                            </td>
                            <td>${ls.totlcost}</td>
                            <a
                              style={{ textDecoration: "none" }}
                              href={ls.workedfilepath}
                              target={ls.workedfilepath}
                            >
                              {" "}
                              <td>{ls.workedfilename}</td>
                            </a>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">
                            <h2>No order is delivered yet</h2>
                          </td>
                        </tr>
                      )
                    ) : (
                      <div class="container">
                        <div style={{ marginLeft: "350%" }}>
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
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allOrders: state.UserDashboardReducer.allUserOrdersList,
  requestedOrders: state.UserDashboardReducer.requestedUserOrdersList,
  rMessage: state.UserDashboardReducer.rOrderMessage,
  rLength: state.UserDashboardReducer.rOrderLength,
  confirmedOrders: state.UserDashboardReducer.confirmedUserOrdersList,
  cMessage: state.UserDashboardReducer.cOrderMessage,
  cLength: state.UserDashboardReducer.cOrderLength,
  deliveredOrders: state.UserDashboardReducer.deliveredUserOrdersList,
  dMessage: state.UserDashboardReducer.dOrderMessage,
  dLength: state.UserDashboardReducer.dOrderLength
});

export default connect(
  mapStateToProps,
  {
    displayAllOrdersAction,
    displayRequestedOrdersAction,
    displayConfirmedOrdersAction,
    displayDeliveredOrdersAction
  }
)(Services);
