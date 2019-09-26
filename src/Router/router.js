import React, { Component } from "react";
import history from "./history";
import { Route, Switch, Router } from "react-router-dom";

/////////////////////// User Side Components ////////////////////////////
import Dashboard from "../Usr/Views/Dashboard";
import AddRequirment from "../Usr/Views/AddRequirements";
import AboutUs from "../Usr/Views/AboutUs";
import Calculator from "../Usr/Views/Calculator";
import LandingPage from "../Usr/Views/LandingPage";
import LoginPage from "../Usr/Views/Login";
import Email from "../Usr/Views/Email";
import VerifyCode from "../Usr/Views/VerifyCode";
import ForgetPassword from "../Usr/Views/ForgetPassword";
import OrderNow from "../Usr/Views/OrderNow";
import Testmonials from "../Usr/Views/Testmonials";
import ContactUs from "../Usr/Views/ContactUs";
import FAQ from "../Usr/Views/FAQ";
import UsrProfile from "../Usr/Views/UsrProfile";
import SignUp from "../Usr/Views/SignUp";
import Error from "../Usr/Views/Error";
import PaymentSuccess from "../Usr/Views/PaymnetSuccess";
import PaymentCancel from "../Usr/Views/PaymentCancel";
import CalculatorPanel from "../Usr/Views/CalculatorPanel";
///////////////////// Transcriptor Side Components /////////////////////////
import TLogin from "../Admin/Views/TLogin";
import TDashboard from "../Admin/Views/TDashboard";
import TMyWork from "../Admin/Views/TMyWork";
import TCompletedWork from "../Admin/Views/TCompletedWork";
//////////////////// Super Admin Side Components ////////////////////////////
import SALogin from "../SuperAdmin/Views/SALogin";
import SAContactUsInfo from "../SuperAdmin/Views/SAContactUSInfo";
import SAAddTranscriptorsProfile from "../SuperAdmin/Views/SAAddTranscriptorsProfile";
import SATranscriptorsOrderInfo from "../SuperAdmin/Views/SATranscriptorsOrderInfo";
// import SADashboard from "../SuperAdmin/Views/SADashboard";

class Routing extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* User Side  */}

            {/* LandingPage */}
            <Route
              exact
              path="/"
              render={props => <LandingPage {...props} />}
            />
            {/* AboutUs */}
            <Route
              exact
              path="/About"
              render={props => <AboutUs {...props} />}
            />
            <Route
              exact
              path="/Calculator"
              render={props => <Calculator {...props} />}
            />
            {/* Services */}
            <Route
              exact
              path="/Dashboard"
              render={props => <Dashboard {...props} />}
            />
            {/* RequirmentForm */}
            <Route
              exact
              path="/AddRequirment"
              render={props => <AddRequirment {...props} />}
            />
            {/* OrderNow */}
            <Route
              exact
              path="/OrderNow"
              render={props => <OrderNow {...props} />}
            />
            {/* LoginPage */}
            <Route
              exact
              path="/Login"
              render={props => <LoginPage {...props} />}
            />
            {/* Email */}
            <Route exact path="/Email" render={props => <Email {...props} />} />
            {/* VerifyCode */}
            <Route
              exact
              path="/VerifyCode"
              render={props => <VerifyCode {...props} />}
            />
            {/* ForgetPassword */}
            <Route
              exact
              path="/ForgetPassword"
              render={props => <ForgetPassword {...props} />}
            />
            {/* Testmonials */}
            <Route
              exact
              path="/Testmonials"
              render={props => <Testmonials {...props} />}
            />
            {/* Contact Us */}
            <Route
              exact
              path="/ContactUs"
              render={props => <ContactUs {...props} />}
            />
            {/* FAQ */}
            <Route exact path="/FAQ" render={props => <FAQ {...props} />} />
            {/* Usr Profile */}
            <Route
              exact
              path="/UsrProfile"
              render={props => <UsrProfile {...props} />}
            />
            {/* SignUp */}
            <Route
              exact
              path="/SignUp"
              render={props => <SignUp {...props} />}
            />
            {/* Error */}
            <Route exact path="/Error" render={props => <Error {...props} />} />
            {/* PaymentSuccess */}
            <Route
              path="/PaymentSuccess/:code"
              render={props => <PaymentSuccess {...props} />}
            />
            {/* PaymentCancel */}
            <Route
              exact
              path="/PaymentCancel"
              render={props => <PaymentCancel {...props} />}
            />
            {/* CalculatorPanel */}
            <Route
              exact
              path="/CalculatorPanel"
              render={props => <CalculatorPanel {...props} />}
            />

            {/* Transcriptor Side */}

            <Route
              exact
              path="/TLogin"
              render={props => <TLogin {...props} />}
            />
            <Route
              exact
              path="/TDashboard"
              render={props => <TDashboard {...props} />}
            />
            <Route
              exact
              path="/TMyWork"
              render={props => <TMyWork {...props} />}
            />
            <Route
              exact
              path="/TCompletedWork"
              render={props => <TCompletedWork {...props} />}
            />

            {/* SuperAdmin Side */}

            <Route
              exact
              path="/SALogin"
              render={props => <SALogin {...props} />}
            />
            <Route
              exact
              path="/SADashboard"
              render={props => <SATranscriptorsOrderInfo {...props} />}
            />
            <Route
              exact
              path="/SAContactUsInfo"
              render={props => <SAContactUsInfo {...props} />}
            />
            <Route
              exact
              path="/SAAddTranscriptorsProfile"
              render={props => <SAAddTranscriptorsProfile {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routing;
