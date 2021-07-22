import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders grow above and beyond', () => {
  render(<App />);
  const linkElement = screen.getByText(/grow above and beyond/i);
  expect(linkElement).toBeInTheDocument();
});
