import React from "react";

function TodoList({ items, changeCheckbox }) {
  let rows = items.map((item) => {
    let row = (
      <tr key={item.id}>
        <th id="title-th">{item.title}</th>
        <th>{item.location}</th>
        <th>{item.dueTime}</th>
        <th>
          <input
            id={item.id}
            type="checkbox"
            defaultChecked={item.done}
            onChange={() => changeCheckbox(item)}
          />
        </th>
      </tr>
    );
    return row;
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
