import React from 'react';
import { render } from '@testing-library/react';
import AddGameForm from './AddGameForm';

test('renders without crashing', () => {
  const { baseElement } = render(<AddGameForm isAdministrator={true}/>);
  expect(baseElement).toBeDefined();
});
