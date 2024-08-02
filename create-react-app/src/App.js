import { useEffect, useLayoutEffect, useInsertionEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  useLayoutEffect(() => {
    console.log('Hi useLayoutEffect');
  }, []);

  useInsertionEffect(() => {
    console.log('Hi useInsertionEffect');
  }, []);

  useEffect(() => {
    console.log('Hi useEffect');
  }, []);
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Playing...
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
