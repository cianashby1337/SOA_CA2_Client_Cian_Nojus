import React from 'react';
import { render } from '@testing-library/react';
import Tab1 from './Tab1';

test('renders without crashing', () => {
  const { baseElement } = render(<Tab1 />);
  expect(baseElement).toBeDefined();
});
