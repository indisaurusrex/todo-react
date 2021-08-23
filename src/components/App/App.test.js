import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import App from './App';
import regenerator from 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

// move out somewhere else, if they're needed for multiple 
// consider whether to remake them or reuse them
const mockTodosFour = [
  {
    id: 111,
    title: 'Hotel booking for holiday',
    location: 'House',
    done: true,
  },
  {
    id: 112,
    title: 'Walk the dog',
    location: 'Victoria Park',
    done: false,
  },
  {
    id: 113,
    title: 'Entertain the goldfish',
    location: 'Living room',
    done: false,
  },
  {
    id: 114,
    title: 'Put shoes on',
    location: 'Near the door',
    done: false,
  },
];

const mockTodosFourV2 = [
  {
    id: 111,
    title: 'Hotel booking for holiday',
    location: 'House',
    done: true,
  },
  {
    id: 112,
    title: 'Walk the dog',
    location: 'Victoria Park',
    done: false,
  },
  {
    id: 113,
    title: 'Entertain the goldfish',
    location: 'Living room',
    done: false,
  },
  {
    id: 114,
    title: 'Put shoes on',
    location: 'Near the door',
    done: false,
  },
];

describe('App component', () => {
  it('loads the app with the title', async () => {
    render(<App />);
    const headerText = screen.getByText(/Do these things/);
    expect(headerText).toBeInTheDocument();
  });
});
