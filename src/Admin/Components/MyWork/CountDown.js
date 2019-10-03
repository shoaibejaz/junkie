import React, { Component } from "react";
import Timer from "./Timer";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{ date: "October 31, 2019" }]
    };
  }

  render() {
    let events = this.state.events.map(evt => (
      <Timer
        key={evt.date}
        acceptedOrders={this.props.acceptedOrders}
        eventDate={evt.date}
      />
    ));
    return <div className="App">{events}</div>;
  }
}

export default CountDown;
