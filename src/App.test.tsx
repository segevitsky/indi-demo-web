import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app heading', () => {
  render(<App />);
  const heading = screen.getByText(/Indi Demo - User Management/i);
  expect(heading).toBeInTheDocument();
});
