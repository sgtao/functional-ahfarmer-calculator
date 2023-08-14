// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extending Jest matchers
import Button from '../components/Button'; // テスト対象のコンポーネントをインポート

// テストケース
test('Buttonコンポーネントが正しく描画され、クリックが機能するか', () => {
  // テスト用のクリックハンドラを作成
  const mockClickHandler = jest.fn();

  // Buttonコンポーネントをレンダリング
  const { getByText, container } = render(
    <Button clickHandler={mockClickHandler} name="5" orange={false} wide={false} />
  );

  // ボタンが正しく描画されているかを確認
  const button = getByText('5');
  expect(button).toBeInTheDocument();

  // ボタンをクリック
  fireEvent.click(button);

  // クリックハンドラが呼ばれたことを確認
  expect(mockClickHandler).toHaveBeenCalledWith('5');

  // コンポーネントの親要素のクラス名が正しいことを確認
  const componentButton = container.firstChild;
  expect(componentButton).toHaveClass('component-button');
});

// 他のテストケースを追加できます
