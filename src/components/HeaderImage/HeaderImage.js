import React from "react";
import { TodoDate, Progress, AddNewTodo, Image } from "../index";

function HeaderImage({ items, formDisplay, toggleForm, addTodo, treeToggle }) {
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
      <Image donePercent={donePercent} treeToggle={treeToggle} />
      <div className="dark-shade">
        <AddNewTodo
          formDisplay={formDisplay}
          toggleForm={toggleForm}
          addTodo={addTodo}
        />
        <Progress donePercent={donePercent} />
        <TodoDate />
      </div>
    </div>
  );
}

export default HeaderImage;
