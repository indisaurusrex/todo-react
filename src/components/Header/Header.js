import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import TodoDate from '../Date/Date';
import Progress from '../Progress/Progress';
import HeaderImage from '../HeaderImage/HeaderImage';
import tree from '../../images/pine.png';
import cloudSun from '../../images/cloud-sun.png';

/**
 * Holder for the images which change according to progress,
 * the progress trackers and add new todo button/form
 */
const Header = ({ items, addTodo }) => {
  const [isFormDisplay, setIsFormDisplay] = useState(false);
  const [sceneryChoice, setSceneryChoice] = useState('weather');

  const toggleIsFormDisplay = () => {
    setIsFormDisplay(!isFormDisplay);
  };
  const chooseForestScenery = () => {
    setSceneryChoice('forest');
  };
  const chooseWeatherScenery = () => {
    setSceneryChoice('weather');
  };
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
      <HeaderImage donePercent={donePercent} sceneryChoice={sceneryChoice} />
      <div className={styles.darkShade}>
        <AddNewTodo
          isFormDisplay={isFormDisplay}
          toggleFormDisplay={toggleIsFormDisplay}
          addTodo={addTodo}
        />
        <Progress donePercent={donePercent} />
        <TodoDate />
        <input
          type="image"
          alt="tree scenery button"
          className={styles.treeButton}
          src={tree}
          onClick={chooseForestScenery}
        />
        <input
          type="image"
          alt="weather scenery button"
          className={styles.treeButton}
          src={cloudSun}
          onClick={chooseWeatherScenery}
        />
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  addTodo: PropTypes.func.isRequired,
};
