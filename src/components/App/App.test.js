import React from 'react';
import App from '../App/App';
import { render, screen } from '@testing-library/react';
import regenerator from 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

test('loads the items from the list', async () => {
  render(<App />);
  const headerText = screen.getByText(/ToDo List App/);
  expect(headerText).toBeInTheDocument();
});
