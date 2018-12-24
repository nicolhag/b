import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{marginTop: '-2rem'}}>
            Lise & Morten<br />gifter seg
          </h1>
          <img class="bilde" src="mortenoglise.jpg" height="150px" width="150px" />
          <h1>
            7.9.2019
          </h1>
        </header>

      </div>
    );
  }
}

export default App;
