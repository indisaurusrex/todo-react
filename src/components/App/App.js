import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import rainbow from '../../images/rainbow.png';
import tree from '../../images/pine.png';
import styles from './App.module.css';
import createTodoList from '../../app/todoListCreator';
import findNextId from '../../app/findNextId';

const header = 'Do these things:';
/**
 * Renders the app, holds most functions that affect the todo list
 */
const App = ({ todos }) => {
  const [items, setItems] = useState(todos);
  // moving out
  const [isFormDisplay, setIsFormDisplay] = useState(false);
  //  mmoving into new component
  const [rainbowBackground, setRainbowBackground] = useState(false);
  const [treeToggle, setTreeToggle] = useState(false);

  // Should this be in todoList?
  const removeTodo = (itemId) => {
    const remainingTodos = items.filter((todo) => todo.id !== itemId);
    setItems(remainingTodos);
  };

  // should this be in todoList?
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

  // should this be in todoList?
  const addTodo = (item) => {
    const tempItems = items;
    const tempItem = item;
    tempItem.id = findNextId(items);
    tempItem.done = false;
    tempItems.push(tempItem);
    setItems([...tempItems]);
  };

  // this should be in todoList
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

  // this should be on header image
  const toggleForm = () => {
    setIsFormDisplay(!isFormDisplay);
  };

  // this can stay in app
  const toggleRainbow = () => {
    setRainbowBackground(!rainbowBackground);
  };

  // this should be on header image
  const toggleTreeImage = () => {
    setTreeToggle(!treeToggle);
  };

  // this can stay in app
  const backgroundChoice = rainbowBackground ? styles.rainbowBackground : '';

  return (
    <div className={backgroundChoice}>
      <div className={styles.app}>
        <Card className={styles.root}>
          <Header
            items={items}
            isFormDisplay={isFormDisplay}
            toggleForm={toggleForm}
            addTodo={addTodo}
            treeToggle={treeToggle}
          />
          <input
            type="image"
            alt="rainbow background toggle"
            className={styles.rainbowButton}
            src={rainbow}
            onClick={toggleRainbow}
          />
          <input
            type="image"
            alt="tree header image toggle"
            className={styles.treeButton}
            src={tree}
            onClick={toggleTreeImage}
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
