import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TooltipInfo } from 'web-components-ts';

function App() {


  // const [count, setCount] = React.useState<string>(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TooltipInfo title="TooltipInfo default sample." />
      </header>
    </div>
  );
}

export default App;
