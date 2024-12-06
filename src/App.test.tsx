import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});


test('doesn\'t immediately allow access to toolbar', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).not.toContainHTML("<ion-label><!---->AddGame</ion-label>");
});
