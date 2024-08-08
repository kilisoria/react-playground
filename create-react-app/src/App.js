import { useEffect, useLayoutEffect, useInsertionEffect, useState, useCallback } from 'react';

import { Button } from '@mui/material';

import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    console.log('Hi useLayoutEffect');
  }, []);

  useInsertionEffect(() => {
    console.log('Hi useInsertionEffect');
  }, []);

  useEffect(() => {
    console.log('this is useEffect');
  }, []);

    const handleOnClick = () => {
      setValue(value + 1);
    };
  
  const handleOnSecondClick = useCallback(() => {
    return new Date().getMilliseconds();
  }, []);
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Playing...
        </p>
        <p>{`Count: ${value}`}</p>
        <Button variant="text" color="info" onClick={handleOnClick}>Increment</Button>
        <Button variant="outlined" color="info" onClick={handleOnSecondClick}>confirm</Button>
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
