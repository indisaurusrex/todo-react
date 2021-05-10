import React from 'react';

class Progress extends React.Component {
    render() {
      let doneCount = 0;
  
      this.props.items.map((item) => {
        if (item.done === true) {
          doneCount += 1;
        }
        return doneCount;
      });
  
      let donePercent = (doneCount / this.props.items.length) * 100;
  
      return (
        <div id="progress-in-header" className="flex-item">
          <p>{donePercent}% done</p>
        </div>
      );
    }
  }

  export default Progress;