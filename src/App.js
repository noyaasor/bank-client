import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Account from "./components/account/account";
import BankDetails from "./components/bank-details/bank-details";
import addAccount from "./components/add-account/add-account";

class App extends Component {
  componentDidMount() {
    console.log("app loaded!!!");
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2> Bank Application </h2>
          <div>
            <Link to="/account"> Go to Account Page </Link>
            <Link to="/bank-details"> Go to Bank Page </Link>
            <Link to="/add-account"> Go to add account </Link>
            <Link to="/operation"> deposit/withdraw </Link>
          </div>
          <div>
            <Switch>
              <Route key="account" path="/account" component={Account} />
              <Route
                key="bank-details"
                path="/bank-details"
                component={BankDetails}
              />
              <Route
                key="add-account"
                path="/add-account"
                component={addAccount}
              />
              <Redirect from="/" to="/account" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
