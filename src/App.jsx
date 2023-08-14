import { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import calculate from './logic/calculate';
import './App.css';

const App = () => {
  const appName = 'ahfarmer-calculator';
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>{appName}</h3>
      </header>
      <div className="component-app">
        <Display value={state.next || state.total || '0'} />
        <Button clickHandler={handleClick} name="7" orange />
        <Button clickHandler={handleClick} name="4" />
        <Button clickHandler={handleClick} name="1" wide />
      </div>
    </div>
  );
};

export default App;
