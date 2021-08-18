import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css';
import generateId from '../../app/generateId';
import rainbow from '../../images/rainbow.png';

const header = 'Do these things:';
const startTodo = [
  {
    id: 1,
    title: "I'm just a humble example, remove me and write your own :)",
    location: 'Kitchen',
    dueDate: 1625232600000,
    done: false,
  },
];
// const rainbowBtnLabel = '(change background)';

/**
 * Renders the app, holds most functions that affect the todo list
 */
const App = ({ todos }) => {
  const todosFromStorage = JSON.parse(localStorage.getItem('items') || todos);
  const [items, setItems] = useState(todosFromStorage);
  const [rainbowBackground, setRainbowBackground] = useState(false);

  const toggleRainbow = () => {
    setRainbowBackground(!rainbowBackground);
  };

  const removeTodo = (itemId) => {
    const remainingTodos = items.filter((todo) => todo.id !== itemId);
    setItems(remainingTodos);
    localStorage.setItem('items', JSON.stringify(remainingTodos));
  };

  const updateTodo = (id, newTitle) => {
    const updatedTodos = items;
    updatedTodos.map((todo) => {
      const newTodo = todo;
      if (id === todo.id) {
        newTodo.title = newTitle;
      }
      return newTodo;
    });
    setItems(updatedTodos);
    localStorage.setItem('items', JSON.stringify(updatedTodos));
  };

  const addTodo = (item) => {
    const tempItems = items;
    const tempItem = item;
    tempItem.id = generateId(items);
    tempItem.done = false;
    tempItems.push(tempItem);
    setItems([...tempItems]);
    localStorage.setItem('items', JSON.stringify(tempItems));
  };

  const handleCheckboxChange = (item) => {
    const changedCheckboxList = [];
    const changedItem = item;
    items.forEach((todo) => {
      if (todo.id === changedItem.id) {
        changedItem.done = !item.done;
        changedCheckboxList.push(changedItem);
      } else {
        changedCheckboxList.push(todo);
      }
    });
    setItems([...changedCheckboxList]);
    localStorage.setItem('items', JSON.stringify(changedCheckboxList));
  };

  return (
    <div className={rainbowBackground ? styles.rainbowBackgroundCss : styles.whiteBackgroundCss}>
      <div className={styles.app}>
        <Card className={styles.root}>
          <Header
            items={items}
            addTodo={addTodo}
          />
          <h1>{header}</h1>
          <TodoList
            items={items}
            changeCheckbox={handleCheckboxChange}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </Card>
      </div>
      <input type="image" alt="rainbow background toggle" className={styles.rainbowButton} src={rainbow} onClick={toggleRainbow} />
      {/* <div className={styles.rainbowButtonLabel}>{rainbowBtnLabel}</div> */}
    </div>
  );
};

export default App;

App.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.array]),
};

App.defaultProps = {
  todos: startTodo,
};
