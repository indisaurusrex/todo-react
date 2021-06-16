/* eslint-disable import/no-cycle */

import React from 'react';
import PropTypes from 'prop-types';
import { TodoElement } from '../internal';

export function TodoList({ items, changeCheckbox, removeTodo }) {
  const sortedList = [...items];

  sortedList.sort((x, y) => x.done - y.done || x.dueDate - y.dueDate);

  const rows = sortedList.map((item) => (
    <TodoElement
      key={item.id}
      item={item}
      changeCheckbox={changeCheckbox}
      removeTodo={removeTodo}
    />
  ));

  return (
    <div>
      <table className="todo-table">
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
