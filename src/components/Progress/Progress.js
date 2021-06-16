import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Progress.module.css';

export function Progress({ donePercent }) {
  return (
    <div className={styles.progressInHeader}>
      <CircularProgress
        variant="determinate"
        value={donePercent}
        color="inherit"
      />
      <p>
        {donePercent}
        % done
      </p>
    </div>
  );
}

Progress.propTypes = {
  donePercent: PropTypes.number.isRequired,
};
