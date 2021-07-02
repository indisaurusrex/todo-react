import React from 'react';
import Moment from 'react-moment';
import styles from './Date.module.css';

/** 
 * Displays today's date on the header image
 */
export default function TodoDate() {
  return (
    <div className={styles.dateInHeader}>
      <Moment date={new Date()} format="D MMMM YYYY" />
    </div>
  );
}
