import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="App-header-left">
                <img src={logo} className="image"/>
            </div>
        </header>
        </div>
    );
  }
}

export default App;
