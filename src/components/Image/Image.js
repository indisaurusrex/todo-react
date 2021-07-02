import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';
import { weatherImageList, forestImageList } from '../../app/images';

export default function Image({ donePercent, treeToggle }) {
  let imgSrc = '';

  if (!treeToggle) {
    imgSrc = weatherImageList.find((x) => x.maxNumber >= donePercent).image;
  } else {
    imgSrc = forestImageList.find((x) => x.maxNumber >= donePercent).image;
  }

  return <img className={styles.backgroundImage} src={imgSrc} alt="weather" />;
}

Image.propTypes = {
  donePercent: PropTypes.number.isRequired,
  treeToggle: PropTypes.bool.isRequired,
};
