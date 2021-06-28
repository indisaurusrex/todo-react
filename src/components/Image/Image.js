import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.css';
import weather01 from '../../images/weather-01.jpeg';
import weather02 from '../../images/weather-02.jpg';
import weather03 from '../../images/weather-03.jpg';
import weather04 from '../../images/weather-04.jpg';
import weather05 from '../../images/weather-05.jpg';
import foreststorm from '../../images/lightning.jpg';
import forestrain from '../../images/rain.jpg';
import forestfog from '../../images/fog.jpg';
import forestrainbow from '../../images/rainbowforest.jpg';
import forestpartialsun from '../../images/sun-through-trees.jpg';
import forestsun from '../../images/mountain.jpg';

export default function Image({ donePercent, treeToggle }) {
  let imgSrc = '';

  switch (!treeToggle) {
    case donePercent < 20:
      imgSrc = weather01;
      break;
    case donePercent === 20 || donePercent < 40:
      imgSrc = weather02;
      break;
    case donePercent === 40 || donePercent < 70:
      imgSrc = weather03;
      break;
    case donePercent === 70 || donePercent < 95:
      imgSrc = weather04;
      break;
    default:
      imgSrc = weather05;
  }

  switch (treeToggle) {
    case donePercent < 15:
      imgSrc = foreststorm;
      break;
    case donePercent === 15 || donePercent < 30:
      imgSrc = forestfog;
      break;
    case donePercent === 30 || donePercent < 50:
      imgSrc = forestrain;
      break;
    case donePercent === 50 || donePercent < 75:
      imgSrc = forestrainbow;
      break;
    case donePercent === 75 || donePercent < 95:
      imgSrc = forestpartialsun;
      break;
    default:
      imgSrc = forestsun;
  }

  return <img className={styles.backgroundImage} src={imgSrc} alt="weather" />;
}

Image.propTypes = {
  donePercent: PropTypes.number.isRequired,
  treeToggle: PropTypes.bool.isRequired,
};
