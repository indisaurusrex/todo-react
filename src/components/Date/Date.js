import React from 'react';
import Moment from 'react-moment';

export function TodoDate() {
  return (
    <div className="date-in-header">
      <Moment date={new Date()} format="D MMMM YYYY" />
    </div>
  );
}

// export default TodoDate;
