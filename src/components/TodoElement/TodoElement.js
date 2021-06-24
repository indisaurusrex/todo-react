import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoElement.module.css';

export default function TodoElement({ item, changeCheckbox, removeTodo }) {
  const theDate = new Date(item.dueDate);
  const hours = `0${theDate.getHours()}`.slice(-2);
  const mins = `0${theDate.getMinutes()}`.slice(-2);

  return (
    <tr>
      <th className={styles.todoHeader}>{item.title}</th>
      <th className={styles.todoHeader}>{item.location}</th>
      <th className={styles.todoHeader}>
        {`${theDate.toLocaleDateString('en-US', {
          day: 'numeric',
        })} ${theDate.toLocaleDateString('en-US', {
          month: 'short',
        })} ${hours}:${mins}`}
      </th>
      <th className={styles.todoHeader}>
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
