import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderImage.module.css';
import { weatherImageList, forestImageList } from '../../app/images';

/**
 * Render the image at the top of the app according to the tree toggle
 * and progress tracker (donePercent)
 */
const HeaderImage = ({ donePercent, treeToggle }) => {
  let imgSrc = '';

  if (!treeToggle) {
    imgSrc = weatherImageList.find((x) => x.maxNumber >= donePercent).image;
  } else {
    imgSrc = forestImageList.find((x) => x.maxNumber >= donePercent).image;
  }

  return <img className={styles.image} src={imgSrc} alt="weather" />;
};

export default HeaderImage;

HeaderImage.propTypes = {
  donePercent: PropTypes.number.isRequired,
  treeToggle: PropTypes.bool.isRequired,
};
