// import { useState } from "react";
import Display from './components/Display';
import './App.css';

const App = () => {
  const appName = 'ahfarmer-calculator';

  return (
    <div className="App">
      <header className="App-header">
        <h3>{appName}</h3>
      </header>
      <div className="component-app">
        <Display value="-9876543210+/*%" />
      </div>
    </div>
  );
};

export default App;
