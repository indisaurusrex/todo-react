import React from "react";

function TodoElement({ item, changeCheckbox, removeTodo }) {
  const theDate = new Date(item.dueDate);
  return (
    <tr>
      <th id="title-th">{item.title}</th>
      <th>{item.location}</th>
      <th>{`${theDate.toLocaleDateString("en-US", {
        day: "numeric",
      })} ${theDate.toLocaleDateString("en-US", {
        month: "short",
      })} ${theDate.getHours()}:${theDate.getMinutes()}`}</th>
      <th>
        <input
          id={item.id}
          type="checkbox"
          defaultChecked={item.done}
          onChange={() => {changeCheckbox(item) }}
        />
        <button
          onClick={() => {
            removeTodo(item.id);
          }}
        >
          x
        </button>
      </th>
    </tr>
  );
}

export default TodoElement;
