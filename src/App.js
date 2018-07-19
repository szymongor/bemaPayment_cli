import React, { Component } from 'react';
import Login from './components/login/Login';
import Navigation from './components/navigation/Navigation';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/main" component={Navigation} />
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
