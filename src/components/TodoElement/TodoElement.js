import React from "react";

function TodoElement({ item, changeCheckbox }) {
  return (
    <tr>
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
}

export default TodoElement;
