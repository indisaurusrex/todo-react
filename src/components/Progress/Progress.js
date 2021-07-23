import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Progress.module.css';

const percentDone = '% done';
/**
 * Show the progress on the top of the image in the form of done percent, and the circle of done
 */
const Progress = ({ donePercent }) => (
  <div className={styles.progressInHeader}>
    <CircularProgress
      variant="determinate"
      value={donePercent}
      color="inherit"
    />
    <p data-testid="Progress">
      {donePercent}
      {percentDone}
    </p>
  </div>
);

export default Progress;

Progress.propTypes = {
  donePercent: PropTypes.number.isRequired,
};
