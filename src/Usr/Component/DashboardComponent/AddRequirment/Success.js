import React, { Component } from "react";
import "./notification.css";
import { Link } from "react-router-dom";
import { paymentStatusAction } from "../../../Actions/OrderActions/PaymentStatusAction";
import PaymentSuccessClass from "../../../BusinessLogics/ActionLogics/OrderLogics/PaymentStatusClass";
import { connect } from "react-redux";

class PaymnetSuccessPage extends Component {
  state = {
    successComponent: false,
    Code: ""
  };
  handleSuccessVisibility = () => {
    this.setState({ successComponent: true });
  };
  componentDidMount() {
    this.props.paymentStatusAction(
      new PaymentSuccessClass(this.props.match.params.code)
    );
  }
  render() {
    // this.setState({ Code:  });

    return (
      <React.Fragment>
        <div style={{ paddingTop: "5%" }}>
          <div class="notify successbox">
            <div class="row">
              <div class="col-lg-12" style={{ float: "left" }}>
                <h1>Success!</h1>
              </div>
            </div>
            <div class="col-lg-12">
              <p style={{ marginLeft: "-16px" }}>
                Dear user your order have been successfully placed with
                successfull payment. Please{" "}
                <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                  {" "}
                  continue
                </Link>{" "}
                to go to your dashboard.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  paymentStatus: state.MakeOrderReducer.paymentStatusList
});

export default connect(
  mapStateToProps,
  { paymentStatusAction }
)(PaymnetSuccessPage);
