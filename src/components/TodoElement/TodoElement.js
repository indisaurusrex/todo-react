import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoElement.module.css';

const editButton = 'Edit';
const cancel = 'Cancel';
const save = 'Save';
const remove = 'x';

/**
 * Each item on the todo is rendered with this,
 * it also handles editing the title, removing and holding the checkbox for done
 */
const TodoElement = ({
  item,
  changeCheckbox,
  removeTodo,
  updateTodo,
}) => {
  // rename to due date of instead of the date
  const theDate = new Date(item.dueDate);
  // add into the process date time function as well as the below
  const hours = `0${theDate.getHours()}`.slice(-2);
  const mins = `0${theDate.getMinutes()}`.slice(-2);
  const [todoTitle, setTodoTitle] = useState(item.title);
  const [edit, setEdit] = useState(false);

  const handleEditChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const saveEdit = (id) => {
    updateTodo(id, todoTitle);
    toggleEdit();
  };

  return (
    <tr>
      {!edit ? (
        <th data-testid="todoTitle">
          <div className={styles.todo}>
            {`${item.title} `}
            <button type="submit" onClick={toggleEdit}>
              {editButton}
            </button>
          </div>
        </th>
      ) : (
        <td>
          <input
            type="text"
            value={todoTitle}
            name="todo"
            onChange={handleEditChange}
          />
          &nbsp;
          <button type="submit" onClick={toggleEdit}>
            {cancel}
          </button>
          &nbsp;
          <button type="submit" onClick={() => saveEdit(item.id)}>
            {save}
          </button>
        </td>
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
          {remove}
        </button>
      </th>
    </tr>
  );
};

export default TodoElement;

TodoElement.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};
