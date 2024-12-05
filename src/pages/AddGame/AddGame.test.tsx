import React from 'react';
import { render } from '@testing-library/react';
import AddGame from './AddGame';
import AddGameForm from './AddGameForm';


test('renders without crashing', () => {
  const { baseElement } = render(<AddGame isAdministrator={true}/>);
  expect(baseElement).toBeDefined();
});

test('shows game form', () => {
  const { baseElement } = render(<AddGame isAdministrator={true}/>);
  expect(baseElement).toContainHTML("<p>Game Title:</p>");
});

test('restricts access to game form', () => {
  const { baseElement } = render(<AddGame isAdministrator={false}/>);
  expect(baseElement).toContainHTML("<p>We're sorry, but you do not have the correct permissions to add a game to our database. Please contact an administrator if you believe you should be allowed to add games.</p>");
});