import React from 'react';
import { render } from '@testing-library/react';
import Tab2 from './Tab2';

import { GoogleOAuthProvider } from '@react-oauth/google';


test('renders without crashing', () => {
  const { baseElement } = render(<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_LOGIN}><Tab2 login={null}/></GoogleOAuthProvider>);
  expect(baseElement).toBeDefined();
});
