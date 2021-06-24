import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderImage.module.css';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import TodoDate from '../Date/Date';
import Progress from '../Progress/Progress';
import Image from '../Image/Image';

export default function HeaderImage({
  items,
  formDisplay,
  toggleForm,
  addTodo,
  treeToggle,
}) {
  let doneCount = 0;
  let donePercent = 0;

  items.map((item) => {
    if (item.done) {
      doneCount += 1;
    }
    return doneCount;
  });

  donePercent = Math.round((doneCount / items.length + Number.EPSILON) * 100);

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
