import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from 'react-hook-form';
import styles from './AddNewTodo.module.css';

const missingTitle = 'Please enter a title';
const missingLocation = 'Please enter a location';
const submit = 'Submit';
const addAnItem = 'Add an item';

/**
 * This component has the button and form to add a new todo to the list
 */
const AddNewTodo = ({ isFormDisplaying, toggleFormDisplaying, addTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdd = (data) => {
    const todo = {
      title: data.title,
      location: data.location,
    };
    addTodo(todo);
    reset();
    toggleFormDisplaying();
  };

  const formDisplayer = isFormDisplaying ? '' : styles.addAppointment;

  return (
    <div>
      <div className={`${formDisplayer}`}>
        <Button
          size="small"
          startIcon={<AddCircleIcon />}
          onClick={toggleFormDisplaying}
        >
          {addAnItem}
        </Button>
        <div className={styles.cardBody}>
          <div className={styles.addTodoCard}>
            <form onSubmit={handleSubmit(handleAdd)}>
              <div style={{ padding: '10px' }} />
              <input
                {...register('title', { required: true })}
                type="text"
                placeholder="What is it?"
              />
              {errors.title && <p>{missingTitle}</p>}
              <div style={{ padding: '10px' }} />
              <input
                {...register('location', { required: true })}
                type="text"
                placeholder="Where is it?"
              />
              {errors.location && <p>{missingLocation}</p>}
              <div style={{ padding: '10px' }} />
              <button type="submit">{submit}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTodo;

AddNewTodo.propTypes = {
  isFormDisplaying: PropTypes.bool.isRequired,
  toggleFormDisplaying: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
