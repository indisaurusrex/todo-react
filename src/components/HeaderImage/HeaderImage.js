import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderImage.module.css';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import TodoDate from '../Date/Date';
import Progress from '../Progress/Progress';
import Image from '../Image/Image';

/** 
 * Holder for the images which change according to progress, the progress trackers and add new todo button/form
 */
export default function HeaderImage({
  items,
  formDisplay,
  toggleForm,
  addTodo,
  treeToggle,
}) {
  let doneCount = 0;

  items.map((item) => {
    if (item.done) {
      doneCount += 1;
    }
    return doneCount;
  });

  const donePercent = Math.round((doneCount / items.length + Number.EPSILON) * 100) || 0;

  return (
    <div className={styles.headerImage}>
      <Image donePercent={donePercent} treeToggle={treeToggle} />
      <div className={styles.darkShade}>
        <AddNewTodo
          formDisplay={formDisplay}
          toggleForm={toggleForm}
          addTodo={addTodo}
        />
        <Progress donePercent={donePercent} />
        <TodoDate />
      </div>
    </div>
  );
}

HeaderImage.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  formDisplay: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  treeToggle: PropTypes.bool.isRequired,
};
