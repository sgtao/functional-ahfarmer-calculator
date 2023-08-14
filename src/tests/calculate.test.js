import calculate from '../logic/calculate';
import operate from '../logic/operate';

// emulate to update state by calculate at Button pressed
function pressButton(prevState, setProperties) {
  let updateState = prevState;
  const keys = Object.keys(setProperties);
  keys.forEach((key) => {
    updateState[key] = setProperties[key];
  });
  return updateState;
}

describe('calculate function', () => {
  it('should clear the calculator data on AC button press', () => {
    const result = calculate({ total: '100', next: '50', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle number button press', () => {
    let result = calculate({ total: '999', next: '999', operation: '+' }, 'AC');
    result = pressButton(result, calculate(result, '9'));
    result = pressButton(result, calculate(result, '8'));
    result = pressButton(result, calculate(result, '7'));
    result = pressButton(result, calculate(result, '6'));
    result = pressButton(result, calculate(result, '5'));
    result = pressButton(result, calculate(result, '.'));
    result = pressButton(result, calculate(result, '.')); // ignore case
    result = pressButton(result, calculate(result, '4'));
    result = pressButton(result, calculate(result, '3'));
    result = pressButton(result, calculate(result, '2'));
    result = pressButton(result, calculate(result, '1'));
    result = pressButton(result, calculate(result, '0'));
    expect(result).toEqual({ total: null, next: '98765.43210', operation: null });
  });

  it('should handle number button press at marlly case', () => {
    let result = calculate({ total: null, next: null, operation: null }, 'AC');
    result = pressButton(result, calculate(result, '+/-'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '.'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '.'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '1'));
    result = pressButton(result, calculate(result, '+/-'));
    expect(result).toEqual({ total: null, next: '-0.0001', operation: null });
    result = pressButton(result, calculate(result, '+'));
    result = pressButton(result, calculate(result, '8'));
    result = pressButton(result, calculate(result, '8'));
    result = pressButton(result, calculate(result, '+/-'));
    result = pressButton(result, calculate(result, '='));
    expect(result).toEqual({ total: '-88.0001', next: null, operation: null });
  });

  it('should handle number button press at zero case', () => {
    let result = calculate({ total: null, next: null, operation: null }, 'AC');
    result = pressButton(result, calculate(result, '.'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '.'));
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '1'));
    result = pressButton(result, calculate(result, '2'));
    result = pressButton(result, calculate(result, '+/-'));
    result = pressButton(result, calculate(result, '%'));
    expect(result).toEqual({ total: null, next: '-0.0000012', operation: null });
  });

  it('should handle + button press', () => {
    let result = calculate({ total: null, next: null, operation: null }, 'AC');
    // console.log(result); // { total: null, next: null, operation: null }
    result = pressButton(result, calculate(result, '0'));
    result = pressButton(result, calculate(result, '2'));
    // console.log(result);
    // -> { total: null, next: '2', operation: null }
    result = pressButton(result, calculate(result, '+'));
    // console.log(result);
    // -> { total: '2', next: null, operation: '+' }
    result = pressButton(result, calculate(result, '3'));
    // console.log(result);
    // -> { total: '2', next: '3', operation: '+' }
    result = pressButton(result, calculate(result, '='));
    // console.log(result);
    // -> { total: '5', next: null, operation: null }
    result = pressButton(result, calculate(result, '+/-'));
    expect(result).toEqual({ total: '-5', next: null, operation: null });
  });

  it('should handle - button press', () => {
    let result = calculate({ total: null, next: null, operation: null }, 'AC');
    result = pressButton(result, calculate(result, '='));
    result = pressButton(result, calculate(result, '5'));
    result = pressButton(result, calculate(result, '-'));
    result = pressButton(result, calculate(result, '2'));
    result = pressButton(result, calculate(result, '='));
    expect(result).toEqual({ total: '3', next: null, operation: null });
  });

  it('should handle x button press', () => {
    let result = calculate({ total: null, next: '5', operation: null }, 'x');
    result = pressButton(result, calculate(result, '2'));
    result = pressButton(result, calculate(result, '='));
    expect(result).toEqual({ total: '10', next: null, operation: null });
    result = pressButton(result, calculate(result, 'x'));
    result = pressButton(result, calculate(result, '2'));
    result = pressButton(result, calculate(result, 'x'));
    expect(result).toEqual({ total: '20', next: null, operation: 'x' });
  });

  it('should handle ÷ button press', () => {
    let result = calculate({ total: '10', next: '10', operation: null }, '÷');
    result = pressButton(result, calculate(result, '2'));
    result = pressButton(result, calculate(result, '='));
    expect(result).toEqual({ total: '5', next: null, operation: null });
  });
  it('should handle % button press at marely case', () => {
    let result = calculate({ total: null, next: null, operation: null }, 'AC');
    result = pressButton(result, calculate(result, '%'));
    // console.log(result);
    result = pressButton(result, calculate(result, '5'));
    // console.log(result);
    result = pressButton(result, calculate(result, 'x'));
    // console.log(result);
    result = pressButton(result, calculate(result, '4'));
    // console.log(result);
    result = pressButton(result, calculate(result, '%'));
    // console.log(result);
    result = pressButton(result, calculate(result, 'x'));
    // console.log(result);
    result = pressButton(result, calculate(result, '5'));
    // console.log(result);
    result = pressButton(result, calculate(result, '='));
    // console.log(result);
    expect(result).toEqual({ total: '1', next: null, operation: null });
  });
});
