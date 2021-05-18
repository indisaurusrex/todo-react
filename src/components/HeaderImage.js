import React from "react";
import Date from "./Date";
import Progress from "./Progress";
import AddNewTodo from "./AddNewTodo";
import Image from './Image';

class HeaderImage extends React.Component {
  render() {
    let items = this.props.items;
    let doneCount = 0;
    let donePercent = 0;

    items.map((item) => {
      if (item.done) {
        doneCount += 1;
      }
      return doneCount;
    });

    donePercent = Math.round((doneCount / items.length + Number.EPSILON) * 100);

    return (
      <div className="header-image">
        <Image donePercent={donePercent}/>
        <div className="dark-shade">
          <AddNewTodo
            formDisplay={this.props.formDisplay}
            toggleForm={this.props.toggleForm}
            addTodo={this.props.addTodo}
          />
          <Progress donePercent={donePercent} />
          <Date />
        </div>
      </div>
    );
  }
}

export default HeaderImage;
