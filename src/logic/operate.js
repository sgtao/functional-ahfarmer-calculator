import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0')); // If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    // console.log(two);
    if (two.toNumber() === 0) {
      window.alert('Divide by 0 error'); // eslint-disable-line no-alert
      return '0';
    }
    return one.div(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
