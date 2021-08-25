import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import AddNewTodo from '../AddNewTodo/AddNewTodo';
import TodoDate from '../Date/Date';
import Progress from '../Progress/Progress';
import HeaderImage from '../HeaderImage/HeaderImage';
import tree from '../../images/pine.png';
import cloudSun from '../../images/cloud-sun.png';
import donePercentCalculator from '../../app/donePercentCalculator';

const sceneryLabel = '(scene change)';

/**
 * Holder for the images which change according to progress,
 * the progress trackers and add new todo button/form
 */
const Header = ({ items, addTodo }) => {
  const [isFormDisplaying, setIsFormDisplaying] = useState(false);
  const [sceneryChoice, setSceneryChoice] = useState('weather');

  const toggleFormDisplaying = () => {
    setIsFormDisplaying(!isFormDisplaying);
  };
  const chooseForestScenery = () => {
    setSceneryChoice('forest');
  };
  const chooseWeatherScenery = () => {
    setSceneryChoice('weather');
  };

  return (
    <div className={styles.headerImage}>
      <HeaderImage donePercent={donePercentCalculator(items)} sceneryChoice={sceneryChoice} />
      <div className={styles.darkShade}>
        <AddNewTodo
          isFormDisplaying={isFormDisplaying}
          toggleFormDisplaying={toggleFormDisplaying}
          addTodo={addTodo}
        />
        <Progress donePercent={donePercentCalculator(items)} />
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
        <div className={styles.sceneryLabel}>{sceneryLabel}</div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  addTodo: PropTypes.func.isRequired,
};
