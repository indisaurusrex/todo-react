import React from 'react';
import Moment from 'react-moment';

class Date extends React.Component {
    render() {
      return (
        <div className="date-in-header">
          <Moment date={new Date()} format={"dd MMMM YYYY"} />
        </div>
      );
    }
  }

export default Date;