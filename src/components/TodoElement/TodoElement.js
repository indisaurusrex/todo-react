/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoElement.module.css';

export default function TodoElement({ item, changeCheckbox, removeTodo }) {
  const theDate = new Date(item.dueDate);
  const hours = `0${theDate.getHours()}`.slice(-2);
  const mins = `0${theDate.getMinutes()}`.slice(-2);
  const [todo, setTodo] = useState(item.title);
  const [edit, setEdit] = useState(false);

  const handleEditChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleEditSubmit = (id) => {
    updateTodo(id, todo);
    handleEdit();
  };

  return (
    <tr>
      {/* <th className={styles.todo}>{item.title}</th> */}
      {!edit ? (
        <>
          <th className={styles.todo}>{item.title}</th>
          <button onClick={handleEdit}>edit</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={todo}
            name="todo"
            onChange={handleEditChange}
          />
          <button onClick={handleEdit}>cancel</button>
          <button type="submit" onClick={() => handleEditSubmit(item.id)}>
            save
          </button>
        </>
      )}
      <th className={styles.todo}>{item.location}</th>
      <th className={styles.todo}>
        {`${theDate.toLocaleDateString('en-US', {
          day: 'numeric',
        })} ${theDate.toLocaleDateString('en-US', {
          month: 'short',
        })} ${hours}:${mins}`}
      </th>
      <th className={styles.todo}>
        <input
          id={item.id}
          type="checkbox"
          defaultChecked={item.done}
          onChange={() => {
            changeCheckbox(item);
          }}
        />
        <button
          type="button"
          className={styles.removeTodo}
          onClick={() => {
            removeTodo(item.id);
          }}
        >
          x
        </button>
      </th>
    </tr>
  );
}

TodoElement.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
