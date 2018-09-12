import React, { Component } from "react";
import Login from "./components/login/Login";
import Navigation from "./components/navigation/Navigation";
import BillsTable from "./components/bills/bills_table";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarLayout from "./components/navbar/navbar";

const LoginContainer = () => (
  <div>
    <Route path="/" component={Login} exact />
  </div>
);

const DefaultContainer = () => (
  <div>
    <NavbarLayout />
    <Route path="/main" component={Navigation} exact />
    <Route path="/bills" component={BillsTable} exact />
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
          <Route component={DefaultContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

/* <div className="App">
  <header className="App-header">
    <h1 className="App-title">Welcome to ePayment</h1>
  </header>
  <Login />
</div> */
