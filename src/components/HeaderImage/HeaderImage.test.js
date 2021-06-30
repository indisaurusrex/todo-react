import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderImage from './HeaderImage';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

// test the progress is accurate when you add a new item
// test the progress is accurate with the initial props passed in
const basicItems = [
  {
    id: 1,
    title: 'thing1',
    location: 'there',
    dueDate: '2021-05-31',
    dueTime: '14:00',
    done: true,
  },
  {
    id: 2,
    title: 'thing2',
    location: 'here',
    dueDate: '2021-05-31',
    dueTime: '13:00',
    done: true,
  },
  {
    id: 3,
    title: 'thing3',
    location: 'there',
    dueDate: '2021-05-31',
    dueTime: '09:00',
    done: false,
  },
  {
    id: 4,
    title: 'thing4',
    location: 'here',
    dueDate: '2021-05-31',
    dueTime: '10:00',
    done: false,
  },
];

describe('HeaderImage component', () => {
  const toggleForm = jest.fn();
  const addTodo = jest.fn();

  it('renders progress to 50% on initiation', () => {
    render(<HeaderImage
      items={basicItems}
      formDisplay={false}
      toggleForm={toggleForm}
      addTodo={addTodo}
      treeToggle={false}
    />);

    expect(screen.getByTestId('Progress')).toHaveTextContent('50% done');
  });

  it('updates progress if another item is added', () => {
    const anotherTodo = {
      id: 5,
      title: 'Walk dog',
      location: 'Hyde Park',
      dueDate: '2021-06-30',
      dueTime: '10:00',
      done: false,
    };

    basicItems.push(anotherTodo);

    render(<HeaderImage
      items={basicItems}
      formDisplay={false}
      toggleForm={toggleForm}
      addTodo={addTodo}
      treeToggle={false}
    />);

    expect(screen.getByTestId('Progress')).toHaveTextContent('40% done');
  });

  it('updates progress to 100% if all items are done', () => {
    const updatedItems = basicItems.map((item) => {
      if (item.done === false) {
        return { ...item, done: true };
      }
      return item;
    });

    render(<HeaderImage
      items={updatedItems}
      formDisplay={false}
      toggleForm={toggleForm}
      addTodo={addTodo}
      treeToggle={false}
    />);

    expect(screen.getByTestId('Progress')).toHaveTextContent('100% done');
  });
});
