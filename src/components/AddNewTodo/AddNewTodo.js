import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from 'react-hook-form';
import styles from './AddNewTodo.module.css';

export function AddNewTodo({ formDisplay, toggleForm, addTodo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdd = (data) => {
    const date2 = new Date(`${data.dueDate} ${data.dueTime}:00`);
    const todo = {
      title: data.title,
      location: data.location,
      dueDate: date2.getTime(),
    };
    addTodo(todo);
    reset();
    toggleForm(false);
  };

  const formDisplayer = formDisplay ? '' : styles.addAppointment;

  return (
    <div>
      <div
        className={`${formDisplayer}`}
      >
        <Button size="small" startIcon={<AddCircleIcon />} onClick={toggleForm}>
          Add an item
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
              {errors.title && <p>Please enter a title</p>}
              <div style={{ padding: '10px' }} />
              <input
                {...register('location', { required: true })}
                type="text"
                placeholder="Where is it?"
              />
              {errors.location && <p>Please enter a location</p>}
              <div style={{ padding: '10px' }} />
              <input {...register('dueDate', { required: true })} type="date" />
              {errors.dueDate && <p>Please enter a date</p>}
              <div style={{ padding: '10px' }} />
              <input {...register('dueTime', { required: true })} type="time" />
              {errors.dueTime && <p>Please enter a time</p>}
              <div style={{ padding: '10px' }} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddNewTodo.propTypes = {
  formDisplay: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
