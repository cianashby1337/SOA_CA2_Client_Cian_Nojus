import React from 'react';
import { render } from '@testing-library/react';
import Tab3 from './Tab3';

test('renders without crashing', () => {
  const { baseElement } = render(<Tab3 />);
  expect(baseElement).toBeDefined();
});
