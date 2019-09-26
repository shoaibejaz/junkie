import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./error.css";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>Oops!</h1>
            </div>
            <h2>404 - Page not found</h2>
            <p>{this.props.P}</p>
            <Link to="/">
              <a>Go To Homepage</a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorPage;
