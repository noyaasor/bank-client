import React, { Component } from "react";
import Contact from "./../contact/contact";
import Employees from "./../employess/employees";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

export default class BankDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> BankDetails Page </h1>
        <div>
          <Link to="/bank-details/contact"> Go to contact Page </Link>
          <Link to="/bank-details/employees"> Go to employees Page </Link>
        </div>
        <div>
          <Route
            key="contact"
            path="/bank-details/contact"
            component={Contact}
          />
          <Route
            key="employees"
            path="/bank-details/employees"
            component={Employees}
          />
        </div>
      </div>
    );
  }
}
