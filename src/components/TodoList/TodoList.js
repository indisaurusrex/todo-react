/* eslint-disable import/no-cycle */
/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { TodoElement } from '../internal';
import styles from './TodoList.module.css';

export function TodoList({ items, changeCheckbox, removeTodo, updateTodo }) {
  const sortedList = [...items];

  sortedList.sort((x, y) => x.done - y.done || x.dueDate - y.dueDate);

  const rows = sortedList.map((item) => (
    <TodoElement
      key={item.id}
      item={item}
      changeCheckbox={changeCheckbox}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  ));

  return (
    <div>
      <table className={styles.todoTable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Due</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
