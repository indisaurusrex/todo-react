import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import TodoDate from '../Date/Date';
import Progress from '../Progress/Progress';
import HeaderImage from '../HeaderImage/HeaderImage';

/**
 * Holder for the images which change according to progress,
 * the progress trackers and add new todo button/form
 */
const Header = ({
  items,
  isFormDisplay,
  toggleForm,
  addTodo,
  treeToggle,
}) => {
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
      <HeaderImage donePercent={donePercent} treeToggle={treeToggle} />
      <div className={styles.darkShade}>
        <AddNewTodo
          isFormDisplay={isFormDisplay}
          toggleForm={toggleForm}
          addTodo={addTodo}
        />
        <Progress donePercent={donePercent} />
        <TodoDate />
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  isFormDisplay: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  treeToggle: PropTypes.bool.isRequired,
};
