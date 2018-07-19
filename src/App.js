import React, { Component } from 'react';
import Login from './components/login/Login';
import Navigation from './components/navigation/Navigation';
import BillsTable from './components/bills/bills_table';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/main" component={Navigation} />
          <Route path="/bills" component={BillsTable} />
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
