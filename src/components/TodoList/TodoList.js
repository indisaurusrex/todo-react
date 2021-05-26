import React from "react";
import { TodoElement } from "../index";

function TodoList({ items, changeCheckbox }) {
    let sortedList = [...items];
    
    sortedList.sort((a, b) => {
      if (a.done < b.done) {
        return -1;
      }
      if (a.done > b.done) {
        return 1;
      }
      return 0;
    }); 

  let rows = sortedList.map((item) => {
    return (
      <TodoElement key={item.id} item={item} changeCheckbox={changeCheckbox} />
    );
  });

  return (
    <div>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Due</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default TodoList;
