import React, { Component } from 'react';
import Login from './components/login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ePayment</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
