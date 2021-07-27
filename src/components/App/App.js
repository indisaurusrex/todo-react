import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import styles from './App.module.css';
import createTodoList from '../../app/todoListCreator';
import findNextId from '../../app/findNextId';

const header = 'Do these things:';

/**
 * Renders the app, holds most functions that affect the todo list
 */
const App = ({ todos }) => {
  const [items, setItems] = useState(todos);

  const removeTodo = (itemId) => {
    const remainingTodos = items.filter((todo) => todo.id !== itemId);
    setItems(remainingTodos);
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
  };

  const addTodo = (item) => {
    const tempItems = items;
    const tempItem = item;
    tempItem.id = findNextId(items);
    tempItem.done = false;
    tempItems.push(tempItem);
    setItems([...tempItems]);
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
  };

  return (
    <div>
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
    </div>
  );
};

export default App;

App.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.array]),
};

App.defaultProps = {
  todos: createTodoList(),
};
