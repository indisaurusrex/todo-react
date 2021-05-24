import React from "react";

function Progress(props) {
  return (
    <div className="progress-in-header">
      <p>{props.donePercent}% done</p>
    </div>
  );
}

export default Progress;
