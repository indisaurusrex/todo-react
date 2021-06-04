import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

function Progress(props) {
  return (
    <div className="progress-in-header">
      <CircularProgress variant="determinate" value={props.donePercent} color="white"/>
      <p role="header-progress">{props.donePercent}% done</p>
    </div>
  );
}

export default Progress;
