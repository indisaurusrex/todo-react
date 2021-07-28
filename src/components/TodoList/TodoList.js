import React from 'react';
import PropTypes from 'prop-types';
import TodoElement from '../TodoElement/TodoElement';
import styles from './TodoList.module.css';
import todoListSorter from '../../app/todoListSorter';

const title = 'Title';
const location = 'Location';
const due = 'Due';
const done = 'Done';

/**
 * The table headers and holder for the todos to sit in
 */
const TodoList = ({
  items,
  changeCheckbox,
  removeTodo,
  updateTodo,
}) => {
  const rows = todoListSorter(items).map((item) => (
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
            <th>{title}</th>
            <th>{location}</th>
            <th>{due}</th>
            <th>{done}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};
