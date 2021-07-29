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
    dueDate: 1625059800000, // 30th June 2:30pm
    done: true,
  },
  {
    id: 112,
    title: 'Walk the dog',
    location: 'Victoria Park',
    dueDate: 1625146200000, // 1st July 2:30pm
    done: false,
  },
  {
    id: 113,
    title: 'Entertain the goldfish',
    location: 'Living room',
    dueDate: 1625232600000, // 2nd July 2:30pm
    done: false,
  },
  {
    id: 114,
    title: 'Put shoes on',
    location: 'Near the door',
    dueDate: 1625232600000, // 2nd July 2:30pm
    done: false,
  },
];

const mockTodosFourV2 = [
  {
    id: 111,
    title: 'Hotel booking for holiday',
    location: 'House',
    dueDate: 1625059800000, // 30th June 2:30pm
    done: true,
  },
  {
    id: 112,
    title: 'Walk the dog',
    location: 'Victoria Park',
    dueDate: 1625146200000, // 1st July 2:30pm
    done: false,
  },
  {
    id: 113,
    title: 'Entertain the goldfish',
    location: 'Living room',
    dueDate: 1625232600000, // 2nd July 2:30pm
    done: false,
  },
  {
    id: 114,
    title: 'Put shoes on',
    location: 'Near the door',
    dueDate: 1625232600000, // 2nd July 2:30pm
    done: false,
  },
];

describe('App component', () => {
  it('loads the app with the title', async () => {
    render(<App />);
    const headerText = screen.getByText(/Do these things/);
    expect(headerText).toBeInTheDocument();
  });

  // it('progress percent increases appropriately when you tick a box', async () => {
  //   render(<App todoProp={mockTodosFour} />);
  //   expect(screen.getByTestId('Progress')).toHaveTextContent('25% done');
  //   fireEvent.click(document.getElementById('112'));
  //   expect(screen.getByTestId('Progress')).toHaveTextContent('50% done');
  // });
  // destructure getByText, getByDataId from render
  // expect getByText 25% done toBeInDocument
  // fireEvent.click getByDataId '112'
  // expect getByText 50% done toBeInDocument

  // it('decreases done percent when a box is unticked', async () => {
  //   render(<App todoProp={mockTodosFour} />);
  //   fireEvent.click(document.getElementById('111'));
  //   expect(screen.getByTestId('Progress')).toHaveTextContent('25% done');
  // });

// move it to the todolist for the sorting
  // it('shows the todos that are done at the bottom of the list', async () => {
  //   render(<App todoProp={mockTodosFourV2} />);
  //   const listOfTodos = screen.getAllByTestId('todoTitle');
  //   const lastTodo = listOfTodos[listOfTodos.length - 1];
  //   expect(lastTodo).toHaveTextContent('Hotel booking for holiday');
  // });
});
