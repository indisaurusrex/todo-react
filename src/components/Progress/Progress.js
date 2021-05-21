import React from "react";

// class Progress extends React.Component {
//     render() {
//       return (
//         <div className="progress-in-header">
//           <p>{this.props.donePercent}% done</p>
//         </div>
//       );
//     }
//   }

function Progress(props) {
  return (
    <div className="progress-in-header">
      <p>{props.donePercent}% done</p>
    </div>
  );
}

export default Progress;
