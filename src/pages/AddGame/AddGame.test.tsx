import React from 'react';
import { render } from '@testing-library/react';
import AddGame from './AddGame';

test('renders without crashing', () => {
  const { baseElement } = render(<AddGame isAdministrator={true}/>);
  expect(baseElement).toBeDefined();
});
