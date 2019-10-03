import React from "react";
import "./countDown.css";

import { extentDeliveryTime } from "../../Actions/OrdersActions/ExtendOrderTime";
import ExtendOrderTimeClass from "../../BusinessLogics/ActionLogics/OrderLogics/ExtendOrderTimeClass";
import { connect } from "react-redux";

class Timer extends React.Component {
  state = {
    startTimer: "",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    loading: false
  };

  componentDidMount() {
    setInterval(
      () =>
        this.getTimeDifference(
          this.state.startTimer === ""
            ? this.props.acceptedOrders.timer
            : this.state.startTimer
        ),
      1000
    );
  }

  leadingZero(num) {
    return num < 10 && num > 0 ? "0" + num : num;
  }

  initiateTimer = initialTime => {
    if (initialTime > 0) {
      this.setState({ startTimer: initialTime });
    }
  };

  getTimeDifference(time1) {
    let time = 0;
    if (time1 > 0) {
      time = time1 - 1000;
    }
    this.initiateTimer(time);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div>
        {this.state.days === 0 ? (
          ""
        ) : (
          <div className="clock">
            {this.leadingZero(this.state.days ? this.state.days : "00")}:
          </div>
        )}
        {this.state.hours === 0 ? (
          ""
        ) : (
          <div className="clock">
            {this.leadingZero(this.state.hours ? this.state.hours : "00")}:
          </div>
        )}
        {this.state.minutes === 0 ? (
          ""
        ) : (
          <div className="clock">
            {this.leadingZero(this.state.minutes ? this.state.minutes : "00")}:
          </div>
        )}
        {this.state.seconds === 0 ? (
          ""
        ) : (
          <div className="clock">
            {this.leadingZero(this.state.seconds ? this.state.seconds : "00")}
          </div>
        )}
        {this.props.acceptedOrders.timeExtendStatus}
        {this.state.seconds === 0 ? (
          ""
        ) : this.props.acceptedOrders.timeExtendStatus === false ? (
          ""
        ) : (
          <div className="clock">
            <button
              onClick={() => {
                if (!this.state.loading) {
                  this.setState(
                    {
                      loading: true
                    },
                    () => {
                      this.timer = setTimeout(() => {
                        window.location.reload();
                      }, this.state.loading === false);
                      this.props.extentDeliveryTime(
                        new ExtendOrderTimeClass(
                          this.props.acceptedOrders._orderId
                        ),
                        this
                      );
                    }
                  );
                }
              }}
              class="btn"
            >
              {this.state.loading && <i class="spinner-border" role="status" />}
              {this.state.loading && <span>Extending</span>}
              {!this.state.loading && <span>Extend Time upto 12 hours</span>}
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { extentDeliveryTime }
)(Timer);
