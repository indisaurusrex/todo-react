import React from "react";

function Progress(props) {
  return (
    <div className="progress-in-header">
      <p role="header-progress">{props.donePercent}% done</p>
    </div>
  );
}

export default Progress;
