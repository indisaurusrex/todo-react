import React from 'react';
import PropTypes from 'prop-types';
// import TodoElement from '../TodoElement/TodoElement';
import EditableTodo from '../EditableTodo.js/EditableTodo';
import styles from './TodoList.module.css';
import todoListSorter from '../../app/todoListSorter';

/**
 * The table headers and holder for the todos to sit in
 */
const TodoList = ({
  items,
  changeCheckbox,
  removeTodo,
  updateDetails,
  updateTodo,
}) => {
  const sortedTodos = todoListSorter(items).map((item) => (
    <EditableTodo
      key={item.id}
      item={item}
      updateTodo={updateTodo}
      updateDetails={updateDetails}
      id={item.id}
      changeCheckbox={changeCheckbox}
      removeTodo={removeTodo}
    />
  ));
    // <TodoElement
    //   key={item.id}
    //   item={item}
    //   changeCheckbox={changeCheckbox}
    //   removeTodo={removeTodo}
    //   updateTodo={updateTodo}
    // />

  return (
    <div className={styles.container}>
      <table className={styles.todoTable}>
        <tbody>{sortedTodos}</tbody>
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
  updateDetails: PropTypes.func.isRequired,
};
