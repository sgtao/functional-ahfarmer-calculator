import { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate';
import './App.css';

const App = () => {
  const appName = 'ahfarmer-calculator';
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const state = {};
  state.total = total;
  state.next = next;
  state.operation = operation;

  // for update state by calculate at Button pressed
  const updateState = (setProperties) => {
    const keys = Object.keys(setProperties);
    keys.forEach((key) => {
      switch (key) {
        case 'total':
          setTotal(setProperties[key]);
          break;
        case 'next':
          setNext(setProperties[key]);
          break;
        default:
          setOperation(setProperties[key]);
          break;
      }
    });
  };
  let calculatedState = state;
  const handleClick = (buttonName) => {
    // setState(pressButton(state, calculate(state, buttonName)));
    // console.dir(state);
    calculatedState = calculate(state, buttonName);
    // console.dir(calculatedState);
    updateState(calculatedState);
    state.total = total;
    state.next = next;
    state.operation = operation;
    // console.dir(state);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>{appName}</h3>
      </header>
      <div className="component-app">
        <Display value={state.next || state.total || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
