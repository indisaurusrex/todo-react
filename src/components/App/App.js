import React, { useState } from 'react';
import PropTypes from 'prop-types';
import randomWords from 'random-words';
import Card from '@material-ui/core/Card';
import HeaderImage from '../HeaderImage/HeaderImage';
import TodoList from '../TodoList/TodoList';
import rainbow from '../../images/rainbow.png';
import tree from '../../images/pine.png';
import styles from './App.module.css';

const todos = [];

for (let i = 0; i < 10; i += 1) {
  todos.push({
    id: i,
    title: randomWords({ exactly: 1, wordsPerString: 3 })[0],
    location: randomWords(),
    dueDate: Math.floor(Math.random() * 1000000000),
    done: Math.random() < 0.5,
  });
}

export default function App({ todoProp }) {
  const [items, setItems] = useState(todoProp);
  const [formDisplay, setFormDisplay] = useState(false);
  const [rainbowBackground, setRainbowBackground] = useState(false);
  const [treeToggle, setTreeToggle] = useState(false);

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

  const findNextId = () => {
    const newId = Math.max(...items.map((o) => o.id));
    return newId + 1;
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
    setItems(changedCheckboxList);
  };

  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  };

  const addTodo = (item) => {
    const tempItems = items;
    const tempItem = item;
    tempItem.id = findNextId();
    tempItem.done = false;
    tempItems.push(tempItem);
    setItems(tempItems);
    // console.log(item.dueDate); this is to find numbers for the tests, needs to be removed
  };

  const toggleRainbow = () => {
    setRainbowBackground(!rainbowBackground);
  };

  const toggleTreeImage = () => {
    setTreeToggle(!treeToggle);
  };

  const backgroundChoice = rainbowBackground ? styles.rainbowBackground : '';

  return (
    <div className={backgroundChoice}>
      <div className={styles.app}>
        <Card className={styles.root}>
          <HeaderImage
            items={items}
            formDisplay={formDisplay}
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

          <h1>Do these things:</h1>
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
}

App.propTypes = {
  todoProp: PropTypes.oneOfType([PropTypes.array]),
};

App.defaultProps = {
  todoProp: todos,
};
