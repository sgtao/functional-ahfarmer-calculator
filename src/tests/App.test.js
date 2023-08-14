import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extending Jest matchers
import App from '../App';

// テストケース
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ahfarmer-calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('ButtonコンポーネントをクリックしてStateが更新されるか', () => {
  const { getByText } = render(<App />);
  console.log(getByText);
  const displayValue = getByText('0');

  // '7'ボタンをクリック
  const button7 = getByText('7');
  fireEvent.click(button7);

  // 表示される値を確認
  expect(displayValue).toHaveTextContent('7');

  // '4'ボタンをクリック
  const button4 = getByText('4');
  fireEvent.click(button4);

  // 表示される値を確認
  expect(displayValue).toHaveTextContent('74');
});
