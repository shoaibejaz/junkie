import React, { Component } from "react";
import "./completedWork.css";
import { connect } from "react-redux";
import SpinnerLoader from "../../../Usr/Component/Loader/SpinnerLoader";
import { transcriptorCompleteOrderAction } from "../../Actions/OrdersActions/CompletedOrderAction";
import SendTranscriptorIDClass from "../../BusinessLogics/ActionLogics/OrderLogics/SendTranscriptorID";
import { getTranscriptorID } from "../../../LocalStorage/TranscriptorIDLocalStorage";

class CompletedWork extends Component {
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
          this.props.transcriptorCompleteOrderAction(
            new SendTranscriptorIDClass(getTranscriptorID()),
            this
          );
        }
      );
    }
  }
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
                <div style={{ overflowX: "auto" }}>
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
                      {this.state.loading === false ? (
                        this.props.completedOrdersListlenght > 0 ? (
                          this.props.completedOrdersList.map(ls => (
                            <tr>
                              <th scope="row">{ls._orderId}</th>
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
                        )
                      ) : (
                        <div class="container">
                          <div style={{ marginLeft: "200%" }}>
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
  completedOrdersList: state.OrdersReducer.transcriptorCompleteOrderList,
  completedOrdersListlenght: state.OrdersReducer.completedOrderlenght
});

export default connect(
  mapStateToProps,
  { transcriptorCompleteOrderAction }
)(CompletedWork);
