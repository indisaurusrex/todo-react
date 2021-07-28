import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderImage.module.css';
import { weatherImageList, forestImageList } from './imageMapping';

/**
 * Render the image at the top of the app according to the tree toggle
 * and progress tracker (donePercent)
 */
const HeaderImage = ({ donePercent, sceneryChoice }) => {
  let imgSrc = '';

  if (sceneryChoice === 'weather') {
    imgSrc = weatherImageList.find((x) => x.maxNumber >= donePercent).image;
  } else if (sceneryChoice === 'forest') {
    imgSrc = forestImageList.find((x) => x.maxNumber >= donePercent).image;
  }

  return <img className={styles.image} src={imgSrc} alt="scenery" />;
};

export default HeaderImage;

HeaderImage.propTypes = {
  donePercent: PropTypes.number.isRequired,
  sceneryChoice: PropTypes.string.isRequired,
};
