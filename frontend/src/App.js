import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const makeApiRequest = () => {
    console.log(`%c --CHECK [1]--`,"color: red; font-size: 12px; font-family: Roboto", 'MAKE API');
    axios('api/test-with-current-user').then((response) => {
      console.log(`%c --CHECK [1]--`,"color: red; font-size: 12px; font-family: Roboto", response);
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.111555
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>make Api Request</button>
    </div>
  );
}

export default App;
