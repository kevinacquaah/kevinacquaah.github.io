import React from 'react';
import logo from './KEVIN.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code> Hello, my name is Kevin Acquaah and i'm going to master React!.</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/kevinacquaah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
